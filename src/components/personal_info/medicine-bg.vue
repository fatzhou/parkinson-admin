<template>
  <div class="medicine-bg">
    <div class="item">
      <div class="item-tile">
        <span class="icon good-at-icon"></span>
        <span>擅长及诊所介绍</span>
      </div>
      <div class="input-text">
        <textarea  rows="" cols="" placeholder="请输入擅长及诊所介绍"></textarea>
      </div>
    </div>
    <div class="item">
      <div class="item-tile">
        <span class="icon education-icon"></span>
        <span>医学教育背景介绍</span>
      </div>
      <div class="input-text">
        <textarea  rows="" cols="" placeholder="请输入擅长及诊所介绍"></textarea>
      </div>
    </div>
    <div class="item">
      <div class="item-tile">
        <span class="icon winning-icon"></span>
        <span>学术研究成果，获奖介绍</span>
      </div>
      <div class="input-text">
        <textarea  rows="" cols="" placeholder="学术研究成果，获奖介绍"></textarea>
      </div>
    </div>
    <div class="item-btn">
      <a href="javascript:;" class="a-btn">上一步</a>
      <!-- <router-link class="a-btn">上一步</router-link> -->
      <!-- <router-link class="a-btn">提交</router-link> -->
      <a href="javascript:;" class="a-btn">提交</a>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/base.less";
  .setbg(@url) {
    background: url(@url) no-repeat;
    background-size: cover;
  }
  .medicine-bg{
    font-family: PingFangTC-Regular;
    font-size: 48/3px;
    color: #465162;
    .item{
      margin-bottom: 20 /3px;
      background-color: #fff;
      padding-left: 40 / 3px;
      &:first-child{
        margin-top: 20 /3px;
      }
      &:last-first{
        margin-bottom: 0;
      }
      .item-tile{
        padding-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #E5E6E9;
        .icon{
          margin-right: 40 / 3px;
          display: inline-block;
          vertical-align: middle;
          .setwh(22px, 22px);
          &.good-at-icon{
            .setbg("../../assets/img/personal_icon_good_at.png");
          }
          &.education-icon{
            height: 62 / 3px;
            .setbg("../../assets/img/personal_icon_education.png");
          }
          &.winning-icon {
            width: 64 / 3px;
            .setbg("../../assets/img/personal_icon_winning.png");
          }
        }
      }
      .input-text{
        padding-left: 106 / 3px;
        padding-top: 36 / 3px;
        textarea{
          font-size: 42/3px;
          color: #C3CBD8;
          height: (156 + 59) / 3px;
        }
      }
    }
    .item-btn{
      margin: 0 auto;
      margin-top: 144 / 3px;
      width: (420 * 2 + 62)/3px;
      display: flex;
      .a-btn{
        width: 420 / 3px;
        margin-right: 63 / 3px;
        background: #00B3D5;
        border-radius: 16/3px;
        color: #fff;
        line-height: 40px;
        text-align: center;
        &:last-child{
          flex: 1;
          margin-right: 0;
        }
      }
    }
  }
</style>
