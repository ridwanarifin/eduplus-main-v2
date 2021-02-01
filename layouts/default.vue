<template>
  <v-app style="background: #FAFAFA">
    <!-- Navigation drawer -->
    <lazy-navigation-drawer
      v-show="$vuetify.breakpoint.smAndDown"
      :drawer="drawer"
      :data="items"
      @on-close-drawer="drawer = $event"
    />
    <!-- end Navigation drawer -->

    <!-- Appbar -->
    <lazy-app-bar
      :title="title"
      :data="items"
      :drawer="drawer"
      @on-click-drawer="drawer = !drawer"
    />

    <!-- Main -->
    <v-main class="pr-sm-0">
      <nuxt />
    </v-main>
    <!-- end Main -->
    <!-- Footer -->
    <lazy-footer class="mt-16" />
    <!-- end Footer -->
  </v-app>
</template>

<script>
import { drawerItems } from '~/utils/items.js'

export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: drawerItems,
      title: 'eduplus +'
    }
  }
}
</script>
