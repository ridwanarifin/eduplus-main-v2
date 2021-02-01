<template>
  <v-app-bar
    :color="colors.blueEduplus"
    class="px-sm-10"
    width="100vw"
    fixed
    dark
    flat
    app
    absolute
  >
    <nuxt-link exact replace to="/">
      <v-img
        :src="require('~/static/logo.png?webp')"
        :lazy-src="require('~/static/logo.png?webp')"
        min-width="auto"
        class="edu-logo"
      />
    </nuxt-link>
    <v-spacer />

    <v-sheet color="transparent" class="hidden-sm-and-down">
      <v-btn
        v-for="(item, index) in data"
        :key="index"
        :to="item.path"
        nuxt
        exact
        text
        tile
      >
        {{ item.name }}
      </v-btn>

      <v-btn
        text
        tile
        link
        href="https://operator.edukasiplus.com"
        target="_blank"
      >
        Login
      </v-btn>

      <v-btn
        large
        rounded
        nuxt
        exact
        to="/schools/registration"
        color="white"
        class="btn-primary-registration font-weight-black ml-md-5"
      >
        Daftarkan sekolah anda
      </v-btn>
    </v-sheet>

    <v-sheet
      class="hidden-md-and-up"
      color="transparent"
    >
      <v-app-bar-nav-icon
        @click.prevent="$emit('on-click-drawer')"
      />
    </v-sheet>
  </v-app-bar>
</template>

<script>
import * as Colors from '~/utils/colors'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    drawer: {
      type: Boolean,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      drawerModel: false,
      variant: this.miniVariant,
      colors: Colors
    }
  },
  watch: {
    drawer (args) {
      this.drawerModel = args
    }
  }
}
</script>
