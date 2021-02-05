<template>
  <v-data-iterator
    :items="sekolah.data"
    :items-per-page="sekolah.per_page"
    :page="sekolah.current_page"
    hide-default-footer
  >
    <template #header>
      <div
        class="mx-auto mb-16"
        style="max-width: 540px"
      >
        Hasil untuk
        <b class="mx-1">{{ sekolah.old_value || '-' }}</b>
        <span>
          ({{ sekolah.total }} data)
        </span>
      </div>
    </template>

    <template #no-data>
      <div
        class="mx-auto text-center pt-8 pt-sm-16"
        style="max-width: 460px"
      >
        <p class="mb-10 body-1 text--primary">
          Data sekolah/Tempat kursus tidak ditemukan.<br>
          Klik tombol dibawah untuk daftarkan sekolah/tempat kursus
        </p>

        <v-img
          :src="require('~/assets/img/schools-404.png?webp')"
          :lazy-src="require('~/assets/img/schools-404.png?webp')"
          min-width="auto"
          max-width="100"
          class="mx-auto mb-5 mb-sm-10"
        >
          <template #placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              />
            </v-row>
          </template>
        </v-img>

        <v-btn
          nuxt
          exact
          rounded
          class="primary"
          :style="$vuetify.breakpoint.smAndUp ? 'width: 343px' : ''"
          to="/schools/get-access"
        >
          Dapatkan akses
        </v-btn>
      </div>
    </template>

    <template #default="{ items }">
      <v-row align-sm="center">
        <v-col
          v-for="(item, index) in items"
          :key="index"
          cols="12"
          sm="4"
          md="3"
        >
          <v-card
            class="shadow-primary"
            :loading="sekolah.pending"
          >
            <v-img
              :src="$_.isEmpty(item.images) ? getImage(item.name, 'school') : $_.first(item.images)"
              :lazy-src="$_.isEmpty(item.images) ? getImage(item.name, 'school') : $_.first(item.images)"
            >
              <template #placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  />
                </v-row>
              </template>
            </v-img>
            <v-card-title
              class="text-truncate"
              :title="item.name"
            >
              <nuxt-link
                exact
                :to="`/schools/detail/${item.uuid}`"
                class="text--primary"
              >
                {{ item.name | truncate(sizeName) }}
              </nuxt-link>
            </v-card-title>

            <v-card-subtitle
              class="text-truncate"
              :title="item.address"
            >
              {{ item.address | truncate(sizeAddress) }}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                v-if="item.user"
                color="primary"
                class="px-6 mx-auto"
                rounded
                href="https://operator.edukasiplus.com"
                target="_blank"
              >
                login
              </v-btn>

              <v-btn
                v-else
                color="primary"
                class="px-6 mx-auto"
                nuxt
                :to="{
                  path: 'get-access',
                  query: { school: item.uuid }
                }"
                rounded
              >
                Dapatkan Akses
              </v-btn>
            </v-card-actions>

            <v-card-text class="text-center">
              {{ item.user ? loginText : aksesText }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>

    <template #footer>
      <v-row
        v-show="$_.size(sekolah.data)"
        class="mt-10"
        align-sm="center"
      >
        <v-col>
          <v-pagination
            v-model="page"
            circle
            :length="numberOfPages"
            @input="postPaginationSearch"
            @next="postPaginationSearch"
            @previous="postPaginationSearch"
          />
        </v-col>
      </v-row>
    </template>
  </v-data-iterator>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    aksesText: 'Klik tombol dapatkan akses untuk mengubah data di sekolah ini',
    loginText: 'Sekolah ini sudah memilik operator, silahkan login untuk mengubah data di sekolah ini',
    page: 1
  }),
  computed: {
    ...mapGetters('sekolah', ['sekolah']),
    numberOfPages () {
      return this.$_.ceil(this.sekolah.total / this.sekolah.per_page)
    },
    sizeName () {
      if (this.$vuetify.breakpoint.xs) {
        return 27
      } else if (this.$vuetify.breakpoint.sm) {
        return 13
      }
      return 15
    },
    sizeAddress () {
      if (this.$vuetify.breakpoint.xs) {
        return 35
      } else if (this.$vuetify.breakpoint.sm) {
        return 23
      }
      return 30
    }
  },
  methods: {
    ...mapActions('sekolah', ['postPaginationSearch'])
  }
}
</script>
