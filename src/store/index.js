import Vue from 'vue'
import Vuex from 'vuex'
import question from './modules/question'
import auth from './modules/auth'
import notify from './modules/notify'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules:{
    question,
    auth,
    notify
  }
})