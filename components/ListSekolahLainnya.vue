<template>
  <v-data-iterator
    :items="sekolah.data"
    :items-per-page="perPage"
    hide-default-footer
    class="container mx-auto"
  >
    <template #header>
      <v-row
        align-sm="center"
        justify-sm="space-between"
      >
        <v-col
          cols="6"
          sm="auto"
        >
          <div class="title">
            Daftar Sekolah Lainnya
          </div>
        </v-col>

        <v-col cols="auto">
          <v-btn
            text
            nuxt
            exact
            rounded
            depressed
            color="primary"
            class="text-capitalize"
            to="/schools/search/results"
          >
            Lihat Semua
          </v-btn>
        </v-col>
      </v-row>
    </template>

    <template #default="{ items }">
      <v-row align-sm="center">
        <v-col
          v-for="(item, index) in items"
          :key="index"
          cols="12"
          sm="4"
        >
          <v-card
            nuxt
            exact
            class="shadow-primary"
            :to="`/schools/detail/${item.uuid}`"
          >
            <v-img
              :src="$_.head(item.images) || require('~/assets/img/placeholder-school.png?webp')"
              :lazy-src="$_.head(item.images) || require('~/assets/img/placeholder-school.png?webp')"
            />
            <v-card-title :title="item.name">
              {{ item.name | truncate(sizeName) }}
            </v-card-title>
            <v-card-subtitle :title="item.address">
              {{ item.address | truncate(sizeAddress) }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </template>

    <template #footer>
      <div class="text-center mt-16">
        <v-btn
          text
          large
          rounded
          color="primary"
          class="px-sm-5 btn-secondary"
          @click.prevent="sekolahLainnya"
        >
          Cari sekolah lainnya
        </v-btn>
      </div>
    </template>
  </v-data-iterator>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data: () => ({
    perPage: 6
  }),
  computed: {
    ...mapGetters('sekolah', [
      'sekolah'
    ]),
    sizeName () {
      if (this.$vuetify.breakpoint.xs) {
        return 27
      } else if (this.$vuetify.breakpoint.sm) {
        return 12
      }
      return 20
    },
    sizeAddress () {
      if (this.$vuetify.breakpoint.xs) {
        return 40
      } else if (this.$vuetify.breakpoint.sm) {
        return 23
      }
      return 30
    }
  },
  methods: {
    ...mapMutations({
      resetDataSekolah: 'sekolah/RESET_DATA_INIT'
    }),
    sekolahLainnya () {
      this.resetDataSekolah()
      this.$router.replace('/schools/search')
    }
  }
}
</script>
