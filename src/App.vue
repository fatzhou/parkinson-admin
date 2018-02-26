<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { getWxUnionid, getWxUserInfo  } from './assets/js/api'
  import { getQueryString } from './assets/js/util'

export default {
  name: 'App',
  data() {
    return {

    }
  },
  computed: {
    ...mapState([
      'openId',
      'accessToken',
      'unionId',
      ])
  },
  methods: {
    ...mapMutations([
      'setWxInfo',
      'saveLogin',
    ]),
    getUserInfo(code) {
      getWxUnionid(code)
      .then(res => {
        console.log(res)
        if(res.status === 410) {
          this.$vux.alert.show({
            title: "获取unionId失败",
            content: "您的code已失效，请退出并重新打开当前页面",
          })        
          return false;  
        }
        if(res.status === 200) {
          console.log("获取unionid成功")
          //后端下发accessToken到前端，不安全
          this.setWxInfo(res.body)
          console.log(res.body.unionId, res.body.openId, this.openId)
          getWxUserInfo(res.body.unionId)
          .then((info) => {
            console.log(info, '获取用户身份成功')
            this.saveLogin(info.body)
            this.$router.push('participate')              
          }, (info) => {
            console.log("异常处理", info)
            if(info.status === 404) {
              console.log('用户未登录')
              this.$router.push('login')
            } else {
              this.$vux.alert.show({
                title: "拉取用户信息错误",
                content: info.body,
              })  
              console.log('拉取微信用户信息错误')
              this.$router.push('login')          
            }
          })          
        }
      }, error => {
        console.log(error, error.status)
      })      
    }
  },
  created() {
    console.log('根据code获取unionid')
    let ua = window.navigator.userAgent.toLowerCase();
    if (!ua.match(/MicroMessenger/i) == 'micromessenger') {
      console.log("非微信打开")
      this.$vux.alert.show({
        title: "请在微信中打开页面",
        content: "请复制当前网址，然后在微信中打开",
      })      
      return false;
    }
    let code = this.$route.query.code
    if(!code) {
      code = getQueryString('code')
    }
    console.log(code)
    if(!code) {
      this.$vux.alert.show({
        title: "未获取到微信授权",
        content: "请确定链接配置是否正确",
      })
    } else {
      this.getUserInfo(code)
    }
  }
}
</script>

<style lang="less">
  @import "./assets/css/base.less";
  .weui-dialog__hd {
    font-size: 16px;
    line-height: 1.6;
  }

  .move-enter-active,
  .move-leave-active {
    transition: all 0.2s linear;
  }
  .move-enter,
  .move-leave-to {
    transform: translate3d(-100%, 0, 0);
  }

  #app {
    font-family: PingFangSC-Light,PingFangSC,'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .setWh(100%, 100%);
  }
</style>
