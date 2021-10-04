import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/store'

const routes = [
  {
    path: '/',
    name: 'Home',
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
    path: `/Patient's_History`,
    name: 'step3',
    component: () => import('../views/PatientHistory.vue')
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
