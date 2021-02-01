<template>
  <div>
    <lazy-jumbotron-second :title="$_.upperCase($route.params.slug)" />
    <lazy-breadcrumbs />
    <lazy-list-sekolah-favorit @tab-change="on_change" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'
export default {
  middleware ({ route, store, $_ }) {
    store.commit('SET_CRUMBS', [{
      to: '/',
      exact: true,
      name: 'Home'
    }, {
      to: route.fullPath,
      exact: true,
      name: $_.upperCase(route.params.slug)
    }])
  },
  async fetch () {
    await this.getFavoritByContext({
      stage: this.tabActive,
      id_province: this.provinsi_find.id
    })
  },
  computed: {
    ...mapFields('form', ['tabActive']),
    slug () {
      return this.$route.params.slug
    },
    provinsi_find () {
      return this.$store.getters.provinsi_find(
        this.$_.upperCase(this.slug)
      )
    }
  },
  methods: {
    ...mapActions('favorit', ['getFavoritByContext']),
    async on_change (args) {
      await this.getFavoritByContext({
        stage: args,
        id_province: this.provinsi_find.id
      })
    }
  }
}
</script>
