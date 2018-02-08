<template>
  <div class="detailspage">
    <organiser v-if="identity"></organiser>
    <participate v-else></participate>
  </div>
</template>

<script>
import organiser from "../components/details/organiser-detail"
import participate from "../components/details/participate-detail"
export default {
  data () {
    return {
      identity:0
    }
  },
  created () {
    this.fetchData()
  },
  components: {
    participate,
    organiser
  },
  methods: {
    fetchData () {
      console.log(this.$route.params.id)
    }
  }
}
</script>

<style lang="less" scoped>
.detailspage{
  // height: 100%;
  // position: relative;
}
</style>
