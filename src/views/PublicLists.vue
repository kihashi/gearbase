<template>
<div>
    <v-toolbar>
        <v-toolbar-title>
            Public Gear Lists
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
    </v-toolbar>
    <v-data-table
        :headers="headers"
        :items="lists"
        :pagination.sync="pagination"
        :search="search" > 

        <template v-slot:no-data>
            <v-alert :value="true" color="info" icon="warning">
                I can't find any public lists. Something must have gone wrong. Try again later.
            </v-alert>
        </template>
        <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.desc }}</td>
            <td>
                <v-chip v-for="tag in props.item.tags" v-bind:key="tag">{{tag}}</v-chip>
            </td>
        </template>
    </v-data-table>
</div>
    
</template>

<script>
export default {
    name: 'PublicLists',
    components: {

    },
    props: {

    },
    data: () => ({
        pagination: {
            rowsPerPage: 10
        },
        search: '',
        headers: [
            {
                text: 'Name',
                align: 'left',
                value: 'name'
            },
            { text: 'Desc', value: 'desc'},
            { text: 'Tags', value: 'tags' }

        ],
        lists: [
  {
    "_id": "5ccde11aabb768f347ad8f10",
    "name": "magna ad",
    "desc": "duis minim commodo ullamco",
    "tags": [
      "exercitation",
      "mollit",
      "sunt",
      "id",
      "pariatur"
    ]
  },
  {
    "_id": "5ccde11a8d8aa015daa228e7",
    "name": "irure nostrud",
    "desc": "ea aliquip et eu",
    "tags": [
      "exercitation",
      "ex",
      "exercitation",
      "nisi",
      "adipisicing"
    ]
  },
  {
    "_id": "5ccde11a8cb364c0d9d8070d",
    "name": "adipisicing duis",
    "desc": "cupidatat consequat laborum eiusmod",
    "tags": [
      "nisi",
      "deserunt",
      "culpa",
      "cillum",
      "magna"
    ]
  },
  {
    "_id": "5ccde11a79c4f8e25d73a1d1",
    "name": "do magna",
    "desc": "labore dolore quis adipisicing",
    "tags": [
      "nisi",
      "magna",
      "aliquip",
      "ut",
      "dolore"
    ]
  },
  {
    "_id": "5ccde11a173df87b3378a37d",
    "name": "irure consectetur",
    "desc": "nulla deserunt cupidatat mollit",
    "tags": [
      "velit",
      "do",
      "laborum",
      "consequat",
      "anim"
    ]
  },
  {
    "_id": "5ccde11a902e0d137b6effe2",
    "name": "esse velit",
    "desc": "labore sunt qui amet",
    "tags": [
      "sit",
      "aliquip",
      "enim",
      "cillum",
      "consequat"
    ]
  },
  {
    "_id": "5ccde11aa2eb70a84fcff228",
    "name": "anim est",
    "desc": "exercitation incididunt ipsum ex",
    "tags": [
      "cupidatat",
      "eu",
      "adipisicing",
      "ipsum",
      "occaecat"
    ]
  },
  {
    "_id": "5ccde11a181e128c96be3ed9",
    "name": "anim adipisicing",
    "desc": "qui dolor aute reprehenderit",
    "tags": [
      "in",
      "nisi",
      "magna",
      "eiusmod",
      "eu"
    ]
  }
        ]

    }),
    methods: {

    }

}
</script>

<style>

</style>

