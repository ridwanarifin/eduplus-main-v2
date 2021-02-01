<template>
  <v-app style="background: #FAFAFA">
    <!-- Navigation drawer -->
    <lazy-navigation-drawer
      v-show="$vuetify.breakpoint.smAndDown"
      :drawer="drawer"
      :mini-variant="miniVariant"
      :data="items"
      @on-close-drawer="drawer = $event"
    />
    <!-- end Navigation drawer -->

    <!-- Appbar -->
    <lazy-app-bar
      :title="title"
      :data="items"
      :drawer="drawer"
      :mini-variant="miniVariant"
      @on-click-drawer="drawer = !drawer"
      @on-click-mini-variant="miniVariant = !miniVariant"
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
import {
  mdiHomeOutline,
  mdiSearchWeb,
  mdiContactsOutline,
  mdiLogin
} from '@mdi/js'

export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [{
        name: 'Home',
        icon: mdiHomeOutline,
        path: '/'
      }, {
        name: 'Cari Sekolah',
        icon: mdiSearchWeb,
        path: '/schools/search'
      }, {
        name: 'Hubungin Kami',
        icon: mdiContactsOutline,
        path: '/contact-us'
      }, {
        name: 'Login',
        icon: mdiLogin,
        path: ''
      }],
      miniVariant: false,
      title: 'eduplus +'
    }
  }
}
</script>
