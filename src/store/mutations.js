export default {
  saveLogin(state, userInfo) {
    state.isLogin = true
    window.token = userInfo.token
    state.userInfo = userInfo
  },
  savePersonal(state){
    state.isShowBasicePage = true;
  },
  setWxInfo(state, obj) {
    window.token = obj.token
  	state.unionId = obj.unionId
  	state.openId = obj.openId
  	state.accessToken = obj.accessToken
    state.token = obj.token
  },
}