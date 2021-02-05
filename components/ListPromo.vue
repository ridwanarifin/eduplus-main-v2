<template>
  <v-container>
    <v-data-iterator
      :items="items"
      :items-per-page="perPage"
      hide-default-footer
    >
      <template #header>
        <div class="title text-sm-h4 mb-10">
          Promo
        </div>
      </template>

      <template #default="props">
        <v-row align-sm="center">
          <v-col
            v-for="(item, index) in props.items"
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
                :src="item.image"
                :lazy-src="item.image"
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

              <v-card-title>
                {{ item.name }}
              </v-card-title>

              <v-card-text class="pb-0">
                {{ item.description | truncate(90) }}
              </v-card-text>

              <v-card-actions>
                <v-btn
                  text
                  color="primary"
                  @click.prevent="openDialog(item)"
                >
                  selengkapnya
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template #footer>
        <div
          v-show="$_.size(items) > 6"
          class="text-center mt-16"
        >
          <v-btn
            v-if="perPage < $_.size(items)"
            text
            large
            rounded
            color="primary"
            class="btn-secondary px-sm-10"
            @click.stop="perPage += 3"
          >
            Muat lebih banyak
          </v-btn>

          <v-btn
            v-else
            text
            large
            rounded
            color="primary"
            class="btn-secondary px-sm-10"
            @click.stop="perPage = 6"
          >
            Muat lebih sedikit
          </v-btn>
        </div>
      </template>
    </v-data-iterator>

    <dialog-detil-promo />
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import DialogDetilPromo from '~/components/DialogDetilPromo.vue'
import { samplePromoItems } from '~/utils/items.js'

export default {
  components: { DialogDetilPromo },
  data: () => ({
    items: samplePromoItems,
    perPage: 6
  }),
  methods: {
    ...mapMutations('promo', {
      setPromoActive: 'SET_PROMO_ACTIVE'
    }),
    openDialog (args) {
      if (!args) { return }
      this.setPromoActive(args)
      this.$store.commit('form/updateField', {
        path: 'dialog_promo',
        value: true
      })
    }
  }
}
</script>
