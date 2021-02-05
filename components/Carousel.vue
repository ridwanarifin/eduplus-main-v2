<template>
  <swiper
    ref="mySwiper"
    class="swiper"
    :options="swiperOptions"
    :auto-update="true"
    :auto-destroy="true"
    :delete-instance-on-destroy="true"
    :cleanup-styles-on-destroy="true"
  >
    <slot v-bind="{ dataSource }">
      <swiper-slide v-if="!dataSource.length">
        <v-img
          :src="require('~/assets/img/placeholder-school.png?webp')"
          :lazy-src="require('~/assets/img/placeholder-school.png?webp')"
          min-width="auto"
          min-height="auto"
          max-height="400"
          class="mx-auto"
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
      </swiper-slide>

      <swiper-slide
        v-for="(item, index) in dataSource"
        v-else
        :key="index"
      >
        <v-img
          :src="item"
          :lazy-src="item"
          min-width="auto"
          min-height="auto"
          max-width="1105"
          max-height="400"
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
      </swiper-slide>
      <div
        slot="pagination"
        class="swiper-pagination"
      />
    </slot>
  </swiper>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => ([
        require('~/assets/img/placeholder-school.png?webp')
      ])
    },
    swiperOptions: {
      type: Object,
      default: () => ({
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  },
  data () {
    return {
      dataSource: this.data
    }
  },
  computed: {
    swiper () { return this.$refs.mySwiper.$swiper }
  },
  watch: {
    data (newVal) {
      this.dataSource = newVal
    }
  }
}
</script>
