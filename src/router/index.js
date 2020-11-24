import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import PageNotFound from '../components/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/auth',
    meta: { requiresUnauth: true }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: { requiresUnauth: true }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
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
  { path: '/:notFound(.*)', component: PageNotFound, meta: { requiresUnauth: true } }
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
