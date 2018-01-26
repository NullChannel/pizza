import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import LandingPage from '@/components/landing-page'
import OrderPizza from '@/components/order-pizza-page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
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
