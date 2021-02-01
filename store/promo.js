import _ from 'lodash'
import { initPromo } from '~/utils/initData.js'

export const state = () => initPromo

export const mutations = {
  /**
   * @param {*} payload
   * Boolean
   */
  SET_PENDING (state, payload) {
    state.pending = payload
  },
  /**
   * @param {*} payload
   * Object
   */
  SET_DATA_INIT (state, payload) {
    state = _.assign(state, payload.promo)
  }
}

export const actions = {
  async getPromo ({ commit }) {
    // code
    commit('SET_PENDING', true)
    await this.$axios.$get('/api/promo')
      .then((ress) => {
        commit('SET_DATA_INIT', ress)
      })
      .catch((err) => {
        throw new Error(err)
      })
      .finally(() => {
        commit('SET_PENDING', false)
      })
  }
}
