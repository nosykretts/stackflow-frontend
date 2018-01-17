import axios from 'axios'
import * as types from '../mutationTypes'

const state = {
  questions: [],
  question: null,
  modalVisible: false
}

const getters = {
  questions: state => state.questions,
  question: state => state.question,
  modalVisible: state => state.modalVisible
}

const actions = {
  getQuestions({ commit }) {
    axios
      .get('/questions')
      .then(({ data }) => {
        commit(types.QUESTION_GET_ALL_SUCCESS, {
          questions: data.data
        })
      })
      .catch(err => {
        console.log(err.response.data.message)
      })
  },
  getQuestion({ commit }, { id }) {
    axios
      .get('/questions/' + id)
      .then(({ data }) => {
        commit(types.QUESTION_GET_ONE_SUCCESS, {
          question: data.data
        })
      })
      .catch(err => {
        console.log(err.response.data.message)
      })
  },
  createQuestion({ commit }, { caption, description }) {
    axios
      .post(`/questions`, {
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
  updateQuestion({ commit }, { questionId, caption, description }) {
    axios
      .put(`/questions/${questionId}`, {
        caption,
        description
      })
      .then(question => {
        commit(types.QUESTION_UPDATE_SUCCESS, {
          question,
          questionId
        })
      })
      .catch(err => {
        console.log(err.response.data.message)
      })
  },
  deleteQuestion({ commit }, { questionId }) {
    axios
      .delete(`/questions/${questionId}`)
      .then(question => {
        commit(types.QUESTION_DELETE_SUCCESS, {
          question,
          questionId
        })
      })
      .catch(err => {
        console.log(err.response.data.message)
      })
  },
  toggleVoteQuestion({ commit }, { questionId, direction }) {
    axios
      .put(`/questions/${questionId}/togglevote`, {
        direction
      })
      .then(({ data }) => {
        commit(types.QUESTION_TOGGLEVOTE_SUCCESS, {
          upvoters: data.data.upvoters,
          downvoters: data.data.downvoters
        })
      })
      .catch(err => {
        console.log(err.response.data.message)
      })
  },
  toggleVoteAnswer({ commit }, { questionId, answerId, direction }) {
    axios
      .put(`questions/${questionId}/answers/${answerId}/togglevote`, {
        direction
      })
      .then(({ data }) => {
        commit(types.QUESTION_ANSWER_TOGGLEVOTE_SUCCESS, {
          answer: data.data,
          questionId
        })
      })
      .catch(err => {
        console.log(err.response.data.message)
      })
  },
  createAnswer({ commit }, { questionId, caption }) {
    axios
      .post(`/questions/${questionId}/answers`, {
        caption
      })
      .then(({ data }) => {
        commit(types.QUESTION_ANSWER_CREATE_SUCCESS, {
          answer: data.data,
          questionId
        })
      })
      .catch(err => {
        console.log(err.response.data.message)
      })
  },
  deleteAnswer({ commit }, { questionId, answerId }) {
    axios
      .delete(`/questions/${questionId}/answers/${answerId}`)
      .then(({data}) => {
        console.log('hahahaha')
        commit(types.QUESTION_ANSWER_DELETE_SUCCESS, {
          answer: data.data,
          questionId
        })
      })
  }
}

const mutations = {
  [types.QUESTION_GET_ALL_SUCCESS](state, { questions }) {
    state.questions = questions
  },
  [types.QUESTION_GET_ONE_SUCCESS](state, { question }) {
    state.question = question
  },
  [types.QUESTION_CREATE_SUCCESS](state, { question }) {
    state.questions = [question, ...state.questions]
  },
  [types.QUESTION_UPDATE_SUCCESS](state, { question, questionId }) {
    state.questions = state.questions.map(currentQuestion => {
      if (question._id == currentQuestion._id) {
        return {
          ...currentQuestion,
          caption: question.caption,
          description: question.description
        }
      }
      return currentQuestion
    })
    state.question = {
      ...state.question,
      caption: question.caption,
      description: question.description
    }
  },
  [types.QUESTION_DELETE_SUCCESS](state, { questionId }) {
    state.question = null
    state.questions = state.questions.filter(question => {
      return questionId !== question._id
    })
  },
  [types.QUESTION_TOGGLEVOTE_SUCCESS](state, { upvoters, downvoters }) {
    state.question = {
      ...state.question,
      upvoters,
      downvoters
    }
  },
  [types.QUESTION_ANSWER_CREATE_SUCCESS](state, { answer, questionId }) {
    state.question.answers = [...state.question.answers, answer]
  },
  [types.QUESTION_ANSWER_DELETE_SUCCESS](state, { answer, questionId }) {

    state.question.answers = state.question.answers.filter(currentAnswer => {
      return currentAnswer._id !== answer._id
    })
    state.questions = state.questions.map(question => {
      if (question._id == questionId) {
        return {
          ...question,
          answer: question.answers.filter(currentAnswer => {
            return currentAnswer._id !== answer._id
          })
        }
      }
      return question
    })
  },
  [types.QUESTION_ANSWER_TOGGLEVOTE_SUCCESS](state, { answer, questionId }) {
    state.question.answers = state.question.answers.map(currentAnswer => {
      if (currentAnswer._id == answer._id) {
        return {
          ...currentAnswer,
          upvoters: answer.upvoters,
          downvoters: answer.downvoters
        }
      }
      return currentAnswer
    })
  },
  showModal(state) {
    state.modalVisible = true
  },
  hideModal(state) {
    state.modalVisible = false
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
