<template>
  <div class="join-success">
    <div class="img-con"></div>
    <div class="color-5E7496">恭喜您报名成功</div>
    <div class="color-3F4B5C margin-top">关注公众号可跟踪活动最新进展并了解更多帕金森资讯</div>
    <div class="btn-FF9C00">请点击我</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
  .join-success{
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #fff;
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100% ;
    background-color: #F3F3F3;
    .color-5E7496{
      color: #5E7496;
      font-family: PingFangSC-Light;
    }
    .color-3F4B5C{
      color: #3F4B5C;
    }
    .margin-top{
      margin: 50px 0 20px;
    }
    .btn-FF9C00{
      width: 360 / 3px;
      height: 100 /3px;
      background-color: #FF9C00;
      line-height: 100 /3px;
      margin: 0 auto;
      border-radius: 8 / 3px;
    }
    .img-con{
      width: 676 / 3px;
      height: 565 / 3px;
      margin: 340 / 3px auto 80/ 3px;
      background: url("../../../assets/img/apply_icon_success.png") no-repeat;
      background-size: cover;
    }
  }
</style>