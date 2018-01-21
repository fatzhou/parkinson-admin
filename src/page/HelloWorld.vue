<template>
  <div class="hello">
    <h1>{{ msg }} <span>sdfsdf</span></h1>
    <p>{{testData}}</p>
    <button @click="setTestData(2)">改变testData</button>
    <test></test>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import test from '../components/test'
  import { getUser } from '../assets/js/api'


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    test
  },
  mounted() {
    getUser(1)
    .then( res => {
      console.log("返回数据", res);
    } )
  },
  computed: {
    ...mapState([
      'testData'
      ])
  },
  methods: {
    ...mapMutations([
        'setTestData'
      ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1 {
  font-weight: normal;
  span {
    color: green;
  }
}
</style>
