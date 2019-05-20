<template>
<v-layout>
    <v-flex xs12 sm6>
        <v-card>
            <v-card-title primary-title>
                <h1 class="headline">{{ list.name }}</h1>
                <v-spacer></v-spacer>
                <VisChip :visibility="list.visibility"></VisChip>
            </v-card-title>
            <v-card-text>
                <h3 class="subheading">
                    {{ list.desc }}
                </h3>
                <p>
                    {{ list.long_desc }}
                </p>
                <v-divider></v-divider>
                <div class="mt-3">
                    <v-chip v-for="tag in list.tags" :key="tag">
                        {{ tag }}
                    </v-chip>
                </div>
            </v-card-text>
        </v-card>
    </v-flex>
    <v-flex xs12 sm6>
        <v-card>
            <v-card-title primary-title>
                <h1 class="headline">{{ list.name }}</h1>
                <v-spacer></v-spacer>
                <VisChip :visibility="list.visibility"></VisChip>
            </v-card-title>
            <v-card-text>
                <h3 class="subheading">
                    {{ list.desc }}
                </h3>
                <p>
                    {{ list.long_desc }}
                </p>
                <v-divider></v-divider>
                <div class="mt-3">
                    <v-chip v-for="tag in list.tags" :key="tag">
                        {{ tag }}
                    </v-chip>
                </div>
            </v-card-text>
        </v-card>
    </v-flex>
</v-layout>
    
</template>

<script>
import VisChip from '@/components/VisChip'
export default {
    name: 'List',
    components: {
        VisChip
    },
    props: {
        list: {
            default: () => {
                return {
                    _id: '5ccde11a8d8aa015daa228e7',
                    name: 'My List',
                    visibility: 'Unlisted',
                    desc: 'A Lightweight summer list',
                    long_desc: 'This is the list that I bring with me when using a hammock.\n\nIf I am on the ground, I use another list.',
                    tags: [
                        "nisi",
                        "deserunt",
                        "culpa",
                        "cillum",
                        "magna"
                    ]
                }
            }
        }

    },
    data: () => ({

    }),
    methods: {

    }
}
</script>

<style>

</style>
