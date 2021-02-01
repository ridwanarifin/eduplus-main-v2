<template>
  <v-container class="px-6 px-md-0">
    <v-breadcrumbs
      v-show="getBreadcrumb.length"
      :items="getBreadcrumb"
      large
    >
      <template #item="{ item }">
        <v-breadcrumbs-item
          nuxt
          ripple
          v-bind="item"
          class="text-capitalize"
        >
          {{ item.name | capitalize }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </v-container>
</template>

<script>
export default {
  computed: {
    getBreadcrumb () {
      return this.$store.state.breadcrumbs
    }
  }
}
</script>
