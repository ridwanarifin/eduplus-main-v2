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
        :src="require('~/static/icon.png?webp')"
        :lazy-src="require('~/static/icon.png?webp')"
        min-width="auto"
        max-width="100px"
      />
    </nuxt-link>
    <v-spacer />

    <v-sheet color="transparent" class="hidden-sm-and-down">
      <v-btn
        v-for="(item, i) in data"
        :key="i"
        :to="item.path"
        :link="!item.path ? true : false"
        :nuxt="item.path ? true : false"
        :href="!item.path ? 'https://operator.edukasiplus.com/' : ''"
        exact
        text
        tile
      >
        {{ item.name }}
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
      <v-btn
        icon
        @click.stop="on_click_mini_variant"
      >
        <v-icon>
          {{ miniVariant ? $icon.mdiChevronRight : $icon.mdiChevronLeft }}
        </v-icon>
      </v-btn>
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
      drawerModel: false,
      variant: this.miniVariant,
      colors: Colors
    }
  },
  watch: {
    drawer (args) {
      this.drawerModel = this.drawerModel !== args && this.args
    },
    miniVariant (args) {
      this.variant = args
    }
  },
  methods: {
    on_click_mini_variant () {
      this.$emit('on-click-mini-variant')
    }
  }
}
</script>
