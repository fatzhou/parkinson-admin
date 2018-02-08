<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <div v-if="$route.name !== 'login'" class="tab">
      <router-link class="tab-item" to="/home">
        <div class="icon1">
        </div>
        <p>我的参加</p>
      </router-link>

      <router-link class="tab-item" to="/add">
        <div class="add-icon"></div>
      </router-link>

      <router-link class="tab-item" to="/initiate">
        <div class="icon2"></div>
        <p>我的发起</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  @import "assets/css/base.less";
  .setbg(@url){
    background: url(@url) no-repeat;
    background-size: cover;
  }
  .move-enter-active,
  .move-leave-active {
    transition: all 0.2s linear;
  }
  .move-enter,
  .move-leave-to {
    transform: translate3d(-100%, 0, 0);
  }
  #app {
    font-family: PingFangSC-Light,PingFangSC,'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .setwh(100%, 100%);
    .tab{
      .set-box-whb(100%, 50px, #fff);
      .border-1px(#A7ACB4, "top");
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
          .setwh(22px, 19px);
          margin: 9px auto 4px;
        }
        .icon1 {
          background: url("assets/img/home_icon_participation_n.png") 0 0 no-repeat;
          background-size: cover;
        }
        .icon2 {
          background: url("assets/img/home_icon_me_n.png") 0 0 no-repeat;
          background-size: cover;
        }
        .add-icon{
          .setwh(40px, 40px);
          margin: 5px auto;
          .setbg("assets/img/home_icon_add.png");
          transition: all, transform 0.5s;
          transform: rotate(0deg);
        }
        &.router-link-active {
          .add-icon{
            transform: rotate(45deg);
          }
          .icon1 {
            background: url("assets/img/home_icon_participation_s.png") 0 0 no-repeat;
            background-size: cover;
          }
          .icon2 {
            background: url("assets/img/home_icon_me_s.png") 0 0 no-repeat;
            background-size: cover;
          }
        }
        a{
          color: #3C485A;
        }
      }
    }
  }
</style>
