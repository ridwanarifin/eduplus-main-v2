<template>
  <div>
    <div
      class="mx-auto"
      style="max-width: 550px"
    >
      <div class="text--headline text-center text-h5 text-sm-h4 mb-10">
        Cari nama sekolah
      </div>

      <form-search-name @finally-submit="submitSearchName">
        <div class="text-center">
          <v-btn
            rounded
            type="submit"
            color="primary"
            class="px-sm-6"
          >
            cari sekarang
          </v-btn>
        </div>
      </form-search-name>
    </div>

    <div
      class="mx-auto mt-16"
      style="max-width: 750px"
    >
      <div class="text--headline text-center text-h5 text-sm-h4 mb-10">
        Atau cari sesuai alamat
      </div>
      <form-search-address />
    </div>
  </div>
</template>

<script>
import FormSearchName from '~/components/form/FormSearchName.vue'
import FormSearchAddress from '~/components/form/FormSearchAddress.vue'
export default {
  components: {
    FormSearchName,
    FormSearchAddress
  },
  meta: {
    crumbs: [{
      name: 'Home',
      to: '/',
      exact: true
    }, {
      name: 'Cari Sekolah',
      to: '/schools/search',
      exact: true
    }]
  },
  methods: {
    submitSearchName () {
      this.$router.push('/schools/search/results')
    }
  }
}
</script>
