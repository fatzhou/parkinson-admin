<template>
  <div class="initiate">
    <list :obj="{message}"></list>
  </div>
</template>

<script>
  import list from "../components/list/list"
  export default {
    data() {
      return {
        name: "Jan",
        message: [
          {
            status: 0,  
            title: "这里是一个标题这里是一个标题",
            name: "个人组织",
            time: "2017-11-11 19:00",
            statusDesc: "",
          },
          {
            status: 2,  
            title: "这里是一个标题这里是一个标题",
            name: "个人组织",
            time: "2017-11-11 19:00",
            statusDesc: "",
          },
          {
            status: 2,  
            title: "这里是一个标题这里是一个标题",
            name: "个人组织",
            time: "2017-11-11 19:00",
            statusDesc: "",
          }
        ]
      }
    },
    components: {
      list
    }
  }
</script>

<style lang="less" scoped>
  .initiate{
    width: 100%;
    height: 100%;
  }
</style>
