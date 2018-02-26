<template>
  <div class="participate-detail">
    <div v-show="!isShowSuccess">
      <div class="danger-info margin-b20">
        距离报名截止时间还剩 <span class="countdown-end">00:12:13</span>
      </div>
      <div class="title-info margin-b20 item">
        <div class="img-banner"></div>
        <h2 class="title">这里是一个标题这里是一个标题这里是一个标题这里是一个标题</h2>
        <div class="clear title-info-bottom">
          <div class="creation-time f-l">创建时间：2017-11-11 11:00</div>
          <!-- <div class="show f-r text-yellow">分享</div> -->
          <div class="f-r enter-num">已报名：<span class="taotal-num text-yellow">20</span>/30</div>
        </div>
      </div>
      <div class="active-info">
        <activeInfo></activeInfo>
      </div>
      <div class="record item margin-b20">
        <div class="recold-top"><span class="title">报名记录  &nbsp;</span>
        (报名<span class="taotal-num text-yellow">20</span>人，剩余名额<span class="space-left text-yellow">10</span>人)
        </div>
        <div class="join-picture clear" ref="joinPicture">
          <scrollX></scrollX>
        </div>
      </div>
      <div class="active-dec item margin-b20">
        <h2 class="title">活动描述</h2>
        <div class="text-dec">
          <p>1.这里是一段文字描述，这里是一段文字描述，这里是一段文字描述，这里是一段文字描述。</p>
          <p>1.这里是一段文字描述，这里是一段文字描述，这里是一段文字描述，这里是一段文字描述。</p>
          <p>1.这里是一段文字描述，这里是一段文字描述，这里是一段文字描述，这里是一段文字描述。</p>
        </div>
      </div>
      
    </div>
    <joinSuccess v-show="isShowSuccess"></joinSuccess>
    <div class="bottom-btn" v-show="!isShowSuccess">
      <div class="wrap clear">
        <div class="cancel-active f-l">帕友之家</div>
        <div class="edit-con f-r" v-on:click="changeDate">我要报名</div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  import joinSuccess from "./components/join_success"
  import scrollX from "../../components/scrollx"
  import activeInfo from "./components/active_info"

  export default {
    data () {
      return {
        isShowSuccess: false
      }
    },

    created () {
      this.$nextTick(() => {
        this._initScroll()
      })
      
    },
    methods: {
      _initScroll() {
        this.scroll = new BScroll(this.$el, {
          click: true
        })
      },
      changeDate() {
        this.isShowSuccess = true
        console.log(this.isShowSuccess)
      },
      changeUnfoldStyle() {
        this.isShowUnfold = !this.isShowUnfold;
      }
    },
    components: {
      joinSuccess,
      scrollX,
      activeInfo
    }
  };
</script>

<style lang='less' scoped>
@import "../../assets/css/base.less";
  .participate-detail{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 50px;
    width: 100%;
    overflow: hidden;
    .title{
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #3C485A;
    }
    .title-info {
      h2 {
        line-height: 67 / 3px;
      }
      .img-banner{
        width: 100%;
        height: 520 / 3px;
        margin-bottom: 10px;
      }
      .title-info-bottom{
        margin-top: 34 /3px;
      }
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
    .record{
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #002F00;
      .recold-top{
        /*line-height: 127 /3px;*/
        margin-bottom: 10px;
      }
      .join-picture{
        position: relative;
        height: 40px;
        width: 100%;
        overflow: hidden;
        border-top: 1px solid #93A2B9;
        padding-top: 10px;
        .picture-scroll{
          width: 40 * 13px;
          position: absolute;
        }
        .img-item{
          float: left;
          width: 40px;
          height: 40px;
          background-color: #eee;
          border-radius: 50%;
          margin-right: 10px;
          &:last-child{
            margin-right: 0;
          };
        }
      }
    }
    .enter-num{
      font-family: PingFangSC-Regular;
      font-size: 42 / 3px;
      color: #3C485A;
      letter-spacing: 0;
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
  .active-info{
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
    font-size: 16px;
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
  .active-dec{
    .title{
      margin-bottom: 10px;
    }
    .text-dec{
      font-family: PingFangSC-Light;
      font-size: 42 / 3px;
      color: #5E7496;
      line-height: 72 / 3px;

      border-top: 1px solid #93A2B9;
      padding-top: 10px;
    }
  }
</style>