import _ from 'lodash'

export const state = () => ({
  untouched: true,
  ordering: 'asc',
  pending: false,
  old_value: null,
  current_page: null,
  data: [],
  first_page_url: null,
  last_page_url: null,
  next_page_url: null,
  per_page: 15,
  total: 0,
  // detail school from get access
  access_detail: {}
})

export const getters = {
  sekolah: state => state
}

export const mutations = {
  SET_PENDING (state, payload) {
    state.pending = payload
  },
  /**
   * Set init data
   */
  SET_DATA_INIT (state, payload) {
    if (!payload.data) {
      state.data = []
      state.untouched = false
      state.old_value = payload.old_value
      return
    }
    state.untouched = false
    state.old_value = payload.old_value
    state = _.assign(state, payload.data)
  },
  /**
   * Reset data not including access detail
   */
  RESET_DATA (state) {
    state.untouched = true
    state.pending = false
    state.old_value = null
    state.current_page = null
    state.data = []
    state.first_page_url = null
    state.last_page_url = null
    state.next_page_url = null
    state.per_page = 15
    state.total = 0
  },
  /**
   * @param {*} payload
   * Object detail schools
   */
  SET_ACCESS_DETAIL (state, payload) {
    state.access_detail = payload
  },
  // Reset access detail
  RESET_ACCESS_DETAIL (state) {
    state.access_detail = {}
  },
  SET_ORDERING (state, payload) {
    if (_.isEqual(payload, 'desc')) {
      state.data = _.orderBy(state.data, ['name'], ['desc'])
    } else {
      state.data = _.orderBy(state.data, ['name'], ['asc'])
    }
  }
}

export const actions = {
  /**
   * Submit search school
   */
  async postSubmitSearchSchool ({ commit, rootState }) {
    // code
    commit('SET_PENDING', true)
    await this.$axios.$post(
      '/api/search/schools',
      { name: rootState.form.search_school })
      .then((ress) => {
        commit('SET_DATA_INIT', ress)
        commit('SET_ORDERING', rootState.form.ordering_school)
        commit('form/RESET_SEARCH_SCHOOL', null, { root: true })
      })
      .catch((err) => {
        console.warn(err)
      })
      .finally(() => {
        commit('SET_PENDING', false)
      })
  },
  /**
   * Submit search school address
   */
  async postSubmitSearchSchoolAddress ({ commit, rootState }) {
    // code
    commit('SET_PENDING', true)
    const {
      province,
      regency,
      district,
      village,
      stage,
      status
    } = _.pickBy(rootState.form.search_school_address, _.identity)
    const result = _.pickBy({
      province: province && province.id,
      regency: regency && regency.id,
      district: district && district.id,
      village: village && village.id,
      stage,
      status
    }, _.identity)
    const resultContext = _.pickBy({
      stage,
      status,
      address: [
        province && province.name,
        regency && regency.name,
        district && district.name,
        village && village.name
      ]
    }, _.identity)

    await this.$axios.$post(
      '/api/search',
      result
    )
      .then((ress) => {
        commit('SET_DATA_INIT', {
          ...ress,
          old_value: result
        })
        commit('SET_ORDERING', rootState.form.ordering_school)
        commit(
          'form/RESET_SEARCH_SCHOOL_ADDRESS',
          null,
          { root: true }
        )
        commit(
          'SET_CONTEXT_SEARCH_ADDRESS',
          resultContext,
          { root: true }
        )
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
   * Number of pages
   */
  async postPaginationSearch ({ commit, state, rootState }, args) {
    // code
    if (!args || !state.old_value) { return }

    let result
    if (_.isPlainObject(state.old_value)) {
      result = state.old_value
      commit('SET_PENDING', true)
      await this.$axios.$post(
        `/api/search?page=${args}`,
        result
      )
        .then((ress) => {
          commit('SET_DATA_INIT', {
            ...ress,
            old_value: state.old_value
          })
          commit('SET_ORDERING', rootState.form.ordering_school)
        })
        .catch((err) => {
          console.warn(err)
        })
        .finally(() => {
          commit('SET_PENDING', false)
        })
    } else {
      result = { name: state.old_value }
      commit('SET_PENDING', true)
      await this.$axios.$post(
        `/api/search/schools?page=${args}`,
        result
      )
        .then((ress) => {
          commit('SET_DATA_INIT', ress)
          commit('SET_ORDERING', rootState.form.ordering_school)
        })
        .catch((err) => {
          console.warn(err)
        })
        .finally(() => {
          commit('SET_PENDING', false)
        })
    }
  },
  /**
   * @param {*} uuid
   * String uuid schools
   */
  async getDetailSchool ({ commit }, uuid) {
    // code
    commit('SET_PENDING', true)
    await this.$axios.$get(`/api/schools/${uuid}`)
      .then((ress) => {
        console.log(ress)
        commit('SET_ACCESS_DETAIL', ress)
        commit('form/updateField', {
          path: 'getaccess.school_name',
          value: ress.name
        }, { root: true })
        commit('form/updateField', {
          path: 'getaccess.email',
          value: ress.email
        }, { root: true })
        commit('form/updateField', {
          path: 'getaccess.phone_number',
          value: ress.phone_number
        }, { root: true })
      })
      .catch((err) => {
        console.warn(err)
      })
      .finally(() => {
        commit('SET_PENDING', false)
      })
  },
  /**
   * Request operator access
   */
  async postAccessRequest ({ commit, rootState }) {
    // code
    commit('SET_PENDING', true)
    await this.$axios.$post(
      '/api/attempt/get-access',
      rootState.form.getaccess
    )
      .then((ress) => {
        if (ress.success) {
          this.$swal({
            icon: 'success',
            title: 'Success',
            text: 'Form permintaan Anda telah dikirim.'
          })
          commit('form/RESET_GET_ACCESS', null, { root: true })
        } else {
          this.$swal({
            icon: 'error',
            title: 'Oops!',
            text: ress.message
          })
        }
      })
      .catch((err) => {
        console.warn(err)
        this.$swal({
          icon: 'error',
          title: 'Oops!',
          text: 'Form permintaan Anda gagal dikirim.'
        })
      })
      .finally(() => {
        commit('SET_PENDING', false)
      })
  }
}
