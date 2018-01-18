import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/components/MainLayout'
import HomePage from '@/components/HomePage'
import SigninPage from '@/components/SigninPage'
import SignUpPage from '@/components/SignUpPage'
import QuestionDetailPage from '@/components/question/QuestionDetailPage'
import QuestionForm from '@/components/question/QuestionForm'

Vue.use(Router)

let router = new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'homePage',
          component: HomePage
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
          path: 'question/create',
          name: 'questionCreate',
          component: QuestionForm,
          meta: { requireAuth: true },
          props: true
        },
        {
          path: 'question/edit/:id',
          name: 'questionEdit',
          component: QuestionForm,
          meta: { requireAuth: true },
          props: true
        },
        {
          path: 'question/:id',
          name: 'questionPage',
          component: QuestionDetailPage,
          props: true
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requireAuth)) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({ name: 'signinPage' })
    }
  } else if (to.name === 'signinPage' && localStorage.getItem('token')) {
    next(false)
  } else {
    next()
  }
})



export default router