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
          <button>获取验证码</button>
        </label>
      </div>
      <div class="form-btn">
        <label class="submit-wrap">
          <button class="submit" v-on:click="loginFn()">提交</button>
        </label>
      </div>
      <p class="">* 完成号码绑定才可参与帕友活动</p>
    </div>
    <div class="login-footer"></div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        phoneNum: "",
        phoneCode: ""
      }
    },
    computed: {

    },
    methods: {
      loginFn() {
        if(!this.phoneNum || !this.phoneCode) {
          console.log('输入不能为空')
        }else{
          this.$store.commit('saveLogin')
          this.$router.push({path: "home"})
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/base.less";
  .login-wrap{
    .setwh(100%, 100%);
    color: #fff;
    position: relative;
    .login-head{
      .setwh(100%, 1266 /(1266+ 750) * 100%);
      background: url("login_bg.png") 0 0 no-repeat;
      background-size: cover;
    }
    .login-con{
      width: 948 / 3px;
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
        .set-font(15px, @PingFangSCLight);
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
          .set-btn(280 / 3px, 40px, #FF9C00);
          .set-font(15px, @PingFangSCLight);
        }
      }
      p{
        .set-font(42 / 3px, @PingFangSCRegular);
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
            .set-btn(100%, 140 / 3px, #fff);
            .set-font(15px, @PingFangSCRegular);
            color: #00B3D5;
            border-radius: 16 / 3px;
          }
        }
      }
    }
    .login-footer{
      .set-box-whb(100%, 100% - 1266 /(1266+ 750) * 100%, #00B3D5);
    }
  }
</style>
