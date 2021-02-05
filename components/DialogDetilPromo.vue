<template>
  <v-dialog
    v-model.lazy="dialog_promo"
    scrollable
    persistent
    max-width="500px"
    transition="dialog-transition"
  >
    <v-card class="pb-5">
      <v-card-title class="headline">
        Promo Detail
        <v-spacer />
        <v-btn
          icon
          @click.prevent="closeDialog"
        >
          <v-icon v-text="$icon.mdiClose" />
        </v-btn>
      </v-card-title>

      <v-img
        :src="promoActive.image || 'https://via.placeholder.com/255x242'"
        :lazy-src="promoActive.image || 'https://via.placeholder.com/255x242'"
        class="mx-5 mb-7"
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

      <v-divider class="mb-2" />

      <v-card-title v-text="promoActive.name || '-'" />

      <v-card-text v-text="promoActive.description || '-'" />
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { mapFields } from 'vuex-map-fields'
export default {
  computed: {
    ...mapFields('form', [
      'dialog_promo'
    ]),
    ...mapState('promo', [
      'promoActive'
    ])
  },
  destroyed () {
    this.resetPromoActive()
  },
  methods: {
    ...mapMutations('promo', {
      resetPromoActive: 'RESET_PROMO_ACTIVE'
    }),
    closeDialog () {
      this.$store.commit('form/updateField', {
        path: 'dialog_promo',
        value: false
      })
    }
  }
}
</script>
