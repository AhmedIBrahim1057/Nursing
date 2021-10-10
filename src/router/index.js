import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/store'

const routes = [
  {
    path: '/',
    name: 'step0',
    component: Home
  },
  {
    path: `/Learning-Objectives`,
    name:'step1',
    component: () => import('../views/LearningObjectives.vue')
  },
  {
    path: `/Pre-Requisites`,
    name: 'step2',
    component: () => import('../views/Pre-Requisites.vue')
  },
  {
    path: `/Patient's-History`,
    name: 'step3',
    component: () => import('../views/PatientHistory.vue')
  },
  {
    path: `/Medical-Orders`,
    name: 'step4',
    component: () => import('../views/MedicalOrders.vue')
  },
  {
    path: `/conclusion`,
    name: 'step5',
    component: () => import('../views/Conclusion.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(store.state.allowStep == true){
    next()
  }
  else{
    next(false)
  }
})

export default router
