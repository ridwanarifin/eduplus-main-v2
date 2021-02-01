<template>
  <div class="mt-10">
    <lazy-breadcrumbs />
    <lazy-form-get-access />
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  meta: {
    crumbs: [{
      name: 'Pencarian Sekolah',
      to: '/schools/registration',
      exact: true
    }, {
      name: 'Dapatkan Akses',
      to: '/schools/get-access',
      exact: true,
      disabled: true
    }]
  },
  async fetch () {
    if (!this.$route.query.school) { return }
    const query = this.$route.query.school
    await this.getDetailSchool(query)
  },
  destroyed () {
    this.resetAccessDetail()
    this.resetGetAccess()
  },
  methods: {
    ...mapMutations('sekolah', {
      resetAccessDetail: 'RESET_ACCESS_DETAIL'
    }),
    ...mapMutations('form', {
      resetGetAccess: 'RESET_GET_ACCESS'
    }),
    ...mapActions('sekolah', [
      'getDetailSchool'
    ])
  }
}
</script>
