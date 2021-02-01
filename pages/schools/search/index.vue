<template>
  <div>
    <div
      class="mx-auto"
      style="max-width: 550px"
    >
      <div class="text--headline text-center text-h5 text-sm-h4 mb-10">
        Cari nama sekolah
      </div>

      <lazy-form-search-name>
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
      </lazy-form-search-name>
    </div>

    <div
      class="mx-auto mt-16"
      style="max-width: 750px"
    >
      <div class="text--headline text-center text-h5 text-sm-h4 mb-10">
        Atau cari sesuai alamat
      </div>
      <lazy-form-search-address />
    </div>
  </div>
</template>

<script>
export default {
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
  }
}
</script>
