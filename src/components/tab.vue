<template>
	<div class="tab">
      <router-link class="tab-item" to="participate">
        <div class="icon1">
        </div>
        <p>我的参加</p>
      </router-link>

      <router-link class="tab-item" to="create">
        <div class="add-icon"></div>
      </router-link>

      <router-link class="tab-item" to="organize">
        <div class="icon2"></div>
        <p>我的发起</p>
      </router-link>
    </div>
</template>

<style lang="less" scoped>
  @import "../assets/css/base.less";
	.tab{
      .setBoxWhb(100%, 50px, #fff);
      .setBorder1px(#A7ACB4, "top");
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      text-align: center;
      z-index: 999;
      color: #3C485A;
      .tab-item{
        flex: 1;
        font-size: 15px;
        .icon1, .icon2 {
          .setWh(19px, 22px);
          margin: 6px auto 0px;
        }
        .icon1 {
          .setBg("home_icon_participation_n.png")
        }
        .icon2 {
          .setBg("home_icon_me_n.png")
        }
        .add-icon{
          .setWh(40px, 40px);
          margin: 5px auto;
          .setBg("home_icon_add.png");
          transition: all, transform 0.5s;
          transform: rotate(0deg);
        }
        &.router-link-active {
          .add-icon{
            transform: rotate(45deg);
          }
          .icon1 {
            .setBg("home_icon_participation_s.png")
          }
          .icon2 {
            .setBg("home_icon_me_s.png")
          }
        }
        a{
          color: #3C485A;
        }
      }
    }
</style>