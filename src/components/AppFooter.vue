<template>
    <v-footer :inset="footer.inset" app>
      <span class="px-3">&copy; {{ new Date().getFullYear() }} {{ name }} </span>
    </v-footer>
</template>

<script>
export default {
    name: 'app-footer',
    data: () => ({
        name: 'John Cleaver',
        footer: {
            inset: false
        }
    })
}
</script>

