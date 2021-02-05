<template>
  <lazy-base-tab-list-favorit @tab-change="$emit('tab-change', $event)">
    <template #default="props">
      <v-data-iterator
        :items="provinsi_init"
        :items-per-page="perPage"
        :search="props.search"
        class="text-center"
        hide-default-footer
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
                    :src="$_.head(item.images) || require('~/assets/img/placeholder-school.png?webp')"
                    :lazy-src="$_.head(item.images) || require('~/assets/img/placeholder-school.png?webp')"
                  >
                    <template #placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        />
                      </v-row>
                    </template>
                  </v-img>
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

        <template #footer>
          <div
            v-show="$_.size(provinsi_init) > 8"
            class="text-center mt-16"
          >
            <v-btn
              v-if="perPage < $_.size(provinsi_init)"
              text
              large
              rounded
              color="primary"
              class="btn-secondary px-sm-10"
              @click.stop="perPage += 4"
            >
              Muat lebih banyak
            </v-btn>

            <v-btn
              v-else
              text
              large
              rounded
              color="primary"
              class="btn-secondary px-sm-10"
              @click.stop="perPage = 8"
            >
              Muat lebih sedikit
            </v-btn>
          </div>
        </template>
      </v-data-iterator>
    </template>
  </lazy-base-tab-list-favorit>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    perPage: 8
  }),
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
