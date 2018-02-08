<template>
  <div class="personal-info">
    <v-header></v-header>
    <basic v-show="isShow"></basic>
    <medicine v-show ="!isShow"></medicine>
  </div>
</template>
<script>
  import store from '@/store/index'
  import header from "./header"
  import basic from "./basic_info"
  import medicine from "./medicine-bg"
  export default {
    data() {
      return {
        isShow: true
      }
    },
    create: {

    },
    computed: {
      class: function() {
        return this.isShow = store.state.isShowBasicePage
      }
    },
    components: {
      "v-header": header,
      basic,
      medicine
    }
  }
</script>

<style scoped>
.personal-info{

}
</style>
