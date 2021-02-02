<template>
  <v-container class="mx-auto">
    <lazy-carousel
      class="mb-5 mb-sm-10 mx-auto"
      :data="sekolah_detail.images || []"
    />

    <div
      class="text-h6 font-weight-bold text-capitalize"
      v-text="sekolah_detail.name"
    />

    <p class="mb-10 text-body" v-text="sekolah_detail.address" />

    <div class="mb-10">
      <v-icon
        class="mr-2"
        color="primary"
        v-text="$icon.mdiBookEducationOutline"
      />
      <span>Kurikulum {{ sekolah_detail.curriculum || '-' }}</span>
    </div>

    <div class="mb-5">
      <v-tabs
        v-model="tab"
        hide-slider
        show-arrows
        :prev-icon="$icon.mdiChevronLeft"
        :next-icon="$icon.mdiChevronRight"
        background-color="transparent"
      >
        <v-tab
          v-for="(item, idx) in headers"
          :key="idx"
          :href="`#tab-` + idx"
          active-class="v-btn v-btn--contained v-btn--rounded theme--dark v-size--default my-auto primary"
          v-text="item"
        />
      </v-tabs>
    </div>

    <v-tabs-items v-model="tab">
      <!-- kontak sekolah -->
      <v-tab-item
        value="tab-0"
      >
        <v-row>
          <v-col cols="12">
            <v-icon
              class="mr-2"
              color="primary"
              v-text="$icon.mdiPhoneInTalkOutline"
            />
            <span>{{ sekolah_detail.phone_number || '-' }}</span>
          </v-col>

          <v-col cols="12">
            <v-icon
              class="mr-2"
              color="primary"
              v-text="$icon.mdiEmailOutline"
            />
            <span>{{ sekolah_detail.email || '-' }}</span>
          </v-col>

          <v-col cols="12">
            <v-icon
              class="mr-2"
              color="primary"
              v-text="$icon.mdiWeb"
            />
            <span>{{ sekolah_detail.website || '-' }}</span>
          </v-col>
        </v-row>
      </v-tab-item>

      <!-- informasi sekolah -->
      <v-tab-item value="tab-1">
        <v-row>
          <v-col
            v-for="(item, index) in informasi_sekolah"
            :key="index"
            cols="12"
          >
            <div
              class="text-body text--secondary"
              v-text="item.text"
            />
            <div
              v-if="item.value !== 'status'"
              class="text-primary"
              v-text="sekolah_detail[item.value] || '-'"
            />
            <div v-else class="text-primary">
              {{ sekolah_detail[item.value] | statusSekolah }}
            </div>
          </v-col>
        </v-row>
      </v-tab-item>

      <!-- biaya sekolah -->
      <v-tab-item value="tab-2">
        <v-row>
          <v-col
            v-for="(item, index) in biaya_sekolah"
            :key="index"
            cols="12"
          >
            <div
              class="text-body text--secondary"
              v-text="item.text"
            />
            <div
              class="text-primary"
              v-text="sekolah_detail[item.value] || '-'"
            />
          </v-col>
        </v-row>
      </v-tab-item>

      <!-- pendaftaran -->
      <v-tab-item value="tab-3">
        <v-row>
          <v-col
            v-for="(item, index) in pendaftaran"
            :key="index"
            cols="12"
          >
            <div
              class="text-body text--secondary"
              v-text="item.text"
            />
            <div
              class="text-primary"
              v-text="sekolah_detail[item.value] || '-'"
            />
          </v-col>
        </v-row>
      </v-tab-item>

      <!-- fasilitas -->
      <v-tab-item value="tab-4">
        <v-row>
          <v-col
            v-for="(item, index) in sekolah_detail.facilities"
            :key="index"
            cols="12"
          >
            <div class="text-primary">
              {{ item || '-' }}
            </div>
          </v-col>
        </v-row>
      </v-tab-item>

      <!-- ekstrakulikuler -->
      <v-tab-item value="tab-5">
        <v-row>
          <v-col
            v-for="(item, index) in sekolah_detail.extracurricular"
            :key="index"
            cols="12"
          >
            <div class="text-primary">
              {{ item || '-' }}
            </div>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

import {
  headerDetilSekolahItems,
  detilInformasiSekolahItems,
  detilBiayaSekolahItems,
  detilPendaftaranItems
} from '~/utils/items.js'
export default {
  data: () => ({
    tab: 'tab-0',
    headers: headerDetilSekolahItems,
    informasi_sekolah: detilInformasiSekolahItems,
    biaya_sekolah: detilBiayaSekolahItems,
    pendaftaran: detilPendaftaranItems,

    perPage: 3
  }),
  computed: {
    ...mapGetters({
      sekolah_detail: 'sekolah/sekolah_detail'
    }),
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
  }
}
</script>
