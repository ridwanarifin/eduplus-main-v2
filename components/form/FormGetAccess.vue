<template>
  <v-container class="mx-auto" style="max-width: 726px">
    <div class="text-h5 text-sm-h4 text-center text--headline mb-16">
      Dapatkan Akses
    </div>

    <validation-observer
      ref="observer"
      v-slot="{ handleSubmit }"
    >
      <form @submit.prevent="handleSubmit(on_submit)">
        <v-row
          align-sm="center"
          justify-sm="space-between"
        >
          <v-col
            cols="12"
            sm="6"
          >
            <validation-provider
              v-slot="{ errors }"
              name="nama sekolah"
              rules="required"
            >
              <v-text-field
                v-model="school_name"
                :loading="loading"
                :disabled="loading"
                :error-messages="errors"
                :clear-icon="$icon.mdiClose"
                label="Nama Sekolah"
                placeholder="Masukan Nama Sekolah"
                class="input-filled-shadow-primary"
                filled
                clearable
                required
              />
            </validation-provider>
          </v-col>

          <v-col
            cols="12"
            sm="6"
          >
            <validation-provider
              v-slot="{ errors }"
              name="npsn"
              rules="required"
            >
              <v-text-field
                v-model="npsn"
                :loading="loading"
                :disabled="loading"
                :error-messages="errors"
                :clear-icon="$icon.mdiClose"
                label="NPSN"
                placeholder="Nomor Pokok Sekolah Nasional"
                class="input-filled-shadow-primary"
                filled
                clearable
                required
              />
            </validation-provider>
          </v-col>
        </v-row>

        <v-row
          align-sm="center"
          justify-sm="space-between"
        >
          <v-col
            cols="12"
            sm="6"
          >
            <validation-provider
              v-slot="{ errors }"
              name="nama anda"
              rules="required"
            >
              <v-text-field
                v-model="name"
                :loading="loading"
                :disabled="loading"
                :error-messages="errors"
                :clear-icon="$icon.mdiClose"
                label="Nama Anda"
                placeholder="Masukan Nama Anda"
                class="input-filled-shadow-primary"
                filled
                clearable
                required
              />
            </validation-provider>
          </v-col>

          <v-col
            cols="12"
            sm="6"
          >
            <validation-provider
              v-slot="{ errors }"
              name="jabatan"
              rules="required"
            >
              <v-text-field
                v-model="position"
                :loading="loading"
                :disabled="loading"
                :error-messages="errors"
                :clear-icon="$icon.mdiClose"
                label="Jabatan"
                placeholder="Jabatan di sekolah"
                class="input-filled-shadow-primary"
                filled
                clearable
                required
              />
            </validation-provider>
          </v-col>
        </v-row>

        <v-row
          align-sm="center"
          justify-sm="space-between"
        >
          <v-col
            cols="12"
            sm="6"
          >
            <validation-provider
              v-slot="{ errors }"
              name="email sekolah"
              rules="required|email"
            >
              <v-text-field
                v-model="email"
                :loading="loading"
                :disabled="loading"
                :error-messages="errors"
                :clear-icon="$icon.mdiClose"
                type="email"
                label="Email Sekolah"
                placeholder="Masukan Email Sekolah"
                class="input-filled-shadow-primary"
                filled
                clearable
                required
              />
            </validation-provider>
          </v-col>

          <v-col
            cols="12"
            sm="6"
          >
            <validation-provider
              v-slot="{ errors }"
              name="telepon sekolah"
              rules="required"
            >
              <v-text-field
                v-model="phone_number"
                :loading="loading"
                :disabled="loading"
                :error-messages="errors"
                :clear-icon="$icon.mdiClose"
                label="No. Telepon Sekolah"
                placeholder="Masukan No. Telepon Sekolah"
                class="input-filled-shadow-primary"
                filled
                clearable
                required
              />
            </validation-provider>
          </v-col>
        </v-row>

        <v-row
          align="center"
          justify="center"
          class="text-center"
        >
          <v-col cols="12">
            <v-btn
              dark
              large
              rounded
              type="submit"
              color="primary"
              class="mx-auto px-sm-16"
              :loading="loading"
            >
              Dapatkan akses
            </v-btn>
          </v-col>

          <v-col cols="12">
            <div class="mt-6 mx-auto">
              Pihak Eduplus melalui email
              <b class="mx-1">
                <a class="text--primary" href="mailto:halo@eduplus.com">
                  halo@eduplus.com
                </a>
              </b>
              atau no. telp.
              <b class="mx-1">
                <a class="text--primary" href="https://api.whatsapp.com/send?phone=+6281586681826">
                  +62 815 8668 1826
                </a>
              </b>
              akan segera menghubungi anda untuk melakukan verifikasi lebih lanjut, Terimakasih.
            </div>
          </v-col>
        </v-row>
      </form>
    </validation-observer>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'

export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapFields('form', [
      'getaccess.school_name',
      'getaccess.npsn',
      'getaccess.name',
      'getaccess.position',
      'getaccess.email',
      'getaccess.phone_number'
    ]),
    observer () { return this.$refs.observer }
  },
  methods: {
    async on_submit () {
      await this.postAccessRequest()
        .finally(() => {
          this.observer.reset()
        })
    },
    ...mapActions('sekolah', [
      'postAccessRequest'
    ])
  }
}
</script>
