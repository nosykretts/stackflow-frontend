import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/components/MainLayout'
import HomePage from '@/components/HomePage'
import SigninPage from '@/components/SigninPage'
import SignUpPage from '@/components/SignUpPage'
import QuestionDetailPage from '@/components/question/QuestionDetailPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'homePage',
          component: HomePage,
        },
        {
          path: 'auth/signin',
          name: 'signinPage',
          component: SigninPage
        },
        {
          path: 'auth/signup',
          name: 'signupPage',
          component: SignUpPage
        },
        {
          path: 'question/:id',
          name: 'questionPage',
          component: QuestionDetailPage,
          props: true
        }
      ]
    },

    
  ]
})
