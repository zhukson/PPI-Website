import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../src/pages/main/index.vue'
import About from '../src/pages/about/index.vue'

const routes = [
  { path: '/PPI-Website/', component: HomeView },
  { path: '/PPI-Website/about', component: About },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})