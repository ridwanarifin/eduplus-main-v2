<template>
  <div>
    <lazy-jumbotron class="mb-6" />
    <lazy-list-promo class="mb-16" />
    <lazy-list-provinsi-favorit />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  created () {
    this.resetDataSekolah()
  },
  methods: {
    ...mapMutations({
      resetDataSekolah: 'sekolah/RESET_DATA_INIT'
    })
  }
}
</script>
