<template>
  <v-sheet
    class="edu-jumbotron d-flex align-center"
    width="100vw"
    dark
    :color="colors.blueEduplus"
  >
    <v-row
      class="container ma-auto text-center"
      align="center"
      justify="center"
    >
      <v-col cols="12" sm="6">
        <div class="text-body font-weight-bold">
          {{ subtitle }}
        </div>
        <div class="text-h4 mt-6">
          {{ title }}
        </div>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import * as Colors from '~/utils/colors'

export default {
  props: {
    title: {
      type: String,
      default: 'Default Title'
    },
    subtitle: {
      type: String,
      default: 'Sekolah Favorit'
    }
  },
  data: () => ({
    colors: Colors
  })
}
</script>
