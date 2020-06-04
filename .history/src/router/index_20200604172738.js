import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path:'/',
    name:'display',
    component: () => {'../display/display.vue'},
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
