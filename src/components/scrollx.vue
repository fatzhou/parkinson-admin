<template>
    <div class="horMenu" ref="viewport">
      <div class="scroll-wrap" ref="scrollContent">
        <div class="scroll-content" >
          <div class="item" v-for="item in items"></div>
        </div>
      </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      items: 20
    }
  },
  created () {
    this.$nextTick(() => {
      this._initScroll()
      this._initListItem()
    })

  },
  methods: {
    _initListItem() {
      const scrollContent = this.$refs.scrollContent;
      scrollContent.style.width = this.items * 50 - 10 + "px";
    },
    _initScroll() {
     this.scrollX = new BScroll(this.$refs.viewport, {
      click: true,
      scrollX: true
    })
   }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
  .horMenu{
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 40px;
    .scroll-wrap {
      position: absolute;
      .scroll-content{
        .item{
          float: left;
          width: 40px;
          height: 40px;
          background-color: #eee;
          border-radius: 50%;
          margin-right: 10px;
          &:last-child{
            margin-right: 0;
          };
        }
      }
    }
  }
</style>

