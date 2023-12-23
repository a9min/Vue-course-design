/*
 * @Date: 2023-12-21 13:49:52
 * @LastEditTime: 2023-12-21 17:03:17
 * @作者: Danny
 * @简介:     
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/Index.vue'
import Login from '@/views/login/Index.vue'
import Home from '@/views/home/Home.vue'

const Product=()=>import('@/views/product/Index.vue')
const List=()=>import('@/views/product/list/Index.vue')
const Category=()=>import('@/views/product/category/Index.vue')

const Order=()=>import('@/views/order/Index.vue')
const OrderList=()=>import('@/views/order/list/Index.vue')
const Collect=()=>import('@/views/order/collect/Index.vue')

const Advert=()=>import('@/views/advert/list/Index.vue')
const Advertlist=()=>import('@/views/advert/list/Index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Layout,
    children:[
      {
        path:'/',
        name:'home',
        component:Home,
        redirect: '/login'
      },
      {
        path:'/home',
        name:'home',
        component:Home,
      },
      {
        path:'/product',//产品管理
        name:'product',
        component:Product,
        children:[
          {
            path:'list',//访问路径：/product/list
            name:'list',
            component:List,
          },
          {
            path:'category',//访问路径：/product/list
            name:'category',
            component:Category,
          },
        ],
      },
      {
        path:'/order',//订单管理
        name:'order',
        component:Order,
        children:[
          {
            path:'order-list',
            name:'order-list',
            component:OrderList,
          },
          {
            path:'collect',
            name:'collect',
            component:Collect,
          },
        ],
      },
      {
        path:'/advert',//广告管理
        name:'advert',
        component:Advert,
        children:[
          {
            path:'advert-list',
            name:'advert-list',
            component:Advertlist,
          },
        ],
      },
    ],
  },
  {
    path:'/login',
    name:'login',
    component:Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
