import * as _ from '~/static/vendor/lodash'
import SecureLS from '~/static/vendor/secure-ls'
import createPersistedState from '~/static/vendor/vuex-persistedstate'
const ls = new SecureLS({ isCompression: false })

// export const strict = false

export const state = () => ({
  pending: false,
  breadcrumbs: [],
  provinsi: [],
  kab_kota: [],
  kecamatan: [],
  kelurahan: [],
  context_search_address: {
    status: null,
    stage: null,
    address: []
  }
})

export const getters = {
  /**
   * @returns
   * Boolean
   */
  pending: state => state.pending,
  /**
   * @returns
   * List/Array Provinsi
   */
  provinsi: state => state.provinsi,
  /**
   * @param {*} name
   * Provinsi name
   * @returns
   * Provinsi object find by name
   */
  provinsi_find: state => name => (
    _.find(state.provinsi, obj => (
      // eslint-disable-next-line
      obj.name == name
    ))
  ),
  /**
   * @returns
   * List/Array Kabupatan / Kota
   */
  kab_kota: state => state.kab_kota,
  /**
   * @returns
   * List/Array kecamatan
   */
  kecamatan: state => state.kecamatan,
  /**
   * @returns
   * List/Array kelurahan
   */
  kelurahan: state => state.kelurahan,
  /**
   * @returns
   * Object
   */
  context_search_address: state => state.context_search_address
}

export const mutations = {
  /**
   * @param {*} payload
   * Array of object
   */
  SET_CRUMBS (state, payload) {
    state.breadcrumbs = payload
  },
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
    const {
      province, // provinsi
      regency, // kabupaten / kota
      district, // kecamatan
      village // kelurahan
    } = payload
    state.provinsi = province
    state.kab_kota = regency
    state.kecamatan = district
    state.kelurahan = village
  },
  /**
   * @param {*} payload
   * Array / List
   * kabupaten / kota
   */
  SET_KAB_KOTA (state, payload) {
    state.kab_kota = payload
  },
  /**
   * @param {*} payload
   * Array / List
   * kecamatan
   */
  SET_KECAMATAN (state, payload) {
    state.kecamatan = payload
  },
  /**
   * @param {*} payload
   * Array / List
   * kelurahan
   */
  SET_KELURAHAN (state, payload) {
    state.kelurahan = payload
  },
  /**
   * @param {*} payload
   * Object
   */
  SET_CONTEXT_SEARCH_ADDRESS (state, payload = { status: null, stage: null, address: null }) {
    state.context_search_address.status = payload.status
    state.context_search_address.stage = payload.stage
    state.context_search_address.address = payload.address
    state.context_search_address.address = _.reject(_.uniq(state.context_search_address.address), _.isNil)
  },
  /**
   * @description
   * Reset context search address
   * to initial value
   */
  RESET_CONTEXT_SEARCH_ADDRESS (state) {
    state.context_search_address = {
      status: null,
      stage: null,
      address: []
    }
  }
}

export const actions = {
  /**
   * Get init data
   * provinsi, kabkota
   * kecamatan, kelurahan
   */
  async nuxtClientInit ({ commit, dispatch, rootState }) {
    // code
    commit('SET_PENDING', true)

    await Promise.all([
      dispatch('getSearchInit'),
      dispatch('favorit/getFavoritByContext', { stage: rootState.form.tabActive })
    ])
      .finally(() => {
        commit('SET_PENDING', false)
      })
  },
  /**
   * Get search init
   */
  async getSearchInit ({ commit }) {
    // code
    await this.$axios.$get('/api/search/init')
      .then((res) => {
        commit('SET_DATA_INIT', res)
      })
      .catch((err) => {
        console.warn(err)
      })
  },
  /**
   * @param {*} uuid
   * String
   * @returns
   * Detil Sekolah
   */
  async getDetailSekolah ({ commit }, uuid) {
    // code
    return await this.$axios.$get(`/api/schools/${uuid}`)
  },
  /**
   * @param {*} args
   * Object
   * @returns
   * List/Array kabupaten / kota
   */
  async getRegencyByProvince ({ commit }, args) {
    // code
    if (!args) {
      commit('form/updateField', {
        path: 'search_school_address.regency',
        value: null
      }, { root: true })
      commit('form/updateField', {
        path: 'search_school_address.district',
        value: null
      }, { root: true })
      commit('form/updateField', {
        path: 'search_school_address.village',
        value: null
      }, { root: true })
      return
    }

    commit('SET_PENDING', true)
    await this.$axios.$get(`/api/search/get-regency/${args.id}`)
      .then((ress) => {
        if (!_.size(ress.data)) {
          this.$swal({
            icon: 'error',
            title: 'Oops!',
            text: 'Kab / kota not found.',
            timer: 1500
          })
          return
        }
        commit('SET_KAB_KOTA', ress.data)
      })
      .catch((err) => {
        console.warn(err)
        this.$swal({
          icon: 'error',
          title: 'Oops!',
          text: 'Something when wrong.',
          timer: 1500
        })
      })
      .finally(() => {
        commit('SET_PENDING', false)
      })
  },
  /**
   * @param {*} args
   * Object
   * @returns
   * List/Array Kecamatan
   */
  getDistrictByRegency ({ commit }, args) {
    // code
    if (!args) {
      commit('form/updateField', {
        path: 'search_school_address.district',
        value: null
      }, { root: true })
      commit('form/updateField', {
        path: 'search_school_address.village',
        value: null
      }, { root: true })
      return
    }

    commit('SET_PENDING', true)
    this.$axios.$get(`/api/search/get-district/${args.id}`)
      .then((ress) => {
        if (!_.size(ress.data)) {
          this.$swal({
            icon: 'error',
            title: 'Oops!',
            text: 'Kecamatan not found.',
            timer: 1500
          })
          return
        }
        commit('SET_KECAMATAN', ress.data)
      })
      .catch((err) => {
        console.warn(err)
        this.$swal({
          icon: 'error',
          title: 'Oops!',
          text: 'Something when wrong.',
          timer: 1500
        })
      })
      .finally(() => {
        commit('SET_PENDING', false)
      })
  },
  /**
   * @param {*} args
   * Object
   * @returns
   * List/Array kelurahan
   */
  getVillageByDistrict ({ commit }, args) {
    // code
    if (!args) {
      commit('form/updateField', {
        path: 'search_school_address.village',
        value: null
      }, { root: true })
      return
    }

    commit('SET_PENDING', true)
    this.$axios.$get(`/api/search/get-village/${args.id}`)
      .then((ress) => {
        if (!_.size(ress.data)) {
          this.$swal({
            icon: 'error',
            title: 'Oops!',
            text: 'Kelurahan not found.',
            timer: 1500
          })
          return
        }
        commit('SET_KELURAHAN', ress.data)
      })
      .catch((err) => {
        console.warn(err)
        this.$swal({
          icon: 'error',
          title: 'Oops!',
          text: 'Something when wrong.',
          timer: 1500
        })
      })
      .finally(() => {
        commit('SET_PENDING', false)
      })
  }
}

export const plugins = [
  createPersistedState({
    storage: {
      getItem: key => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: key => ls.remove(key)
    }
  })
]
