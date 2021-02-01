<template>
  <v-container>
    <div
      class="title text-sm-h4 mb-6"
      v-text="headline"
    />

    <v-row
      align-sm="center"
      justify-sm="space-between"
    >
      <v-col
        cols="12"
        sm="auto"
      >
        <v-tabs
          v-model.lazy="tabActive"
          background-color="transparent"
          show-arrows
          hide-slider
        >
          <v-tab
            v-for="item of headers"
            :key="item.value"
            :href="'#' + item.value"
            active-class="v-btn v-btn--contained v-btn--rounded theme--dark v-size--default my-auto primary"
            v-text="item.text"
          />
        </v-tabs>
      </v-col>

      <v-col
        cols="12"
        sm="auto"
      >
        <v-text-field
          v-model.lazy="search_favorite_school"
          :prepend-inner-icon="$icon.mdiMagnify"
          :clear-icon="$icon.mdiClose"
          placeholder="Cari Provinsi"
          clearable
          outlined
          rounded
        />
      </v-col>
    </v-row>

    <v-tabs-items
      v-model.lazy="tabActive"
      class="pa-2 mt-6 transparent"
    >
      <v-tab-item
        v-for="(item, index) in headers"
        :key="index"
        :value="item.value"
      >
        <slot v-bind="{ search: search_favorite_school, title: item.title }">
          <v-row
            align-sm="center"
            justify-sm="space-between"
          >
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
                v-for="(d, idx) in init"
                :key="idx"
                cols="12"
                sm="4"
                md="3"
              >
                <v-card class="shadow-primary">
                  <lazy-image
                    :source="getImage(d.name, 'green')"
                  />
                  <v-card-title v-text="d.name" />
                  <v-card-subtitle v-text="`${d.count} ${item.title}`" />
                </v-card>
              </v-col>
            </template>
          </v-row>
        </slot>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import { tabItems } from '~/utils/headers'

export default {
  props: {
    headline: {
      type: String,
      default: 'Sekolah Favorit'
    }
  },
  data: () => ({
    headers: tabItems
  }),
  computed: {
    ...mapFields('form', [
      'search_favorite_school',
      'tabActive'
    ]),
    ...mapGetters('favorit', ['init', 'pending'])
  },
  watch: {
    tabActive (newVal) {
      this.$emit('tab-change', newVal)
    }
  }
}
</script>
