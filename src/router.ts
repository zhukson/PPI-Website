import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../src/pages/main/index.vue'
import About from '../src/pages/about/index.vue'
import Automotive from '../src/pages/solutions/automotive/index.vue'
import Electronics from '../src/pages/solutions/electronics/index.vue'
import Medical from '../src/pages/solutions/medical/index.vue'
import Industry from '../src/pages/solutions/industry/index.vue'
import Telecom from '../src/pages/solutions/telecom/index.vue'
import Assembly from '../src/pages/products/assembly/index.vue'
import Insert from '../src/pages/products/insert/index.vue'
import Milling from '../src/pages/products/milling/index.vue'
import Nylok from '../src/pages/products/nylok/index.vue'
import Screw from '../src/pages/products/screw/index.vue'
import Nuts from '../src/pages/products/nuts/index.vue'
import TurningScrew from '../src/pages/products/turningScrew/index.vue'
import Washer from '../src/pages/products/washers/index.vue'





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
    },
    {
      path: '/solutions/medical',
      component: Medical
    }]
  },
  { path: '/products', 
  children: [    
  {
    path: '/products/nylok',
    component: Nylok
  },
  {
    path: '/products/assembly',
    component: Assembly
  },
  {
    path: '/products/nuts',
    component: Nuts
  },
  {
    path: '/products/insert',
    component: Insert
  },  {
    path: '/products/washer',
    component: Washer
  },
  {
    path: '/products/milling',
    component: Milling
  },
  {
    path: '/products/turningScrew',
    component: TurningScrew
  },
  {
    path: '/products/screw',
    component: Screw
  }]
},
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
})