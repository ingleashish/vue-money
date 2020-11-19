import Vue from 'vue'
import Vuex from 'vuex'
import portfolioModule from './modules/portfolio/index'
import authModule from './modules/auth/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    portfolio: portfolioModule,
    auth: authModule
  }
})

export default store
