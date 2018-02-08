<template>
  <div class="add">
    <addactive></addactive>
  </div>
</template>

<script>
  import addactive from "../components/add/add"
  export default {
    components: {
      addactive
    }
  }
</script>

<style lang="less" scoped>

  .add {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
