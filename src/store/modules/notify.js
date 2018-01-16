import * as types from '../mutationTypes'

const state = {
  notify: {
    message: '',
    type: '',
    rand: '',
  },
}

const getters = {
  notify: state => state.notify,
}

const mutations = {
  [types.NOTIFY_INFO](state, message) {
    state.notify = {
      message,
      type: 'info',
    }
  },
  [types.NOTIFY_SUCCESS](state, message) {
    state.notify = {
      message,
      type: 'success',
    }
  },
  [types.NOTIFY_WARNING](state, message) {
    state.notify = {
      message,
      type: 'warning',
    }
  },
  [types.NOTIFY_ERROR](state, message) {
    state.notify = {
      message,
      type: 'error',
    }
  },
}

export default {

  state,
  getters,
  mutations,
}