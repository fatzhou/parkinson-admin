<template>
  <div class="head">
    <div class="item active"><span class="icon-circle">1</span>基本资料</div>
    <div class="item"><span class="icon-circle">2</span>医学背景</div>
    <div class="item-center">
     <svg width="15" height="58" xmlns="http://www.w3.org/2000/svg">
       <g>
        <title>background</title>
        <rect fill="#fff" id="canvas_background" height="60" width="17" y="-1" x="-1"/>
        <g display="none" id="canvasGrid">
         <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%" id="svg_1"/>
       </g>
     </g>
     <g>
      <title>Layer 1</title>
      <path id="svg_1" d="m8.96491,29.12953l-7.9505,-28.62397l5.23604,0l7.9505,28.62397l-7.9505,28.62394l-5.23604,0l7.9505,-28.62394z" stroke-width="1.5" fill="#ffffff"/>
    </g>
  </svg>
</div>
</div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
  .head{
    display: flex;
    color: #fff;
    margin-bottom: 20 / 3px;
    position: relative;
    .item{
      flex: 1;
      text-align: center;
      line-height: 170 / 3px;
      background: #B2BCCD;
      &.active{
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
    .item-center{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 40 / 3px;
      height: 170 / 3px;
      .setBg("../../assets/img/header-banner.png");
      margin: 0 auto;
    }
  }
</style>
