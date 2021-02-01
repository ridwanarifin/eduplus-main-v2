<template>
  <lazy-base-tab-list-favorit @tab-change="on_change">
    <template #default="props">
      <v-data-iterator
        :items="init"
        :items-per-page="4"
        :search="props.search"
        class="text-center"
      >
        <template #default="{ items }">
          <v-row align-sm="center">
            <template v-if="pending">
              <v-col
                v-for="d of 8"
                :key="d"
                cols="12"
                sm="4"
                md="3"
              >
                <v-skeleton-loader
                  type="card"
                  loading
                />
              </v-col>
            </template>

            <template v-else>
              <v-col
                v-for="(d, idx) in items"
                :key="idx"
                cols="12"
                sm="4"
                md="3"
              >
                <v-card
                  class="shadow-primary text-left"
                  :to="`/schools/favorite/${$_.kebabCase(d.name)}`"
                  nuxt
                  exact
                  replace
                >
                  <v-img
                    :src="getImage(d.name, 'green')"
                    :lazy-src="getImage(d.name, 'green')"
                  />
                  <v-card-title v-text="d.name" />
                  <v-card-subtitle v-text="`${d.count} ${props.title}`" />
                </v-card>
              </v-col>
            </template>
          </v-row>
        </template>
      </v-data-iterator>
    </template>
  </lazy-base-tab-list-favorit>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'

export default {
  computed: {
    ...mapFields('form', [
      'search_favorite_school',
      'tabActive'
    ]),
    ...mapGetters('favorit', ['init', 'pending'])
  },
  methods: {
    ...mapActions('favorit', ['getFavoritByContext']),
    on_change (args) {
      this.getFavoritByContext({ stage: args })
    }
  }
}
</script>
