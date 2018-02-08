<template>
  <div class="head">
    <div class="item active"><span class="icon-circle">1</span>基本资料</div>
    <div class="item"><span class="icon-circle">2</span>医学背景</div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  .head{
    display: flex;
    color: #fff;
    margin-bottom: 20 / 3px;
    .item{
      flex: 1;
      text-align: center;
      line-height: 170 / 3px;
      background: #B2BCCD;
    }
    .item.active{
      background: #FF9C00;
      .icon-circle{
        background: #D07F00;
      }
    }
    .icon-circle{
      display: inline-block;
      margin-top: 62 / 3px;
      margin-right: 40 / 3px;
      width: 50 / 3px;
      height: 50 / 3px;
      line-height: 50 / 3px;
      border-radius: 50%;
      background: #465162;
      font-size: 42 / 3px;
    }
  }
</style>
