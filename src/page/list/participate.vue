<template>
  <div class="home">
    <list v-if="list.length > 0" type="1" :list="list"></list>
    <homenodata type="1" v-else></homenodata>
    <tab></tab>
  </div>
</template>

<script>
  import list from "./components/plist"
  import homenodata from "./components/no_data"
  import { getParticipateList } from '../../assets/js/api'
  import tab from '../../components/tab'
  export default {
    data () {
      return {
        hasData: 1,
        list: [],
        pageNo: 1,
        pageSize: 20,
      }
    },
    components: {
      homenodata,
      list,
      tab,
    },
    mounted() {
      this.getActiveInfo();
    },
    methods: {
      getActiveInfo() {
        getParticipateList(this.pageNo, this.pageSize)       
        .then(res => {
          this.list = res.body
        })
      },
    },
  }
</script>

<style lang="less" scoped>
  .home{
    width: 100%;
    height: 100%;
  }
</style>
