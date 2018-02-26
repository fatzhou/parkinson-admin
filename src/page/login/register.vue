<template>
  <div class="register-wrap">
    <div class="form-wrap">
      <ul class="icon-con">
        <li><span class="icon-phone icon"></span></li>
        <li><span class="icon-verification icon"></span></li>
        <li><span class="icon-password icon"></span></li>
      </ul>
      <div class="form-con">
        <div class="item">
          <input type="text" class="phone-num input-full" placeholder="请输入11位手机号码">
        </div>
        <div class="item">
          <input type="text" class="phone-code" placeholder="请输入4位验证码">
          <button>获取验证码</button>
        </div>
        <div class="item">
          <input type="text" class="password input-full" placeholder="请输入密码(6-10位数字或字母)">
        </div>
      </div>
    </div>
    <div class="register-check">
      <span class="icon-check" v-on:click="changeIconCheckStyle" v-bind:class="isIconCheckClass"></span>
      <span>我同意</span>
      <span class="check-protocol">《医动力软件许可及服务协议》</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isIconCheckActive: false
      }
    },
    computed: {
      isIconCheckClass: function() {
        return {
          "active": this.isIconCheckActive
        }
      }
    },
    methods: {
      changeIconCheckStyle() {
        this.isIconCheckActive = !this.isIconCheckActive
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/base.less";

  .register-wrap{
    margin: 40 / 3px;
    background-color: #fff;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 280 / 3px;
    border-radius: 16 / 3px;
    .form-wrap{
      display: flex;
      font-family: PingFangTC-Light;
      font-size: 42 / 3px;
      color: #ADB8CA;
      letter-spacing: 0;
      .form-con{
        flex: 1;
        .item{
          height: 167 / 3px;
          line-height: 167 / 3px;
          border-bottom: 1px solid #C9CCD1;
          &:nth-of-type(2){
            display: flex;
          }
          button{
            width: 290 / 3px;
            height: 30px;
            background: #FF9C00;
            border-radius: 49 / 3px;
            color: #fff;
            margin-top: 40 / 3px;
            font-family: PingFangTC-Regular;
          }
          input{
            color: #ADB8CA;
          }
        }
        .phone-code{
          flex: 1;
        }
      }
      .icon-con{
        li{
          height: 167 / 3px;
        }
        .icon{
          width: 52 / 3px;
          height: 22px;
          display: inline-block;
          margin-right: 44 / 3px;
          margin-top: 50 / 3px;
        }
        .icon-phone{
          .setBg("registered_icon_phone.png");
        }
        .icon-verification{
          width: 22px;
          .setBg("registered_icon_Verification_code.png");
        }
        .icon-password{
          width: 58 / 3px;
          .setBg("registered_icon_password.png");
        }
      }
      .input-full{
        width: 100%;
        height: 100%;
      }
    }
    .register-check{
      margin-top: 40 / 3px;
      font-family: PingFangTC-Light;
      font-size: 36 /3px;
      color: #4B5667;
      letter-spacing: 0;
      .icon-check{
        display: inline-block;
        margin-right: 42 / 3px;
        position: relative;
        margin-left: 10 / 3px;
        &:after {
          position: relative;
          top: 2px;
          display: inline-block;
          content: "";
          width: 44 / 3px;
          height: 44 / 3px;
          .setBg("registered_icon_not_selected.png");
        }
        &.active {
          &:after {
            .setBg("registered_icon_checked.png");
          }
        }
      }
      .check-protocol{
        color: #3cb6d8;
      }
    }
  }
</style>