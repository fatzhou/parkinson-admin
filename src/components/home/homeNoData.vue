<template>
  <div class="no-join">
    <div class="no-join-icon"></div>
    <p>您还未参加过帕友活动哦</p>
    <div class="attention-word">
      <p>快召集帕友来参加活动吧！</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@import "../../assets/css/base.less";
  .setbg(@url) {
    background: url(@url) no-repeat;
    background-size: cover;
  }
  .no-join{
    text-align: center;
    font-size: 16px;
    color: #5E7496;
    .attention-word{
      .set-box-whb(769 / 3px, 40px, #4B5667);
      border-radius: 4px;
      /*width: 61.92%;*/
      line-height: 40px;
      color: #fff;
      margin: 0 auto;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 68px;
      &:after{
        content: '';
        overflow: hidden;
        border: 9px solid #4B5667;
        border-color: #4B5667 #F3F3F3;
        border-width: 9px 9px 0 9px;
      }
    }
    .no-join-icon{
      .setbg("home_icon_default.png");
      .setwh(676 / 3px, 602 / 3px);
      margin: 303 / 3px auto 80 / 3px;
    }
  }
</style>
