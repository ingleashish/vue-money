import Vue from 'vue'
import Vuex from 'vuex'
import portfolioModule from './modules/portfolio/index'
import authModule from './modules/auth/index'
import investmentModule from './modules/investments/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    portfolio: portfolioModule,
    auth: authModule,
    investment: investmentModule
  }
})

export default store
