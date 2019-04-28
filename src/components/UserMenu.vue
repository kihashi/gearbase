<template>
    <span>
        <span v-if="!isAuthenticated">
            <v-btn to="/signup" flat>Sign Up</v-btn>
            <v-btn to="/login" color="red">Login</v-btn>
        </span>
        <span v-else>
            <v-btn @click="logout">
                <v-icon>mdi-account-box</v-icon>
            </v-btn>
        </span>
    </span>
</template>

<script>
export default {
    name: 'UserMenu',
    data: () => ({
    }),
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut')
        }
    }
}
</script>