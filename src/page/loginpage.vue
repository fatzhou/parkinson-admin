<template>
  <div class="login-container">
    <!-- <personal></personal> -->
    <login v-if="isLogin"></login>
    <register v-else></register>
  </div>
</template>

<script>
  import login from "../components/login/login"
  import register from "../components/login/register"
  import personal from "../components/personal_info/personal"
  export default {
    data() {
      return {
        isLogin: true
      }
    },
    components: {
      login,
      register,
      personal
    }
  }
</script>

<style lang="less" scoped>
  .login-container{
    width: 100%;
    height: 100%;
  }
</style>
