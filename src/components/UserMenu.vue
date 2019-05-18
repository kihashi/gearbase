<template>
    <span>
        <span v-if="!isAuthenticated">
            <v-dialog v-model="signUp" max-width=500>
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on" flat>Sign Up</v-btn>
                </template>
                <Signup></Signup>
            </v-dialog>
            <v-dialog v-model="login" max-width=500>
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on" color="red">Login</v-btn>
                </template>
                <Login></Login>
            </v-dialog>
        </span>
        <span v-else>
            <v-btn @click="logout">
                <v-icon>mdi-account-box</v-icon>
            </v-btn>
        </span>
    </span>
</template>

<script>
import Signup from '@/views/Signup.vue'
import Login from '@/views/Login.vue'
export default {
    name: 'UserMenu',
    components: {
        Signup,
        Login
    },
    data: () => ({
        signUp: false,
        login: false
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