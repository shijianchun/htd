import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'

import Slide from '@/pages/slide'
import dynamicNews from '@/pages/dynamic-news'
import HtdIntroduce from '@/pages/htd-introduce'
import htd from '@/pages/htd'
import HelloWorld from '@/pages/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: '',
        component: home,
	    children: [
            {path: '/htd/:id', component: htd, name: 'htd'},
            {path: '/index', component: Slide, name: 'slide'},
            {path: '', component: Slide, name: 'slide'},
            {path: '*', component: HelloWorld, name: 'HelloWorld'}
        ]      
    }
  ]
})
