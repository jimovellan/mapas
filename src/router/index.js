import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "HomeView" */ '../views/home/HomeView.vue'),
  },
  {
    path: '/countries/:region',
    name: 'countries',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "CountriesView" */ '../views/countries/CountriesView.vue'),
    props:(router)=>{
      return { region: router.params.region};
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
