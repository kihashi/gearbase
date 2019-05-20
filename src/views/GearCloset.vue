<template>
    <div>
        <v-toolbar>
            <v-toolbar-title>My Gear Closet</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
            <v-dialog v-model="dialog" max-width="900px">
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" v-on="on">New</v-btn>
                </template>

                <v-card>
                    <v-card-title><span class="headline">{{ editTitle }}</span></v-card-title>
                    <v-card-text>
                      <v-container grid-list-md>
                        <v-layout wrap>
                          <v-flex xs12 sm4 md4>
                            <v-text-field v-model="editedItem.name" label="Item Name"></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm8 md8>
                            <v-text-field v-model="editedItem.desc" label="Description"></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm6 md4>
                            <v-text-field v-model="editedItem.link" label="Link"></v-text-field>
                          </v-flex>
                          <v-flex xs6 sm3 md2>
                            <v-text-field v-model="editedItem.price" label="Price" type="number" prefix="$"></v-text-field>
                          </v-flex>
                          <v-flex xs6 sm3 md2>
                            <v-text-field v-model="editedItem.weight" label="Weight" type="number" suffix="g"></v-text-field>
                          </v-flex>
                          <v-flex xs6 sm3 md2>
                            <v-text-field v-model="editedItem.qty" label="Qty" type="number"></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                      <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-toolbar>
        <v-data-table
            :headers="headers"
            :items="gear"
            :pagination.sync="pagination"
            :search="search"
            class="elevation-1">
            <template v-slot:no-data>
                <v-alert :value="true" color="info" icon="warning">
                    There's no gear in your closet. 
                </v-alert>
            </template>
            <template v-slot:items="props">
                <td>
                    <v-edit-dialog
                        :return-value.sync="props.item.name"
                        lazy
                        >
                        {{ props.item.name }}
                        <template v-slot:input>
                            <v-text-field
                                v-model="props.item.name"
                                single-line
                                counter
                                ></v-text-field>
                        </template>
                    </v-edit-dialog>
                </td>
                <td>
                    <v-edit-dialog
                        :return-value.sync="props.item.desc"
                        lazy
                        >
                        {{ props.item.desc }}
                        <template v-slot:input>
                            <v-text-field
                                v-model="props.item.desc"
                                single-line
                                counter
                                ></v-text-field>
                        </template>
                    </v-edit-dialog>
                </td>
                <td>
                    <v-edit-dialog
                        :return-value.sync="props.item.link"
                        lazy
                        >
                        {{ props.item.link }}
                        <template v-slot:input>
                            <v-text-field
                                v-model="props.item.link"
                                single-line
                                counter
                                ></v-text-field>
                        </template>
                    </v-edit-dialog>
                </td>
                <td class="text-xs-right">
                    <v-edit-dialog
                        :return-value.sync="props.item.price"
                        lazy
                        >
                        {{ props.item.price }}
                        <template v-slot:input>
                            <v-text-field
                                v-model="props.item.price"
                                single-line
                                counter
                                ></v-text-field>
                        </template>
                    </v-edit-dialog>
                </td>
                <td class="text-xs-right">
                    <v-edit-dialog
                        :return-value.sync="props.item.weight"
                        lazy
                        >
                        {{ props.item.weight }}
                        <template v-slot:input>
                            <v-text-field
                                v-model="props.item.weight"
                                single-line
                                counter
                                ></v-text-field>
                        </template>
                    </v-edit-dialog>
                </td>
                <td class="text-xs-right">
                    <v-edit-dialog
                        :return-value.sync="props.item.qty"
                        lazy
                        >
                        {{ props.item.qty }}
                        <template v-slot:input>
                            <v-text-field
                                v-model="props.item.qty"
                                single-line
                                counter
                                ></v-text-field>
                        </template>
                    </v-edit-dialog>
                </td>
                <td class="justify-center layout px-0">
                  <v-icon
                    small
                    class="mr-2"
                    @click="editItem(props.item)"
                  >
                    edit
                  </v-icon>
                  <v-icon
                    small
                    @click="deleteItem(props.item)"
                  >
                    delete
                  </v-icon>
                </td>
            </template>

        </v-data-table>
    </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
    name: 'UserMenu',
    components: {
    },
    watch: {
      dialog (val) {
        val || this.close()
      }
    },
    data: () => ({
        pagination: {
            rowsPerPage: -1
        },
        dialog: false,
        search: '',
        editIndex: -1,
        editedItem: {
          name: "",
          desc: "",
          link: "",
          price: 0,
          weight: 0,
          qty: 1,
          tags: []
        },
        defaultItem: {
          name: "",
          desc: "",
          link: "",
          price: 0,
          weight: 0,
          qty: 1,
          tags: []
        },
        headers: [
            {
                text: 'Name',
                align: 'left',
                value: 'name'
            },
            { text: 'Desc', value: 'desc'},
            { text: 'Link', value: 'link'},
            { text: 'Price', value: 'price'},
            { text: 'Weight', value: 'weight'},
            { text: 'Qty', value: 'qty'}
        ],
        gear: [
  {
    "_id": "5cca314c60ff1c9a08a7c8d9",
    "name": "aliquip minim",
    "desc": "amet elit eu amet",
    "link": "http://Netility.com",
    "price": "220.4885",
    "weight": "292.8241",
    "qty": 8,
    "tags": [
      "aute",
      "consequat",
      "enim",
      "tempor",
      "excepteur"
    ]
  },
  {
    "_id": "5cca314c9a1ebb18dda22307",
    "name": "ullamco commodo",
    "desc": "quis consectetur amet ut",
    "link": "http://Tellifly.com",
    "price": "167.6304",
    "weight": "149.4982",
    "qty": 10,
    "tags": [
      "non",
      "aliqua",
      "laboris",
      "adipisicing",
      "deserunt"
    ]
  },
  {
    "_id": "5cca314c54a9f886cc865cfe",
    "name": "proident excepteur",
    "desc": "esse proident quis consequat",
    "link": "http://Zillactic.com",
    "price": "255.9301",
    "weight": "183.7942",
    "qty": 10,
    "tags": [
      "dolor",
      "veniam",
      "elit",
      "culpa",
      "reprehenderit"
    ]
  },
  {
    "_id": "5cca314c15b225aedef93f60",
    "name": "culpa dolore",
    "desc": "laboris culpa cillum non",
    "link": "http://Greeker.com",
    "price": "160.016",
    "weight": "224.623",
    "qty": 4,
    "tags": [
      "sit",
      "nisi",
      "esse",
      "velit",
      "excepteur"
    ]
  },
  {
    "_id": "5cca314c7bfcc240af65f972",
    "name": "eiusmod consequat",
    "desc": "dolore minim nulla reprehenderit",
    "link": "http://Ecrater.com",
    "price": "6.7089",
    "weight": "227.8483",
    "qty": 5,
    "tags": [
      "pariatur",
      "aliqua",
      "irure",
      "dolore",
      "in"
    ]
  },
  {
    "_id": "5cca314c4fbf90045d8d918a",
    "name": "qui aute",
    "desc": "dolore excepteur excepteur et",
    "link": "http://Blurrybus.com",
    "price": "253.7529",
    "weight": "195.6611",
    "qty": 1,
    "tags": [
      "voluptate",
      "labore",
      "in",
      "nisi",
      "excepteur"
    ]
  },
  {
    "_id": "5cca314c63c2e0b5418e9b2c",
    "name": "adipisicing commodo",
    "desc": "adipisicing officia dolor anim",
    "link": "http://Combogen.com",
    "price": "185.076",
    "weight": "39.4312",
    "qty": 4,
    "tags": [
      "minim",
      "reprehenderit",
      "id",
      "magna",
      "velit"
    ]
  },
  {
    "_id": "5cca314c8f8d25be22158156",
    "name": "Lorem dolor",
    "desc": "magna incididunt proident duis",
    "link": "http://Kyaguru.com",
    "price": "18.7458",
    "weight": "144.4223",
    "qty": 7,
    "tags": [
      "fugiat",
      "excepteur",
      "sit",
      "non",
      "voluptate"
    ]
  }
]
    }),
    computed: {
      editTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },
    methods: {
      save () {
        if (this.editIndex > -1) {
          Object.assign(this.gear[this.editIndex], this.editedItem)
        } else {
          this.gear.push(this.editedItem)
        }
        this.close()

      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editIndex = -1
        }, 300)
      },
      deleteItem (item) {
        const index = this.gear.indexOf(item)
        confirm('Are you sure that you want to delete this item?') && this.gear.splice(index, 1)
      },
      editItem (item) {
        this.editIndex = this.gear.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      }
      
    }
}
</script>