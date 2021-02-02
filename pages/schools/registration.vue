<template>
  <v-sheet class="container pt-8" color="#FAFAFA">
    <div
      class="mx-auto align-center"
      style="max-width: 540px"
    >
      <div class="text--headline text-h5 text-sm-h4 mb-10">
        Daftarkan Sekolah / Tempat Kursus
      </div>

      <form-search-name @search-input="typing = true" />
    </div>

    <nuxt-child v-if="!typing" />

    <div
      v-else
      class="text-center mt-16"
    >
      <v-divider class="text-gray lighten-5 mb-16" />

      <p class="text--primary mb-6">
        Tidak Menemukan Data sekolah/Tempat kursus? Klik tombol dibawah untuk daftarkan sekolah/tempat kursus
      </p>

      <v-btn
        nuxt
        exact
        large
        rounded
        color="white"
        class="btn-primary-registration"
        to="/schools/get-access"
      >
        Daftarkan sekolah / tempat kursus
      </v-btn>
    </div>
  </v-sheet>
</template>

<script>
import _ from 'lodash'
import { mapMutations } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import FormSearchName from '~/components/form/FormSearchName.vue'

export default {
  components: { FormSearchName },
  data () {
    return {
      typing: false,
      message: ''
    }
  },
  computed: {
    ...mapFields('form', ['search_school'])
  },
  watch: {
    search_school: _.debounce(function () {
      this.typing = false
    }, 800)
  },
  created () {
    this.reset()
  },
  methods: {
    ...mapMutations('sekolah', {
      reset: 'RESET_DATA_INIT'
    })
  }
}
</script>
