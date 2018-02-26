<template>
  <div class="details">
    <div>
      <div class="danger-info margin-b20">
        距离报名截止时间还剩 <span class="countdown-end">00:12:13</span>
      </div>
      <div class="title-info margin-b20 item">
        <h2 class="title">这里是一个标题这里是一个标题这里是一个标题这里是一个标题</h2>
        <div class="clear title-info-bottom">
          <div class="creation-time f-l">创建时间：2017-11-11 11:00</div>
          <div class="show f-r text-yellow">分享</div>
        </div>
      </div>
      <div class="active-info">
        <activeInfo></activeInfo>
      </div>
      <div class="record item margin-b10">
        <span class="title">报名记录  &nbsp;</span>
        (报名<span class="taotal-num text-yellow">20</span>人，剩余名额<span class="space-left text-yellow">10</span>人)
      </div>
      <div class="no-enter">
        <div class="img-wrap"></div>
        <div class="desc-text">目前还没有帕友报名</div>
      </div>
    </div>
    <div class="bottom-btn">
      <div class="wrap clear">
        <div class="cancel-active f-l">取消活动</div>
        <div class="edit-con f-r">编辑内容</div>
      </div>
    </div>
  </div>
</template>

<script>
  import activeInfo from "./active-info"
  import BScroll from "better-scroll"
  export default {
    data () {
      return {
        isShowSuccess: true
      }
    },

    created () {
      this.$nextTick(() => {
        this._initScroll()
        this._ajudgeBottom()
      })
      
    },
    methods: {
      _initScroll() {
        this.scroll = new BScroll(this.$el, {
          click: true
        })
      },
      _ajudgeBottom() {
        if(this.$el.offsetHeight > window.innerHeight - 50){
          // this.$el.style.bottom = 50 + "px"
        }
      }
    },
    components: {
      activeInfo
    }
  };
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
  .details{
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    height: 100%;
    bottom: 50px;
    /* z-index: 1000;*/
    overflow: hidden;
    .title{
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #3C485A;
    }
    .margin-b20{
      margin-bottom: 20 / 3px;
    }
    .margin-b10{
      margin-bottom: 10 / 3px;
    }
    .bg-white{
      background-color: #fff;
    }
    .item{
      background-color: #fff;
      padding: 10px 40 /3px 11px;
    }
    .title-info-bottom{
       margin-top: 34 /3px;
    }
    .creation-time{
      font-family: PingFangSC-Light;
      font-size: 42 /3px;
      color: #465162;
    }
    .text-yellow{
      font-family: PingFangSC-Regular;
      font-size: 48 / 3px;
      color: #FF9C00;
    }
    .active-info{
     
    }
   
    .record{
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #002F00;
    }
    .no-enter {
/*      .setWh(100%, 1250 / 3px / 736 * 100%);
      .setWh(100%, 1250px);*/
      padding-top: 187 / 3px;
      padding-bottom: 216 / 3px;
      text-align: center;
      background-color: #fff;
      .img-wrap {
        .setWh(676 / 3px, 602 / 3px);
        .setBg("apply_icon_default.png");
        margin: 0 auto;
      }
      .desc-text {
        margin-top: 80 / 3px;
        font-size: 48 / 3px;
        color: #5E7496;
        letter-spacing: 0;
      }
    }
  }
  .danger-info{
    background-color: #FFE6E2;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 42 /3px;
    color: #D62137;
    line-height: 100 / 3px;
  }
  .bottom-btn{
    position: fixed;
    bottom: 0;
    z-index: 99999;
    width: 100%;
    background: #FFF;
    box-shadow: 0 -1px 0 0 #A7ACB4;
    text-align: center;
    color: #fff;
    .wrap{
      padding: 25 / 3px 100 / 3px;
    }
    .cancel-active, .edit-con{
      border-radius: 8px;
      width: 360 /3px;
      height: 100 / 3px;
      line-height: 100 / 3px;
    }
    .cancel-active{
      background: #FF9C00;
    }
    .edit-con{
      background: #00B3D5;
    }
  }
</style>
