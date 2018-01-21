<template>
  <div class="hello">
    <h1>{{ msg }} <span>test</span></h1>
  </div>
</template>

<script>

export default {
  name: 'test',
  data () {
    return {
      msg: 'I am test'
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1 {
  font-weight: normal;
  span {
    color: red;
  }
}
</style>
