import Vue from 'vue'
import Router from 'vue-router'
import page_main from '@/components/page_main'
import home from '@/pages/home/home'
//pages
import carousel from '@/pages/carousel/carousel'
import sign_in from '@/pages/sign_in/sign_in'
import contact from '@/pages/contact/contact'
import repertory_list from '@/pages/repertory_list/repertory_list'
import equipment_list from '@/pages/equipment_list/equipment_list'
import storage from '@/pages/storage/storage'
import order from '@/pages/order/order'
import remark from '@/pages/remark/remark'
import register from '@/pages/register/register'
import information_release from '@/pages/information_release/information_release'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/home'
    },{
      path: '/home',
      component:page_main,
      children:[{
        path:'/home',
        component:home
      },{
        path:'/carousel',
        component:carousel
      },{
        path:'/sign_in',
        component:sign_in
      },{
        path:'/contact',
        component:contact
      },{
        path:'/repertory_list',
        component:repertory_list
      },{
        path:'/equipment_list',
        component:equipment_list
      },{
        path:'/storage',
        component:storage
      },{
        path:'/order',
        component:order
      },{
        path:'/remark',
        component:remark
      },{
        path:'/register',
        component:register
      },{
        path:'/information_release',
        component:information_release
      }]
    }
  ]
})
