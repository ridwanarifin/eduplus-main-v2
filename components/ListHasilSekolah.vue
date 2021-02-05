<template>
  <v-data-iterator
    :items="dataSource.data"
    :items-per-page="dataSource.per_page || 15"
    :page="dataSource.current_page || 1"
    hide-default-footer
  >
    <template #header>
      <div class="mb-16">
        <v-btn
          text
          rounded
          color="primary"
          class="btn-secondary px-6 mx-auto"
        >
          {{ dataSource.total }} {{ context.stage || 'Sekolah' }} Ditemukan
        </v-btn>
      </div>
    </template>

    <template #no-data>
      <div class="text-center py-8 py-sm-16">
        No data available
      </div>
    </template>

    <template #default="{ items }">
      <v-row align-sm="center">
        <v-col
          v-for="(item, index) in items"
          :key="index"
          cols="12"
          sm="4"
          md="3"
        >
          <v-card
            nuxt
            exact
            :loading="loading"
            :to="`/schools/detail/${item.uuid}`"
            class="shadow-primary"
          >
            <v-img
              :src="$_.isEmpty(item.images) ? getImage(item.name, 'school') : $_.first(item.images)"
              :lazy-src="$_.isEmpty(item.images) ? getImage(item.name, 'school') : $_.first(item.images)"
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
            <v-card-title
              class="text-truncate"
              :title="item.name"
            >
              {{ item.name | truncate(sizeName) }}
            </v-card-title>

            <v-card-text
              class="text-truncate"
              :title="item.address"
            >
              {{ item.address | truncate(sizeAddress) }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>

    <template v-if="$_.size(dataSource.data)" #footer>
      <v-row class="mt-16" align-sm="center" justify-sm="center">
        <v-col
          cols="12"
          sm="auto"
        >
          <v-pagination
            v-model="page"
            circle
            :length="numberOfPages"
            :total-visible="dataSource.per_page || 7"
            @input="postPaginationSearch"
            @next="postPaginationSearch"
            @previous="postPaginationSearch"
          />
        </v-col>
      </v-row>
    </template>
  </v-data-iterator>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
    dataSource: {
      type: Object,
      required: true,
      default: () => ({
        data: []
      })
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    page: 1
  }),
  computed: {
    ...mapGetters({
      context: 'context_search_address'
    }),
    numberOfPages () {
      if (!this.dataSource) { return 1 }
      return this.$_.ceil(this.dataSource.total / this.dataSource.per_page)
    },
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
  },
  methods: {
    ...mapActions('sekolah', ['postPaginationSearch'])
  }
}
</script>
