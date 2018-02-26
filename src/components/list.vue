<template>
  <div class="list-wrap" v-show="list && list.length > 0">
    <div class="list-content" v-show="!isShowDetails" v-for="(item,index) in list">
      <div class="item">
        <div class="item-title clear">
          <span class="f-l title">{{item.title}}</span>
          <span class="next-icon f-r" v-on:click="checkDetails(index)"></span>
          <span class="text-enter f-r" 
                :class="{'active': (item.status == 0 ? true : false), 'default': (item.status == 2 ? true : false), 'cancel': (item.status == 1 ? true : false)}">
                {{statusDesc[item.status]}}
          </span>
        </div>
        <div class="item-con clear">
          <div class="icon-enter f-l" :class="{'active': (item.status != 2 ? true : false), 'default': (item.status == 2 ? true : false)}"></div>
          <span>{{item.name}}</span>
          <span class="f-r">{{item.time}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    data () {
      return {
        isShowDetails: false,
        isActive: false,
        statusDesc: ["已报名", "活动取消", "活动完结"],
        iconStyle: {
          "active": true,
          "default": ""
        },
        pageData: null
      }
    },
    props: {
      list: {
        types: Array,
      },
    },
    created () {
      // this.$nextTick(() => {
      //   this._initData()
      //   this._initScroll()
      // })
      
    },
    mounted () {
      this._initScroll()
    },
    computed: {
    },
    methods: {
      checkDetails(index) {
        this.$router.push({
          path: "/detailspage"
        })
        this.$route.params.id = index
      },
      changeIconStyle() {

      },
      _initScroll() {
        // this.scroll = new BScroll(this.$el, {
        //   click: true
        // })
      },
      saveListNum(index) {
        console.log(index)
      }
    },
    components: {
    }
  }
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
  .move-enter-active,
  .move-leave-active {
    transition: all 0.2s linear;
  }
  .move-enter,
  .move-leave-to {
    transform: translate3d(100%, 0, 0);
  }
  .list-wrap{
    .setWh(100%, 100%);
  }
  .list-content{
    padding-top: 40 /3px;
    margin-left: 40/3px;
    margin-right: 40/3px;
    .item{
      padding-left: 10px;
      padding-right: 10px;
      /*width: 1162 / 1242 * 100%;*/
      height: 276 / 3px;
      background-color: #fff;
      margin-top: 40 / 3px;
      border-radius: 16 / 3px;
      &:first-child{
        margin-top: 0;
      }
      .item-title{
        height: 127 / 3px;
        line-height: 127 / 3px;
        font-size: 16px;
        .setBorder1px(#A4A9B2, "bottom");
        /*border-bottom: 1px solid #A4A9B2;*/
        font-family: "PingFangSC-Medium";
        font-size: 16px;
        color: #3C485A;
        .title {
          max-width: 72%;
          overflow: hidden;
          text-overflow: ellipsis;
          height: 30px;
          white-space:nowrap;
        }
        @media only screen and (max-width: 360px){
            .title {
              max-width: 180px;
            }
        }
        .text-enter {
          &.active{
            color: #00c107;
          }
          &.default{
            color: #A7ACB4;
          }
          &.cancel{
            color: #D0021B;
          }
        }
        .next-icon{
          display: block;
          margin-left: 20 /3px;
          margin-top: 44 / 3px;
          .setWh(22 / 3px, 40 / 3px);
          .setBg("home_icon_next.png");
        }
      }
      .item-con{
        height: 147 / 3px;
        line-height: 147 / 3px;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #5A7193;
        .icon-enter{
          .setWh(67/3px, 67 / 3px);
          margin-top: 40 / 3px;
          margin-right: 40 / 3px;
          &.active {
            .setBg("home_icon_label_s.png");
          }
          &.default {
            .setBg("home_icon_label_n.png");
          }
        }
      }
    }
  }
</style>
