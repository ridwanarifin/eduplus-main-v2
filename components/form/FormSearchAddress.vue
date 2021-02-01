<template>
  <validation-observer
    ref="observer"
    v-slot="{ handleSubmit }"
  >
    <form @submit.prevent="handleSubmit(on_submit)">
      <v-row
        align-sm="center"
        justify-sm="space-between"
      >
        <!-- provinsi -->
        <v-col
          cols="12"
          sm="6"
        >
          <validation-provider
            v-slot="{ errors }"
            name="provinsi"
            rules="required"
          >
            <v-autocomplete
              v-model="province"
              :loading="sekolah.pending || pending"
              :disabled="pending"
              :error-messages="errors"
              :clear-icon="$icon.mdiClose"
              :items="provinsi"
              item-text="name"
              item-value="id"
              return-object
              filled
              required
              clearable
              label="Provisi"
              class="input-filled-shadow-primary"
              @input="getRegencyByProvince"
            />
          </validation-provider>
        </v-col>

        <!-- Kota / Kabupaten -->
        <v-col
          cols="12"
          sm="6"
        >
          <validation-provider
            v-slot="{ errors }"
            name="kota / kabupaten"
          >
            <v-autocomplete
              v-model="regency"
              :loading="sekolah.pending || pending"
              :disabled="pending || !province"
              :error-messages="errors"
              :clear-icon="$icon.mdiClose"
              :items="kab_kota"
              item-text="name"
              item-value="id"
              return-object
              filled
              clearable
              label="Kota / Kabupaten"
              class="input-filled-shadow-primary"
              @input="getDistrictByRegency"
            />
          </validation-provider>
        </v-col>
      </v-row>

      <v-row
        align-sm="center"
        justify-sm="space-between"
      >
        <!-- Kecamatan -->
        <v-col
          cols="12"
          sm="6"
        >
          <validation-provider
            v-slot="{ errors }"
            name="kecamatan"
          >
            <v-autocomplete
              v-model="district"
              :loading="sekolah.pending || pending"
              :disabled="pending || !regency"
              :error-messages="errors"
              :clear-icon="$icon.mdiClose"
              :items="kecamatan"
              item-text="name"
              item-value="id"
              return-object
              filled
              clearable
              label="Kecamatan"
              class="input-filled-shadow-primary"
              @input="getVillageByDistrict"
            />
          </validation-provider>
        </v-col>

        <!-- Kelurahan -->
        <v-col
          cols="12"
          sm="6"
        >
          <validation-provider
            v-slot="{ errors }"
            name="kelurahan"
          >
            <v-autocomplete
              v-model="village"
              :loading="sekolah.pending || pending"
              :disabled="pending || !district"
              :error-messages="errors"
              :clear-icon="$icon.mdiClose"
              :items="kelurahan"
              item-text="name"
              item-value="id"
              return-object
              filled
              clearable
              label="Kelurahan"
              class="input-filled-shadow-primary"
            />
          </validation-provider>
        </v-col>
      </v-row>

      <v-row align="center">
        <!-- Jenjang Pendidikan -->
        <v-col cols="12">
          <div class="text-body text--primary font-weight-medium">
            Pilih Jenjang Pendidikan
          </div>

          <validation-provider
            v-slot="{ errors }"
            name="jenjang pendidikan"
            rules="required"
          >
            <v-radio-group
              v-model="stage"
              :error-messages="errors"
            >
              <v-row align-sm="start">
                <v-col
                  v-for="(item, index) in stageItems"
                  :key="index"
                  cols="6"
                  sm="3"
                >
                  <v-radio
                    color="white"
                    :label="item.text"
                    :value="item.value"
                    :on-icon="$icon.mdiCheckCircle"
                    :off-icon="$icon.mdiCircleOutline"
                    :disabled="sekolah.pending"
                    class="pa-3 rounded input-radio-primary"
                  />
                </v-col>
              </v-row>
            </v-radio-group>
          </validation-provider>
        </v-col>
      </v-row>

      <!-- Status Sekolah -->
      <v-row align="center" class="mb-10">
        <v-col cols="12">
          <div class="text-body text--primary font-weight-medium">
            Filter Status Sekolah
          </div>

          <validation-provider
            v-slot="{ errors }"
            name="status sekolah"
            rules="required"
          >
            <v-radio-group
              v-model="status"
              :error-messages="errors"
            >
              <v-row align-sm="start">
                <v-col
                  v-for="(item, index) in statusItems"
                  :key="index"
                  cols="6"
                  sm="3"
                >
                  <v-radio
                    color="white"
                    :label="item.text"
                    :value="item.value"
                    :on-icon="$icon.mdiCheckCircle"
                    :off-icon="$icon.mdiCircleOutline"
                    :disabled="sekolah.pending"
                    class="pa-3 rounded input-radio-primary"
                  />
                </v-col>
              </v-row>
            </v-radio-group>
          </validation-provider>
        </v-col>
      </v-row>

      <slot>
        <div class="text-center">
          <v-btn
            rounded
            type="submit"
            color="primary"
            class="px-sm-10 px-md-16 mb-6"
            :loading="sekolah.pending"
            :disabled="sekolah.pending"
          >
            Cari sekarang
          </v-btn>

          <p
            class="text--primary text-body-1 mx-auto"
            style="max-width: 248px"
          >
            Daftarkan Sekolah atau tempat kursus anda
            <nuxt-link
              class="text-lowercase"
              to="/schools/registration"
            >
              disini
            </nuxt-link>
          </p>
        </div>
      </slot>
    </form>
  </validation-observer>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import { stageItems, statusItems } from '~/utils/items.js'

export default {
  computed: {
    ...mapFields('form', [
      'search_school_address.province',
      'search_school_address.regency',
      'search_school_address.district',
      'search_school_address.village',
      'search_school_address.stage',
      'search_school_address.status'
    ]),
    ...mapGetters([
      'provinsi',
      'kab_kota',
      'kecamatan',
      'kelurahan',
      'pending'
    ]),
    ...mapGetters('sekolah', [
      'sekolah'
    ]),
    observer () { return this.$refs.observer },
    stageItems () { return stageItems },
    statusItems () { return statusItems }
  },
  methods: {
    ...mapMutations({
      resetContext: 'RESET_CONTEXT_SEARCH_ADDRESS'
    }),
    ...mapActions([
      'getRegencyByProvince',
      'getDistrictByRegency',
      'getVillageByDistrict'
    ]),
    ...mapActions('sekolah', [
      'postSubmitSearchSchoolAddress'
    ]),
    async on_submit () {
      await this.postSubmitSearchSchoolAddress()
        .then(() => {
          this.observer.reset()
        })
        .finally(() => {
          this.$router.push('/schools/search/results')
        })
    }
  }
}
</script>
