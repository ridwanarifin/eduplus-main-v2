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
      <v-list-item class="mb-8">
        <v-list-item-content>
          <v-img
            :src="require('~/static/logo.png?webp')"
            :lazy-src="require('~/static/logo.png?webp')"
            min-width="auto"
            class="edu-logo"
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

      <v-list-item
        link
        href="https://operator.edukasiplus.com"
        target="_blank"
      >
        <v-list-item-action>
          <v-icon v-text="$icon.mdiLogin" />
        </v-list-item-action>
        <v-list-item-title v-text="'Login'" />
      </v-list-item>

      <v-divider
        inset
        class="mx-auto mt-5 mb-10"
        :style="{
          borderWidth: '1px'
        }"
      />

      <v-list-item class="text-center">
        <v-btn
          nuxt
          dark
          large
          exact
          rounded
          color="white"
          class="mx-auto py-4 px-sm-10 btn-primary-registration"
          to="/schools/registration"
        >
          Daftarkan Sekolah Anda
        </v-btn>
      </v-list-item>
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
