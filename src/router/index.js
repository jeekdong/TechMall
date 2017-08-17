import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/GoodsList'
import Cart from '@/views/Cart'
import Address from '@/views/Address'
import orderConfirm from '@/views/orderConfirm'
import orderSuccess from '@/views/orderSuccess'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path:'/address',
      name: 'Address',
      component: Address
    },
    {
      path:'/orderConfirm',
      name: 'orderConfirm',
      component: orderConfirm
    },
    {
      path:'/orderSuccess',
      name: 'orderSuccess',
      component: orderSuccess
    }
  ]
})
