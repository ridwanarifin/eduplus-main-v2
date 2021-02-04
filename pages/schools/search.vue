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
  created () {
    this.reset()
  },
  methods: {
    ...mapMutations({
      reset: 'RESET_CONTEXT_SEARCH_ADDRESS'
    })
  }
}
</script>
