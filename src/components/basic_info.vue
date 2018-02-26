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
        <div class="f-r input-con"><input type="text" placeholder="请填写10个以内的汉字"></div>
      </div>
      <div class="item clear">
        <div class="icon f-l gender-icon"></div>
        <div class="f-l input-desc">
          性别
        </div>
        <div class="f-r sex input-con">
          <span class="sex-item">
            <input type="radio" name="sex" class="input-radio" v-on:click="radioClass">
            <span class="male radio-icon" v-bind:class="radioClassFn"></span>
            男
          </span>
          <span class="sex-item">
            <input type="radio" name="sex" class="input-radio" v-on:click="radioClass">
            <span class="female radio-icon" v-bind:class="radioClassFn2"></span>
            女
          </span>
        </div>
      </div>
      <div class="item clear">
        <div class="icon f-l location-icon"></div>
        <div class="f-l input-desc">所在城市</div>
        <div class="f-r input-con">
          <select>
            <option>请选择所在城市</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
      </div>
      <div class="item clear">
        <div class="icon f-l title-icon"></div>
        <div class="f-l input-desc">职称</div>
        <div class="f-r input-con">
          <select>
            <option>请选择职称</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
      </div>
      <div class="item clear">
        <div class="icon f-l hospital-icon"></div>
        <div class="f-l input-desc">医院</div>
        <div class="f-r input-con">
          <select>
            <option>请选择医院</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
      </div>
      <div class="item clear">
        <div class="icon f-l department-icon"></div>
        <div class="f-l input-desc">科室</div>
        <div class="f-r input-con">
          <select>
            <option>请选择科室</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from '@/store/index'
export default {
  data() {
    return {
      isShow: true,
      toParentData: true,
      isRadioActive: true,
      radioClassData: {
        "active": "",
        "default": ""
      }
    }
  },
  components: {
  },
  computed: {
    radioClassFn: function() {
      return {
        "active": this.isRadioActive,
        "default": !this.isRadioActive
      }
    },
    radioClassFn2: function(){
      return {
        "active": !this.isRadioActive,
        "default": this.isRadioActive
      }
    }
  },

  methods: {
    showFn() {
      this.isShow = false;
    },
    radioClass() {
      this.isRadioActive = !this.isRadioActive
    },
    sendMsgToParent() {
      this.$emit("listenToChildEvent", !this.toParentData)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
  .setHoldplaceColor(#C3CBD8);
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
        .setWh(22px, 22px);
        margin-top: 81 / 3px;
      }
      .icon-head-pic{
        .setBg("../../assets/img/material_personal_icon_avatar.png");
      }
      .img-con{
        .setWh(160 / 3px, 160 / 3px);
        background-color: #EDEDED;
        border-radius: 50%;
        margin-top: 35 / 3px;
      }
    }
    .content{
      background-color: #fff;
      margin-bottom: 40px;
      .item{
        line-height: 187 / 3px;
        border-bottom: 1px solid #E5E6E9;
        &:last-child{
          border: none;
        }
        .input-con {
          font-family: PingFangTC-Regular;
          font-size: 48 / 3px;
          color: #CDD4DF;
          letter-spacing: 0;
          select {

          }
        }
        .sex{
          .sex-item{
            display: inline-block;
            position: relative;
            margin-right: 20px;
            .input-radio{
              position: absolute;
              left: 1px;
              top: 23px;
              display: inline-block;
              .setWh(22px, 22px);
              opacity: 0;
            }
            .radio-icon{
              display: inline-block;
              vertical-align: sub;
              background: #000;
              .setWh(22px, 22px);
              margin-right: 10px;
              &.default {
                .setBg("personal_icon_Unselected.png");
              }
              &.active {
                .setBg("personal_icon_checked.png");
              }
            }
            &:last-child{
              margin-right: 0;
            }
          }
        }
        .icon{
          margin-right: 40 / 3px;
          .setWh(22px, 22px);
          margin-top: 20px;
          &.name-icon {
            width: 64 / 3px;
            .setBg("personal_icon_name.png");
          }
          &.gender-icon {
            margin-top: 63 / 3px;
            height: 60 / 3px;
            .setBg("personal_icon_gender.png");
          }
          &.location-icon {
            width: 54 / 3px;
            .setBg("personal_icon_location.png");
          }
          &.title-icon {
            .setBg("personal_icon_title.png");
          }
          &.hospital-icon {
            .setBg("personal_icon_hospital.png");
          }
          &.department-icon{
            margin-top: 22px;
            height: 54 / 3px;
            .setBg("personal_icon_department.png");
          }
        }
        .input-desc{
          font-size: 48 / 3px;
          color: #465162;
        }
      }
    }
  }
</style>
