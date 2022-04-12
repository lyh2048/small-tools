import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Watermark from '../views/Watermark.vue'
import PDF from '../views/PDF.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/watermark',
    name: 'Watermark',
    component: Watermark 
  },
  {
    path: '/pdf',
    name: 'PDF',
    component: PDF
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
