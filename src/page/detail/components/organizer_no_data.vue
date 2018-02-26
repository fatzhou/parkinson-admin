<template>
  <div class="no-enter" v-else>
    <div class="img-wrap"></div>
    <div class="desc-text">目前还没有帕友报名</div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
@import "../../../assets/css/base.less";
  .no-enter {
    padding-top: 187 / 3px;
    padding-bottom: 216 / 3px;
    text-align: center;
    background-color: #fff;
    .img-wrap {
      width: 676 / 3px;
      height: 602 / 3px;
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
</style>