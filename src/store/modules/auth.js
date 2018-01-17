import axios from 'axios'
import * as types from '../mutationTypes'

const state = {
  isLoggedIn: localStorage.getItem('token') !== null
}

const getters = {
  isLoggedIn: state => state.isLoggedIn
}

const actions = {
  signin({ commit }, { email, password }) {
    axios
      .post('/auth/signin', {
        email,
        password
      })
      .then(({ data }) => {
        commit(types.AUTH_SIGNIN_SUCCESS, {
          token: data.data.token
        })
        commit(types.NOTIFY_SUCCESS, 'Sign in success', { root: true })
      })
      .catch(err => {
        commit(types.NOTIFY_ERROR, err.response.data.message, { root: true })
      })
  },
  signup({ commit }, { name, email, username, password }) {
    axios
      .post('/auth/signup', {
        name,
        username,
        email,
        password
      })
      .then(() => {
        commit(types.NOTIFY_SUCCESS, 'Signup success. Please login', {
          root: true
        })
        commit(types.AUTH_SIGNUP_SUCCESS)
      })
      .catch(err => {
        commit(types.NOTIFY_ERROR, err.response.data.message, { root: true })
      })
  },
  signout({ commit }) {
    commit(types.AUTH_SIGNOUT)
    commit(types.NOTIFY_SUCCESS, 'Signup success. Please login', { root: true })
  }
}

const mutations = {
  [types.AUTH_SIGNIN_SUCCESS](state, { token }) {
    localStorage.setItem('token', `Bearer ${token}`)
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
    state.isLoggedIn = true
  },
  [types.AUTH_SIGNUP_SUCCESS]() {},
  [types.AUTH_SIGNOUT](state) {
    localStorage.removeItem('token')
    console.log(localStorage.getItem('token'))
    axios.defaults.headers.common.Authorization = 'Bearer jwt'
    state.isLoggedIn = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
