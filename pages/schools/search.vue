<template>
  <v-sheet class="container mx-auto" color="#FAFAFA">
    <breadcrumbs />
    <nuxt-child />
  </v-sheet>
</template>

<script>
import { mapMutations } from 'vuex'
import Breadcrumbs from '~/components/Breadcrumbs.vue'

export default {
  components: { Breadcrumbs },
  destroyed () {
    this.reset()
  },
  methods: {
    ...mapMutations('sekolah', {
      reset: 'RESET_DATA'
    })
  }
}
</script>
