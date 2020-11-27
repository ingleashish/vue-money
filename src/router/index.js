import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ExploreView from '../views/ExploreView.vue'
import Auth from '../views/Auth.vue'
import PageNotFound from '../components/PageNotFound.vue'
import MyInvestmentsView from '../views/MyInvestmentsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth,
    meta: { requiresUnauth: false }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: false }
  },
  {
    path: '/explore',
    name: 'ExploreView',
    component: ExploreView,
    meta: { requiresAuth: false }
  },
  {
    path: '/myinvestments',
    name: 'MyInvestmentsView',
    component: MyInvestmentsView,
    meta: { requiresAuth: false }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { requiresAuth: true }
  },
  { path: '/:notFound(.*)', component: PageNotFound, meta: { requiresUnauth: false } }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Auth guard
router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !localStorage.getItem('token')) {
    next('/')
  } else {
    next()
  }
})

export default router
