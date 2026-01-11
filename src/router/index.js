import { createRouter, createWebHistory } from 'vue-router'

import MainContent from '@/layouts/Main/MainContent/MainContent.vue'
import Films from '@/pages/Films/Films.vue'
import Series from '@/pages/Series/Series.vue'
import Popular from '@/pages/Popular/Popular.vue'
import Watchlist from '@/pages/Watchlist/Watchlist.vue'

import { isLoading } from '@/config/loading'

const routes = [
  {
    path: '/',
    name: 'maincontent', 
    component: MainContent
  },
  {
    path: '/filmes',
    name: 'filmes',
    component: Films
  },
  {
    path: '/series',
    name: 'series',
    component: Series
  },
  {
    path: '/populares',
    name: 'populares',
    component: Popular
  },
  {
    path: '/watchlist',
    name: 'watchlist',
    component: Watchlist
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(() => {
  isLoading.value = true
})

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})

export default router
