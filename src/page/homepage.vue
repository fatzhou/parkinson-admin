<template>
  <div class="home">
    <list v-if="message.length > 0" :obj="{message}"></list>
    <homenodata v-else></homenodata>
  </div>
</template>

<script>
  import list from "../components/list/list"
  import homenodata from "../components/home/homeNoData"
  export default {
    data () {
      return {
        hasData: 1,
        message: []
      }
    },
    components: {
      homenodata,
      list
    }
  }
</script>

<style lang="less" scoped>
  .home{
    width: 100%;
    height: 100%;
  }
</style>
