<template>
  <div class="participate-detail">
    <div>
      <div class="danger-info margin-b20">
        距离报名截止时间还剩 <span class="countdown-end">00:12:13</span>
      </div>
      <div class="title-info margin-b20 item">
        <h2 class="title">这里是一个标题这里是一个标题这里是一个标题这里是一个标题</h2>
        <div class="clear title-info-bottom">
          <div class="creation-time f-l">创建时间：2017-11-11 11:00</div>
          <div class="show f-r text-yellow"><span class="show-icon"></span>分享</div>
        </div>
      </div>
      <div class="active-info">
        <activeInfo></activeInfo>
      </div>
      <div class="record item margin-b10">
        <div class="recold-top"><span class="title">报名记录  &nbsp;</span>
        (报名<span class="taotal-num text-yellow">20</span>人，剩余名额<span class="space-left text-yellow">10</span>人)
        </div>
      </div>
      <participaterData v-if="isParticipaterData"></participaterData>
      <participaterNoData v-else></participaterNoData>
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
  import BScroll from "better-scroll"
  import joinSuccess from "./join-success"
  import activeInfo from "./active-info"
  import participaterData from "./organister_has_data"
  import participaterNoData from "./organister_no_data"

  export default {
    data () {
      return {
        isParticipaterData: true
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
      changeUnfoldStyle() {
        this.isShowUnfold = !this.isShowUnfold;
      }
    },
    components: {
      joinSuccess,
      scrollX,
      activeInfo,
      participaterData,
      participaterNoData
    }
  };
</script>

<style lang='less' scoped>
  @import "../../assets/css/base.less";
  .setbg(@url) {
    background: url(@url) no-repeat;
    background-size: cover;
  }
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
      .title-info-bottom{
        margin-top: 34 /3px;
        
        .creation-time{
          font-size: 42 /3px;
          line-height: 24px;
          color: #465162;
        }
        .show{
          line-height: 24px;
          .show-icon{
            display: inline-block;
            /*padding-top: 10px;*/
            position:relative;
            padding-right: 20 / 3px;
            &:after{
              display: inline-block;
              .setwh(22px, 22px);
              .setbg("apply_icon_share.png");
              content: "";
              position: relative;
              top: 4px;
            }
          }
        }
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
        /*margin-bottom: 10px;*/
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
