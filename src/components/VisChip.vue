<template>
    <v-chip>
        {{ visibility }}
        <v-icon right>{{ icon }}</v-icon>
    </v-chip> 
</template>

<script>
export default {
    name: 'VisChip',
    props: {
        visibility: {
            default: () => {
                return 'Public'
            }
        }
    },
    computed: {
        icon: function () {
            switch(this.visibility){
                case 'Public':
                    return 'mdi-earth'
                case 'Unlisted':
                    return 'mdi-eye-off'
                case 'Private':
                    return 'mdi-account'
                default:
                    return 'mdi-earth'
            }
        }
    }

}
</script>

<style>

</style>
