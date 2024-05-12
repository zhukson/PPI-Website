import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../src/pages/main/index.vue'
import About from '../src/pages/about/index.vue'
import Automotive from '../src/pages/solutions/automotive/index.vue'
import Electronics from '../src/pages/solutions/electronics/index.vue'
import Industry from '../src/pages/solutions/industry/index.vue'
import Telecom from '../src/pages/solutions/telecom/index.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: About },
  { path: '/solutions', 
    children: [    
    {
      path: '/solutions/automotive',
      component: Automotive
    },
    {
      path: '/solutions/electronics',
      component: Electronics
    },
    {
      path: '/solutions/industry',
      component: Industry
    },
    {
      path: '/solutions/telecom',
      component: Telecom
    }]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
})