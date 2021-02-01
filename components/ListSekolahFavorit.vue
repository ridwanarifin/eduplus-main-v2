<template>
  <lazy-base-tab-list-favorit @tab-change="$emit('tab-change', $event)">
    <template #default="props">
      <v-data-iterator
        :items="provinsi_init"
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
                v-for="(item, idx) in items"
                :key="idx"
                cols="12"
                sm="4"
                md="3"
              >
                <v-card
                  nuxt
                  exact
                  :to="`/schools/detail/${item.uuid}`"
                  class="shadow-primary text-left"
                >
                  <v-img
                    :src="getImage(item.name, 'blue')"
                    :lazy-src="getImage(item.name, 'blue')"
                  />
                  <v-card-title>
                    {{ item.name | truncate(sizeName) }}
                  </v-card-title>
                  <v-card-subtitle>
                    {{ item.address | truncate(sizeAddress) }}
                  </v-card-subtitle>
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
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('favorit', ['pending', 'provinsi_init']),
    sizeName () {
      if (this.$vuetify.breakpoint.xs) {
        return 27
      } else if (this.$vuetify.breakpoint.sm) {
        return 13
      }
      return 15
    },
    sizeAddress () {
      if (this.$vuetify.breakpoint.xs) {
        return 35
      } else if (this.$vuetify.breakpoint.sm) {
        return 23
      }
      return 30
    }
  }
}
</script>
