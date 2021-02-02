<template>
  <div>
    <div class="text--headline text-h5 text-sm-h4 mb-5">
      Daftar {{ context.stage | stageSekolah }} {{ context.status | statusSekolah }}
    </div>

    <p class="text--secondary">
      {{ context.address | join }}
    </p>

    <v-divider class="mb-4" />

    <ordering-filter-sekolah class="mb-10" />

    <lazy-list-hasil-sekolah
      :data-source="sekolah"
      :loading="sekolah.pending"
      class="mb-16"
    />

    <div class="text-center">
      <v-btn
        text
        large
        rounded
        color="primary"
        class="px-sm-5 btn-secondary"
        @click.stop="$router.back()"
      >
        Cari sekolah lainnya
      </v-btn>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import { mapGetters, mapMutations } from 'vuex'
import OrderingFilterSekolah from '~/components/OrderingFilterSekolah.vue'

export default {
  components: { OrderingFilterSekolah },
  meta: {
    crumbs: [{
      name: 'Home',
      to: '/',
      exact: true
    }, {
      name: 'Cari Sekolah',
      to: '/schools/search',
      exact: true
    }, {
      name: 'Hasil pencarian',
      to: '/schools/search/results',
      exact: true
    }]
  },
  computed: {
    ...mapGetters({
      sekolah: 'sekolah/sekolah',
      context: 'context_search_address'
    })
  }
}
</script>
