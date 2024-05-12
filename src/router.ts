import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../src/pages/main/index.vue'
import About from '../src/pages/about/index.vue'
import Solution from '../src/pages/solutions/index.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: About },
  { path: '/solutions', component: Solution}
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
})