<template>
  <v-footer
    :color="colors.blueEduplus"
    class="py-sm-5 pt-10 pb-5 px-3 px-sm-10"
    dark
  >
    <v-row
      align="center"
      justify="space-between"
      class="mx-auto"
    >
      <v-col
        class="text-wrap"
        cols="12"
        sm="auto"
      >
        <v-img
          :src="require('~/static/logo.png?webp')"
          :lazy-src="require('~/static/logo.png?webp')"
          max-width="138"
          max-height="52"
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

        <div class="mt-5 text-sm-body-1">
          Cari sekolah favorit untuk masa depan yang cerah
          <br class="ml-1 hidden-xs-only">
          semua ada di EDUKASI PLUS
        </div>
      </v-col>

      <v-col
        class="d-inline-block text-wrap text-md-right"
        align-self="end"
        cols="12"
        md
      >
        <v-btn
          v-for="(item, i) in items"
          :key="i"
          :small="$vuetify.breakpoint.mobile"
          v-bind="item"
          text
        >
          {{ item.title }}
        </v-btn>
      </v-col>

      <v-col
        cols="12"
        class="mt-4 pt-5"
      >
        <v-divider
          :style="{borderWidth: '1px', borderColor: 'rgba(255, 255, 255, 0.5)'}"
        />

        <div class="mt-4 d-flex align-center justify-center">
          {{ $moment().year() }}
          <v-icon
            class="mx-1"
            size="15"
            v-text="$icon.mdiCopyright"
          />
          Edu
          <v-icon
            size="15"
            v-text="$icon.mdiPlus"
          />. All rights reserved.
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import * as Colors from '~/utils/colors'
import { footerItems } from '~/utils/items.js'

export default {
  data: () => ({
    colors: Colors,
    items: footerItems
  })
}
</script>
