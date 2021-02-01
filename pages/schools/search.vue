<template>
  <v-sheet class="container mx-auto" color="#FAFAFA">
    <breadcrumbs />
    <nuxt-child />
  </v-sheet>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
export default {
  components: { Breadcrumbs }
}
</script>
