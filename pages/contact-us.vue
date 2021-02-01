<template>
  <v-sheet color="transparent">
    <v-row
      align="center"
      class="container mx-auto"
    >
      <v-col
        cols="12"
        class="text-center py-6"
      >
        <div
          class="text-h4 mx-auto"
          :style="{color: colors.primary}"
        >
          Hubungin Kami
        </div>
      </v-col>

      <v-col
        cols="12"
        class="px-0"
      >
        <v-card
          max-width="345"
          class="mx-auto shadow-primary"
        >
          <v-card-text>
            <v-row align="center">
              <v-col cols="3">
                <v-btn
                  link
                  text
                  fab
                  color="success"
                  :href="`https://api.whatsapp.com/send?phone=${wa}`"
                  target="_blank"
                >
                  <v-icon v-text="$icon.mdiWhatsapp" />
                </v-btn>
              </v-col>

              <v-col cols="7">
                <div class="text--secondary text-caption">
                  No. Telepon
                </div>
                <div class="text--primary font-weight-bold text-subtitle-1">
                  {{ telp }}
                </div>
              </v-col>
            </v-row>

            <v-row align="center">
              <v-col cols="3">
                <v-btn
                  link
                  text
                  fab
                  color="primary"
                  :href="'mailto:'+mail"
                  target="_blank"
                >
                  <v-icon v-text="$icon.mdiEmailOutline" />
                </v-btn>
              </v-col>

              <v-col cols="7">
                <div class="text--secondary text-caption">
                  Email
                </div>
                <div class="text--primary font-weight-bold text-subtitle-1">
                  {{ mail }}
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-sheet
      color="transparent"
      max-width="400"
      class="mx-auto"
      tile
    >
      <v-row
        align="center"
        class="container mx-auto"
      >
        <v-col cols="12">
          <div class="text--primary text-subtitle-2">
            Atau Kirimkan pesan anda
          </div>
        </v-col>

        <v-col cols="12">
          <contact-form />
        </v-col>
      </v-row>
    </v-sheet>
  </v-sheet>
</template>

<script>
import _ from 'lodash'
import * as Colors from '~/utils/colors'
import ContactForm from '~/components/form/ContactForm.vue'

export default {
  components: { ContactForm },
  data: () => ({
    colors: Colors,
    telp: '0815 8668 1826',
    mail: 'info@edukasiplus.com'
  }),
  computed: {
    wa () {
      const a = _.replace(this.telp, '0', '62')
      return _.replace(a, /\s/g, '')
    }
  }
}
</script>
