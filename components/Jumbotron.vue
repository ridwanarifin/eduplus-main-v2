<template>
  <v-sheet class="edu-jumbotron" width="100vw" :color="colors.blueEduplus" dark>
    <v-row class="container mx-auto" justify="center" align="center">
      <v-col cols="12" sm="6" md="4" class="text-center text-sm-left">
        <lazy-image
          :source="require('~/static/logo.png?webp')"
          class="edu-jumbotron-logo"
          max-width="271"
          max-height="102"
        />

        <div class="text-subtitle-1 font-weight-medium text-sm-h6 mt-5 mt-sm-8 mt-md-10">
          {{ content }}
        </div>

        <v-btn
          to="/schools/search"
          nuxt
          class="edu-jumbotron-action-cari btn-primary-registration font-weight-bold"
          color="white"
          light
          large
          rounded
        >
          Cari Sekarang
        </v-btn>
      </v-col>

      <v-col cols="12" sm="6" class="hidden-xs-only">
        <lazy-image
          :source="require('~/assets/img/edu-wisuda.png?webp')"
          class="edu-jumbotron-wisuda ml-auto"
          max-width="372"
          max-height="365"
        />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import * as Colors from '~/utils/colors'

export default {
  data () {
    return {
      colors: Colors,
      content: 'Cari sekolah terbaik untuk masa depan yang cerah di Edukasi Plus'
    }
  }
}
</script>
