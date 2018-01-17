import axios from 'axios'
import * as types from '../mutationTypes'

const state = {
  questions: [],
  question: null
}

const getters = {
  questions: state => state.questions,
  question: state => state.question
}

const actions = {
  getQuestions({ commit }) {
    axios.get('/questions')
    .then(({data}) => {
      commit(types.QUESTION_GET_ALL_SUCCESS, {
        questions : data.data
      })
    })
    .catch(err => {
      console.log(err.response.data.message)
    })
  },
  getQuestion({ commit }, { id }) {
    axios.get('/questions/' + id)
    .then(({data}) => {
      commit(types.QUESTION_GET_ONE_SUCCESS, {
        question : data.data
      })
    })
    .catch(err => {
      console.log(err.response.data.message)
    })
  },
  createQuestion({ commit }, { caption, description }) {
    axios.post(`/questions`, {
      caption,
      description
    })
    .then(question => {
      commit(types.QUESTION_CREATE_SUCCESS, {
        question
      })
    })
    .catch(err => {
      console.log(err.response.data.message)
    })    
  },
  updateQuestion({ commit }, { postId, caption, description }) {
    axios.put(`/questions/${postId}`, {
      caption,
      description
    })
    .then(question => {
      commit(types.QUESTION_UPDATE_SUCCESS, {
        question
      })
    })
    .catch(err => {
      console.log(err.response.data.message)
    })    
  },
  deleteQuestion({ commit }, { postId }) {
    axios.delete(`/questions/${postId}`)
    .then(question => {
      commit(types.QUESTION_DELETE_SUCCESS, {
        question
      })
    })
    .catch(err => {
      console.log(err.response.data.message)
    })
  },
  toggleVoteQuestion({commit}, {postId, direction}){
    axios.put(`/questions/${postId}/togglevote`,{})
    .then(question => {
      commit(types.QUESTION_TOGGLEVOTE_SUCCESS,{
        question
      })
    })
    .catch(err => {
      console.log(err.response.data.message)
    })
  },
  toggleVoteAnswer({commit}, {postId, answerId, direction}){
    axios.put(`questions/${postId}/answers/${answerId}/togglevote`,{})
    .then(answer => {
      commit(types.QUESTION_ANSWER_TOGGLEVOTE_SUCCESS, {
        answer,
        postId
      })
    })
    .catch(err => {
      console.log(err.response.data.message)
    })
  },
  createAnswer({ commit }, { postId, caption }) {
    axios.post(`/questions/${postId}/answers`,{
      caption
    })
    .then(answer => {
      commit(types.QUESTION_ANSWER_CREATE_SUCCESS,{
        answer,
        postId
      })
    })
  },
  deleteAnswer({ commit }, { postId, answerId }) {
    axios.delete(`/questions/${postId}/answers/${answerId}`)
    .then(answer => {
      commit(types.QUESTION_ANSWER_DELETE_SUCCESS, {
        answer, 
        postId
      })
    })
  }
}

const mutations = {
  [types.QUESTION_GET_ALL_SUCCESS](state, {questions}) {
    state.questions = questions
  },
  [types.QUESTION_GET_ONE_SUCCESS](state, {question}) {
    state.question = question
  },
  [types.QUESTION_CREATE_SUCCESS](state, {question}) {
    state.questions = [
      question,      
      ...state.questions,
    ]
  },
  [types.QUESTION_UPDATE_SUCCESS](state, {caption, questionId}) {},
  [types.QUESTION_DELETE_SUCCESS](state, {questionId}) {},
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
