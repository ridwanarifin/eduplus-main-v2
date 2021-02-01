import _ from 'lodash'
import { getField, updateField } from 'vuex-map-fields'
import {
  initFormGetaccess,
  initFormSearchSchoolAddress,
  initFormContact
} from '~/utils/initData.js'

export const state = () => ({
  pending: false,
  search_favorite_school: '',
  tabActive: 'sd',
  search_school: null,
  ordering_school: 'asc',
  getaccess: initFormGetaccess,
  search_school_address: initFormSearchSchoolAddress,
  contact: initFormContact,
  dialog_promo: false
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
    state.search_school_address = initFormSearchSchoolAddress
  },
  // Reset getaccess
  RESET_GET_ACCESS (state) {
    state.getaccess = initFormGetaccess
  },
  // Reset contact
  RESET_CONTACT (state) {
    state.contact = initFormContact
  }
}

export const actions = {
  async postContactUs ({ commit, state }) {
    commit('updateField', {
      path: 'pending',
      value: true
    })
    await this.$axios.$post(
      '/api/contact',
      _.pickBy(state.contact, _.identity)
    )
      .then((ress) => {
        if (ress.success) {
          this.$swal({
            icon: 'success',
            title: 'Terkirim',
            text: 'Kami akan menindaklanjuti pesan anda secepatnya.'
          })
          commit('RESET_CONTACT')
          return
        }
        this.$swal({
          icon: 'error',
          title: 'Oops!',
          text: ress.message
        })
      })
      .catch((err) => {
        this.$swal({
          icon: 'error',
          title: 'Oops!',
          text: 'Something when wrong!'
        })
        console.warn(err)
        throw new Error(err)
      })
      .finally(() => {
        commit('updateField', {
          path: 'pending',
          value: false
        })
      })
  }
}
