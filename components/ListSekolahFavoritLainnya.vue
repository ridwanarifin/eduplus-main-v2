<template>
  <v-data-iterator
    :items="data"
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
            v-if="perPage !== -1"
            text
            rounded
            depressed
            color="primary"
            class="text-capitalize"
            @click.stop="perPage = -1"
          >
            Lihat Semua
          </v-btn>

          <v-btn
            v-else
            text
            rounded
            depressed
            color="primary"
            class="text-capitalize"
            @click.stop="perPage = 3"
          >
            Lihat Sebagian
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
          nuxt
          exact
          large
          rounded
          color="primary"
          class="px-sm-5 btn-secondary"
          to="/schools/search"
        >
          Cari sekolah lainnya
        </v-btn>
      </div>
    </template>
  </v-data-iterator>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    perPage: 3
  }),
  computed: {
    ...mapGetters({
      data: 'favorit/provinsi_init',
      sekolah_detail: 'sekolah/sekolah_detail'
    }),
    sizeName () {
      if (this.$vuetify.breakpoint.xs) {
        return 27
      } else if (this.$vuetify.breakpoint.sm) {
        return 20
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
  }
}
</script>
