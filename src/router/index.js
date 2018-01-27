import Vue from 'vue'
import Router from 'vue-router'

import LandingPage from '@/components/landing-page'
import LoginPage from '@/components/login-page'
import OrderPizza from '@/components/order-pizza-page'
import MessagePage from '@/components/message-page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/login-page',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/message-page',
      name: 'MessagePage',
      component: MessagePage
    },
    {
      path: '/order-pizza/:id',
      name: 'OrderPizza',
      props: true,
      component: OrderPizza
    }
  ],
  mode: 'history'
})
