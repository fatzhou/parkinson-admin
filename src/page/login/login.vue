<template>
  <div class="login-wrap">
    <div class="login-head"></div>
    <div class="login-con">
      <div class="form">
        <label class="phone-num-wrap">
          <input type="text" class="phone-num" placeholder="请输入11位手机号码" v-model="phoneNum">
        </label>
        <label class="get-phone-code">
          <input type="text" class="phone-code" placeholder="请输入验证码" v-model="phoneCode">
          <button @click="getMobile">{{buttonText}}</button>
        </label>
      </div>
      <div class="form-btn">
        <label class="submit-wrap">
          <button class="submit" @click="loginFn">提交</button>
        </label>
      </div>
      <p class="">* 完成号码绑定才可参与帕友活动</p>
    </div>
    <div class="login-footer"></div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { validator } from '../../assets/js/util'
  import { bindMobile, getVerifyCode } from '../../assets/js/api'
  export default {
    name: 'login',
    data() {
      return {
        phoneNum: "",
        phoneCode: "",
        waiting: false,
        totalCount: 60,
        intervalGap: 1000,
        leftCount: 0,
        buttonText: "获取验证码",
        interval: null
      }
    },
    computed: {
      ...mapState([
        'openId',
        'accessToken',
        'unionId',
        ])
    },
    mounted() {
      if(this.interval) {
        clearInterval(this.interval)
        this.interval = null
      }
    },
    methods: {
      ...mapMutations([
        'saveLogin',
        ]), 
      getMobile() {
        console.log("获取验证码")
        if(this.waiting) {
          console.log("正在读秒")
          return false
        }
        if(this.validateMobile()) {
          console.log("获取验证码")
          getVerifyCode(this.phoneNum, "11", "13", 'string')
          .then( res => {
            if(res.status === 200) {
              this.waiting = false
              this.leftCount = this.totalCount
              this.buttonText = this.leftCount + 'S'
              this.interval = setInterval(()=>{
                this.leftCount--
                if(this.leftCount > 0) {
                  this.buttonText = this.leftCount + 'S'
                } else {
                  this.waiting = false
                  this.buttonText = "获取验证码"
                  clearInterval(this.interval)
                  this.interval = null
                }
              }, this.intervalGap)              
            } else if(res.status === 404) {
              this.$vux.alert.show({
                title: "该业务不支持验证码",
              })               
            } else if(res.status === 409) {
              this.$vux.alert.show({
                title: "该手机号已注册，请使用其他手机号",
              })                
            } else if(res.status === 429) {
              this.$vux.alert.show({
                title: "验证码发送太频繁，请稍候再试",
              })                    
            }
          })

        }
      },
      loginFn() {
        if(this.validateForm()) {
          console.log(this.$store.state)
          //明文传输accessToken, 危险操作
          bindMobile(this.phoneNum, this.phoneCode, this.accessToken, this.openId)
          .then(res => {
            console.log(res)
            this.saveLogin(res.body)
            this.$router.push('participate')            
          }, res => {
            if(res.status === 410) {
              this.$vux.alert.show({
                title: "验证码错误",
                content: "请检查是否输入错误，或者重新获取验证码",
              })               
            } else if(res.status === 409) {
              this.$vux.alert.show({
                title: "手机号码重复",
                content: "改手机号已被其他微信绑定，请更换手机号",
              }) 
            } else {
              this.$vux.alert.show({
                title: "保存失败",
                content: res.body,
              })               
            }
          })
        }
      },
      validateForm() {
        if(!this.validateMobile()) {
          console.log("手机验证未通过")
          return false
        }
        if(!this.phoneCode) {
          this.$vux.toast.text('验证码不能为空')    
          return false    
        }
        return true
      },
      validateMobile() {
        if(!this.phoneNum) {
          this.$vux.toast.text('手机号码不能为空') 
          return false
        } else if(!validator.telephone(this.phoneNum)) {
          this.$vux.toast.text('请输入正确的手机号码')
          return false         
        }   
        return true     
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/base.less";
  .login-wrap{
    .setWh(100%, 100%);
    color: #fff;
    position: relative;
    .login-head{
      .setWh(100%, 1266 /(1266+ 750) * 100%);
      .setBg("login_bg.png");
    }
    .login-con{
      width: 90%;
      position: absolute;
      bottom: 281 /(1266+ 750) * 100%;
      left: 0;
      right: 0;
      margin: 0 auto;
      text-align: center;
      .form{
        padding: 40 /3px;
        background-color: #fff;
        border-radius: 16 / 3px;
      }
      input{
        background-color: #eee;
        height: 40px;
        border-radius: 16 / 3px;
        padding-left: 20 / 3px;
        color: #8F9EB6;
        font-size: 15px;
      }
      .phone-num{
        width: 100%;
        margin-bottom: 40 / 3px;
      }
      .get-phone-code{
        display: flex;
        .phone-code{
          flex: 1;
        }
        button{
          margin-left: 40 / 3px;
          border-radius: 16 / 3px;
          color: #fff;
          .setBtn(280 / 3px, 40px, #FF9C00);
          font-size: 15px;
        }
      }
      p{
        font-size: 14px;
      }
      .form-btn{
        width: 100%;
        margin-top: 50 / 3px;
        margin-bottom: 40 / 3px;
        .submit-wrap{
          display: block;
          height: 140 / 3px;
          width: 100%;
          background-color: #fff;
          box-shadow: 0 10px 20px 0 rgba(0,0,0,0.15);
          border-radius: 16 / 3px;
          button{
            width: 100%;
            .setBtn(100%, 140 / 3px, #fff);
            font-size: 15px;
            color: #00B3D5;
            border-radius: 16 / 3px;
          }
        }
      }
    }
    .login-footer{
      .setBoxWhb(100%, 100% - 1266 /(1266+ 750) * 100%, #00B3D5);
    }
  }
</style>
