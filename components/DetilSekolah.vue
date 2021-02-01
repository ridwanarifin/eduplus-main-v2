<template>
  <v-container class="mx-auto">
    <lazy-carousel class="mb-5 mb-sm-10" />

    <div
      class="text-h6 font-weight-bold text-capitalize"
      v-text="data.name"
    />

    <p class="mb-10 text-body" v-text="data.address" />

    <div class="mb-10">
      <v-icon
        class="mr-2"
        color="primary"
        v-text="$icon.mdiBookEducationOutline"
      />
      <span>Kurikulum {{ data.curriculum || '-' }}</span>
    </div>

    <div class="mb-5">
      <v-tabs
        v-model="tab"
        hide-slider
        show-arrows
        :prev-icon="$icon.mdiChevronLeft"
        :next-icon="$icon.mdiChevronRight"
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

    <div>
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
              <span>{{ data.phone_number || '-' }}</span>
            </v-col>

            <v-col cols="12">
              <v-icon
                class="mr-2"
                color="primary"
                v-text="$icon.mdiEmailOutline"
              />
              <span>{{ data.email || '-' }}</span>
            </v-col>

            <v-col cols="12">
              <v-icon
                class="mr-2"
                color="primary"
                v-text="$icon.mdiWeb"
              />
              <span>{{ data.website || '-' }}</span>
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
                v-text="data[item.value] || '-'"
              />
              <div v-else class="text-primary">
                {{ data[item.value] | statusSekolah }}
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
                v-text="data[item.value] || '-'"
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
                v-text="data[item.value] || '-'"
              />
            </v-col>
          </v-row>
        </v-tab-item>

        <!-- fasilitas -->
        <v-tab-item value="tab-4">
          <v-row>
            <v-col
              v-for="(item, index) in data.facilities"
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
              v-for="(item, index) in data.extracurricular"
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
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    data: {
      type: [Object, Array],
      default: () => []
    }
  },
  data: () => ({
    tab: 'tab-0',
    headers: [
      'Kontak Sekolah',
      'Informasi Sekolah',
      'Biaya Sekolah',
      'Pendaftaran',
      'Fasilitas',
      'Ekstakuliner'
    ],
    informasi_sekolah: [{
      text: 'Kepala Sekolah',
      value: 'user'
    }, {
      text: 'Jumlah Siswa',
      value: 'total_student'
    }, {
      text: 'Akreditasi',
      value: 'accreditation'
    }, {
      text: 'Status',
      value: 'status'
    }, {
      text: 'Jam Sekolah',
      value: 'schools_hour'
    }],
    biaya_sekolah: [{
      text: 'Uang Pangkal',
      value: 'costs'
    }, {
      text: 'SPP Bulanan',
      value: 'costs'
    }, {
      text: 'Uang Kegiatan',
      value: 'costs'
    }, {
      text: 'Uang Buku',
      value: 'costs'
    }, {
      text: 'Potongan / Diskon',
      value: 'costs'
    }],
    pendaftaran: [{
      text: 'Pendaftaran',
      value: 'registration'
    }, {
      text: 'Pengumuman',
      value: 'registration'
    }, {
      text: 'Daftar Ulang',
      value: 'registration'
    }],
    fasilitas: [{
      text: '',
      value: 'facilities'
    }]
  })
}
</script>
