<template>
  <div>
    <lazy-breadcrumbs />
    <lazy-detil-sekolah :data="school" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
  data: () => ({
    pending: false,
    school: {}
  }),
  async fetch () {
    this.pending = true
    await this.getDetailSekolah(this.$route.params.slug)
      .then((res) => {
        this.school = res
      })
      .catch((err) => {
        console.warn(err)
      })
      .finally(() => {
        this.pending = false
      })
  },
  methods: {
    ...mapActions(['getDetailSekolah'])
  }
}
</script>
