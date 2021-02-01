import _ from 'lodash'
export const state = () => ({
  pending: false,
  init: [],
  provinsi_init: []
})

export const getters = {
  pending: state => state.pending,
  init: state => (
    _.filter(state.init, obj => (
      _.size(obj.schools) > 0)
    )
  ),
  provinsi_init: state => state.provinsi_init
}

export const mutations = {
  SET_PENDING (state, payload) {
    state.pending = payload
  },

  SET_INIT (state, payload) {
    state.init = _.flatMap(payload, obj => (
      [{ ...obj, count: _.size(obj.schools) }]
    ))
  },

  SET_PROVINSI_INIT (state, payload) {
    state.provinsi_init = payload
  }
}

export const actions = {
  /**
   * @param {*} context
   * Object
   * @example
   * { stage: 'sd', id_province: 31 }
   */
  async getFavoritByContext ({ commit }, context) {
    const { stage, id_province } = context
    commit('SET_PENDING', true)
    if (!id_province) {
      await this.$axios.$get(`/api/favorite/${stage}`)
        .then((res) => {
          commit('SET_INIT', res.school)
        })
        .catch((err) => {
          console.warn(err)
        })
        .finally(() => {
          commit('SET_PENDING', false)
        })
    } else {
      await this.$axios.$get(`/api/favorite/${id_province}/${stage}`)
        .then((res) => {
          commit('SET_PROVINSI_INIT', res.school)
        })
        .catch((err) => {
          console.warn(err)
        })
        .finally(() => {
          commit('SET_PENDING', false)
        })
    }
  }
}
