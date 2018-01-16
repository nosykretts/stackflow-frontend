import axios from 'axios'
import * as types from '../mutationTypes'

const state = {
  questions: []
}

const getters = {
  questions: state => state.questions
}

const actions = {
  getQuestions({ commit }) {
    axios.get('/questions')
    .then(({data}) => {
      commit(types.QUESTION_GET_ALL_SUCCESS, {
        questions : data.data
      })
    })
  },
  getQuestion({ commit }, { id }) {},
  createQuestion({ commit }, { caption }) {},
  updateCaption({ commit }, { postId, caption }) {},
  deleteQuestion({ commit }, { postId }) {},
  createAnswer({ commit }, { postId, caption }) {},
  deleteAnswer({ commit }, { postId, answerId }) {}
}

const mutations = {
  [types.QUESTION_GET_ALL_SUCCESS](state, {questions}) {
    state.questions = questions
  },
  [types.QUESTION_GET_ONE_SUCCESS](state, question) {},
  [types.QUESTION_CREATE_SUCCESS](state, question) {},
  [types.QUESTION_UPDATE_SUCCESS](state, caption, questionId) {},
  [types.QUESTION_DELETE_SUCCESS](state, questionId) {},
  [types.QUESTION_TOGGLEVOTE_SUCCESS](state, questionId, direction) {},
  [types.QUESTION_ANSWER_CREATE_SUCCESS](state) {},
  [types.QUESTION_ANSWER_DELETE_SUCCESS](state) {},
  [types.QUESTION_ANSWER_TOGGLEVOTE_SUCCESS](state) {}
}

export default {

  state,
  getters,
  mutations,
  actions
}
