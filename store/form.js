// import _ from 'lodash'
import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  search_favorite_school: '',
  tabActive: 'sd',
  search_school: null,
  ordering_school: 'asc',
  getaccess: {
    school_name: null,
    npsn: null,
    name: null,
    position: null,
    email: null,
    phone_number: null
  },
  search_school_address: {
    province: null,
    regency: null,
    district: null,
    village: null,
    stage: null,
    status: null
  }
})

export const getters = {
  getField
}

export const mutations = {
  updateField,
  /**
   * Reset search_school
   */
  RESET_SEARCH_SCHOOL (state) {
    state.search_school = null
  },
  // Reset search_school_address
  RESET_SEARCH_SCHOOL_ADDRESS (state) {
    state.search_school_address = {
      province: null,
      regency: null,
      district: null,
      village: null,
      stage: null,
      status: null
    }
  },
  // Reset getaccess
  RESET_GET_ACCESS (state) {
    state.getaccess = {
      school_name: null,
      npsn: null,
      name: null,
      position: null,
      email: null,
      phone_number: null
    }
  }
}

export const actions = {}
