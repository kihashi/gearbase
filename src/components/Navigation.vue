<script>
/* eslint-disable */
</script>
<template>

    <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>mdi-earth</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Public Lists</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>mdi-door</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Gear Closet</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>mdi-format-list-bulleted</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>My Gear Lists</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>

<script>
export default {
    name: 'Navigation',
    data: () => ({
    })
}
</script>
