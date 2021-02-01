import Vue from 'vue'
import imagesCard from '~/utils/imagesCard'

Vue.mixin({
  methods: {
    getImage: (args, ctx) => imagesCard(args, ctx)
  }
})
