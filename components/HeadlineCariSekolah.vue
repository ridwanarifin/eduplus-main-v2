<template>
  <v-sheet
    class="headline-ss"
    width="100vw"
    dark
  >
    <v-container class="mx-auto text-center">
      <div class="text-h5 text-sm-h4">
        {{ headline }}
      </div>

      <v-btn
        nuxt
        elevation="0"
        rounded
        color="white"
        class="headline-ss-action-search font-weight-bold"
        to="/schools/search"
      >
        Cari sekarang
      </v-btn>

      <div class="headline-ss-content text-subtitle-1 font-weight-medium text-sm-h6 mx-auto">
        {{ content }}
        <v-btn
          nuxt
          text
          to="/schools/registration"
          class="text-lowercase text-sm-h6 pa-0"
        >
          disini
        </v-btn>
      </div>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data () {
    return {
      headline: 'Mulai cari informasi sekolah disini',
      content: 'Daftarkan Sekolah atau tempat kursus anda '
    }
  }
}
</script>
