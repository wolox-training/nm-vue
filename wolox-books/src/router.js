import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('./views/Dashboard.vue')
    },
    {
      path: '/books/:id',
      name: 'BookDetail',
      component: () => import('./views/BookDetail.vue')
    }
  ]
})
