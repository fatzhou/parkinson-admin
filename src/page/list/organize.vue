<template>
  <div class="initiate">
    <list v-if="list.length > 0" type="2" :list="list"></list>
    <homenodata type="2" v-else></homenodata>
    <tab></tab>
  </div>
</template>

<script>
  import list from "./components/olist"
  import homenodata from "./components/no_data"
  import { getOrganizeList } from '../../assets/js/api'
  import tab from '../../components/tab'

  export default {
    data() {
      return {
        name: "OrganizeList",
        pageNo: 1,
        pageSize: 20,
        list: [

        ]
      }
    },
    mounted() {
      this.getCreateList()
    },
    methods: {
      getCreateList() {
        getOrganizeList(this.pageNo, this.pageSize)       
        .then(res => {
          this.list = res.body
        })
      },
    },
    components: {
      list,
      homenodata,
      tab,
    }
  }
</script>

<style lang="less" scoped>
  .initiate{
    width: 100%;
    height: 100%;
  }
</style>