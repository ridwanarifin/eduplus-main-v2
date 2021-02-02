<template>
  <div>
    <v-sheet class="pb-6 mb-16">
      <lazy-breadcrumbs />
      <lazy-detil-sekolah />
    </v-sheet>

    <lazy-list-sekolah-lainnya />
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  middleware ({ route, store }) {
    store.commit('SET_CRUMBS', [{
      to: '/',
      exact: true,
      name: 'Daftar Sekolah'
    }, {
      to: route.fullPath,
      exact: true,
      name: 'Detail Sekolah'
    }])
  },
  async fetch () {
    await this.getDetailSchool(this.$route.params.slug)
  },
  destroyed () {
    this.resetAccessDetail()
    this.resetSekolahDetail()
  },
  methods: {
    ...mapActions({
      getDetailSchool: 'sekolah/getDetailSchool'
    }),
    ...mapMutations({
      resetAccessDetail: 'sekolah/RESET_ACCESS_DETAIL',
      resetSekolahDetail: 'sekolah/RESET_SEKOLAH_DETAIL'
    })
  }
}
</script>
