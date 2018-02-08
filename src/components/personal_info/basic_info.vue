<template>
  <div class="basic-info">
    <div class="head-picture wrap clear">
      <span class="icon-head-pic icon f-l"></span>
      <span class="f-l">头像</span>
      <span class="img-con f-r"></span>
    </div>
    <div class="content wrap">
      <div class="item clear">
        <div class="icon f-l name-icon"></div>
        <div class="f-l input-desc">真实姓名</div>
        <div class="f-r"><input type="text" placeholder="请填写10个以内的汉字"></div>
      </div>
      <div class="item clear">
        <div class="icon f-l gender-icon"></div>
        <div class="f-l input-desc">
          性别
        </div>
        <div class="f-r sex">
          <span></span>
          <input type="radio" name="sex">男
          <input type="radio" name="sex">女
        </div>
      </div>
      <div class="item clear">
        <div class="icon f-l location-icon"></div>
        <div class="f-l input-desc">所在城市</div>
        <div class="f-r"><span></span>请选择所在城市</div>
      </div>
      <div class="item clear">
        <div class="icon f-l title-icon"></div>
        <div class="f-l input-desc">职称</div>
        <div class="f-r"><span></span>请选择职称</div>
      </div>
      <div class="item clear">
        <div class="icon f-l hospital-icon"></div>
        <div class="f-l input-desc">医院</div>
        <div class="f-r"><span></span>请选择医院</div>
      </div>
      <div class="item clear">
        <div class="icon f-l department-icon"></div>
        <div class="f-l input-desc">科室</div>
        <div class="f-r"><span></span>请选择科室</div>
      </div>
    </div>
    <div class="footer-btn">
      <a href="javascript:;" class="next-btn" v-on:click="showFn()">下一步</a>
    </div>
  </div>
</template>
<script>
import store from '@/store/index'
export default {
  data() {
    return {
      isShow: true
    }
  },
  components: {
  },

  methods: {
    showFn() {
      this.isShow = false;
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../assets/css/base.less";
  .setbg(@url) {
    background: url(@url) no-repeat;
    background-size: cover;
  }
  .set-holdplace-color(#C3CBD8);
  .basic-info{
    font-family: PingFangTC-Regular;
    font-size: 16px;
    .wrap{
      padding-left: 40 / 3px;
      padding-right: 40 / 3px;
    }
    .head-picture{
      // margin-top: 20 / 3px;
      margin-bottom: 20 / 3px;
      background-color: #fff;
      line-height: 230 / 3px;
      font-size: 48 / 3px;
      color: #465162;
      .icon{
        display: inline-block;
        margin-right: 40 / 3px;
        .setwh(22px, 22px);
        margin-top: 81 / 3px;
      }
      .icon-head-pic{
        .setbg("../../assets/img/material_personal_icon_avatar.png");
      }
      .img-con{
        .setwh(160 / 3px, 160 / 3px);
        background-color: #EDEDED;
        border-radius: 50%;
        margin-top: 35 / 3px;
      }
    }
    .content{
      background-color: #fff;
      .item{
        line-height: 187 / 3px;
        border-bottom: 1px solid #E5E6E9;
        &:last-child{
          border: none;
        }
        .icon{
          margin-right: 40 / 3px;
          .setwh(22px, 22px);
          margin-top: 20px;
          &.name-icon {
            width: 64 / 3px;
            .setbg("../../assets/img/personal_icon_name.png");
          }
          &.gender-icon {
            margin-top: 63 / 3px;
            height: 60 / 3px;
            .setbg("../../assets/img/personal_icon_gender.png");
          }
          &.location-icon {
            width: 54 / 3px;
            .setbg("../../assets/img/personal_icon_location.png");
          }
          &.title-icon {
            .setbg("../../assets/img/personal_icon_title.png");
          }
          &.hospital-icon {
            .setbg("../../assets/img/personal_icon_hospital.png");
          }
          &.department-icon{
            margin-top: 22px;
            height: 54 / 3px;
            .setbg("../../assets/img/personal_icon_department.png");
          }
        }
        .input-desc{
          font-size: 48 / 3px;
          color: #465162;
        }
      }
    }
    .footer-btn{
      margin-top: 40px;
      .next-btn{
        display: block;
        margin: 0 auto;
        background: #00B3D5;
        border-radius: 16/3px;
        width: 750 / 3px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        // font-family: PingFangTC-Regular;
        font-size: 48/3px;
      }
    }
  }
</style>
