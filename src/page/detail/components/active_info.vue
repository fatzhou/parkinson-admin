<template>
  <div class="active-info clear">
    <div class="clear active-info-content">
      <span class="f-l title">活动信息</span>
      <span class="icon-unfold f-r" @click="changeUnfoldStyle" :class="{active: isShowUnfold}"></span>
    </div>
    <div class="active-info-fold" :class="{active: isShowUnfold}">
      <ul class="icon-con">
        <li><span class="icon1"></span></li>
        <li><span class="icon2"></span></li>
        <li><span class="icon3"></span></li>
        <li><span class="icon4"></span></li>
      </ul>
      <ul class="right">
        <li>2017-11-11 至 2017-11-17</li>
        <li>深圳市帕金森患者协会</li>
        <li>广东省深圳市南山区科技园</li>
        <li>13456789012</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShowUnfold: false
      }
    },
    methods: {
      changeUnfoldStyle() {
        this.isShowUnfold = !this.isShowUnfold;
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../assets/css/base.less";

  .active-info{
    padding: 10px 13.33333333px 0;
    background-color: #fff;
    margin-bottom: 20 / 3px;
    .active-info-content{
      padding-bottom: 10px;
      position: relative;
      .title{
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #3C485A;
      }
      .icon-unfold{
        position: absolute;
        right: 0;
        top:-9px;
        .setWh(127/ 3px, 33px);
        display: inline-block;
        &:after{
          content: "";
          display: inline-block;
          .setWh(54 / 3px, 31/3px);
          .setBg("apply_icon_down.png");
          position: absolute;
          margin-top: 14px;
          right: 0;
          transition: all, 0.5s;
          transform: rotate(0deg);
        }
        &.active {
          &:after{
            transform: rotate(180deg);
          }
        }
      }
    }
    .active-info-fold{
      
      display: flex;
      overflow: hidden;
      height: 0;
      transition: all, 0.5s;
      &.active {
        border-top: 1px solid #93A2B9;
        height: 200px;
      }
      .icon-con,.right{
        li{
          width: 100%;
        }
      }
      .icon-con{
        margin-right: 40 / 3px;
        li{
          width: 22px;
          height: 22px;
          padding: 40 / 3px 0;
          .icon1 {
            display: inline-block;
            .setWh(22px, 22px);
            .setBg("apply_icon_time.png");
          }
          .icon2 {
            display: inline-block;
            .setWh(22px, 22px);
            .setBg("apply_icon_organization.png");
          }
          .icon3 {
            display: inline-block;
            .setWh(52 / 3px, 22px);
            .setBg("apply_icon_location.png");
          }
          .icon4 {
            display: inline-block;
            .setWh(62 / 3px, 22px);
            .setBg("apply_icon_phone.png");
          }
        }
      }
      .right{
        flex: 1;
        font-family: PingFangSC-Regular;
        font-size: 48 / 3px;
        color: #5A7193;
        letter-spacing: 0;
        li{
          line-height: 147 / 3px;
          border-bottom: 1px solid #93A2B9;
          &:last-child{
            border-bottom: none;
          }
        }
      }
    }
  }
</style>