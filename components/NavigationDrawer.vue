<template>
  <v-navigation-drawer
    v-model.lazy="drawerModel"
    :mini-variant="miniVariant"
    :color="colors.blueEduplus"
    width="100%"
    fixed
    right
    dark
    app
  >
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-img
            :src="require('~/static/icon.png?webp')"
            :lazy-src="require('~/static/icon.png?webp')"
            min-width="auto"
            max-width="100px"
          />
        </v-list-item-content>
        <v-list-item-icon>
          <v-icon
            @click.stop="$emit('on-close-drawer', false)"
            v-text="icon.close"
          />
        </v-list-item-icon>
      </v-list-item>

      <v-list-item
        v-for="(item, i) in data"
        :key="i"
        :to="item.path"
        router
        exact
      >
        <v-list-item-action>
          <v-icon v-text="item.icon" />
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.name" />
        </v-list-item-content>
      </v-list-item>

      <v-divider
        inset
        class="mx-auto my-5"
        :style="{
          borderWidth: '1px'
        }"
      />

      <v-list-item-action>
        <v-btn
          dark
          large
          rounded
          nuxt
          exact
          color="white"
          class="py-4 btn-primary-registration"
          to="/schools/registration"
        >
          Daftarkan Sekolah Anda
        </v-btn>
      </v-list-item-action>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mdiClose } from '@mdi/js'
import * as Colors from '~/utils/colors'

export default {
  props: {
    drawer: {
      type: Boolean,
      required: true
    },
    miniVariant: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      drawerModel: this.drawer,
      variant: this.miniVariant,
      colors: Colors,
      icon: {
        close: mdiClose
      }
    }
  },
  watch: {
    drawer (args) {
      this.drawerModel = args
    },
    miniVariant (args) {
      this.variant = args
    }
  }
}
</script>

<style lang="scss">
.theme--dark.v-navigation-drawer .v-divider {
  border-color: rgba(255, 255, 255, 0.5) !important;
}
</style>
