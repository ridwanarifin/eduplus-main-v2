<template>
  <div>
    <lazy-list-sekolah v-show="!sekolah.untouched" />

    <v-divider class="text-gray lighten-5 my-16" />

    <div
      v-show="!sekolah.untouched"
      class="text-center"
    >
      <p class="text--primary mb-6">
        Tidak Menemukan Data sekolah/Tempat kursus? Klik tombol dibawah untuk daftarkan sekolah/tempat kursus
      </p>

      <v-btn
        nuxt
        large
        rounded
        color="white"
        class="btn-primary-registration"
        to="/schools/get-access"
      >
        Daftarkan sekolah / tempat kursus
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('sekolah', ['sekolah'])
  }
}
</script>
