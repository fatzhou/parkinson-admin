<template>
  <div class="add-active">
    <div class="content">
      <div class="item" @click="showNonActive">
        <div class="item-dec">敬请期待...</div>
        <div class="item-img"></div>
        <div class="item-tab">创建投票</div>
      </div>
      <div class="item" @click="createActive">
        <div class="item-img"></div>
        <div class="item-tab">创建活动报名</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      showNonActive() {
        this.$vux.toast.text('功能正在加紧开发中，敬请期待！')   
      },
      createActive() {
        this.$router.push('edit')
      }
    }
  }
</script>

<style lang="less" scoped>
@import "../../assets/css/base.less";
  .add-active{
    .setBoxWhb(100%, 100%, rgba(0,0,0,0.70));
    position: relative;
    height: 100%;
    .content{
      position: absolute;
      bottom: 330 / 3px;
      width: 100%;
      .item{
        /*font-family: PingFangSC-Regular;*/
        .setBoxWhb(948 / 3px, 550 / 3px,  #fff);
        border-radius: 16 / 3px;
        margin: 0 auto;
        text-align: center;
        overflow: hidden;
        &:first-child{
          margin-bottom: 110 / 3px;
          .item-img{
            .setWh(415 / 3px, 322 / 3px);
            margin-bottom: 32 / 3px;
            .setBg("apply_icon_coming_soon.png");
          }
        }
        &:last-child{
          .item-img{
            margin-top: 62 /3px;
            margin-bottom: 0;
            margin-left: 80 / 3px;
            margin-right: 80 / 3px;
            height: 361 / 3px;
            .setBg("apply_icon_create_an_event.png");
          }
        }
        .item-dec{
          font-size: 36 / 3px;
          color: #4B5667;
          padding-top: 35 /3px;
        }
        .item-img{
          margin: 0 auto;
        }
        .item-tab{
          border-top: 1px solid #93A2B9;
          font-size: 16px;
          color: #FF9C00;
          line-height: 123 / 3px;
        }
        .item-tab:last-child{

        }
      }
    }
  }
</style>
