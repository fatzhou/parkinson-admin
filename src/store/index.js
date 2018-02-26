import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
  isLogin: false,
  openId: '',
  token: '',
  accessToken: '',
  unionId: '',
  isShowBasicePage: true,
  userInfo: {},
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})
