import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/'

Vue.use(VueRouter)

  const routes = [
  {
    path:'/',
    name:'layout',
    component: () => {'../layout/layout.vue'},
    children:[
      {
        path: '',
        name: 'Home',
        component: Home
      },
    ]
  },
  
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/parents',
    name: 'parents',
    component: () => import('../views/parents/parents.vue'),
    
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
