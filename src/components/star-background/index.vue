<!-- 星星背景组件 -->
<template>
  <div>
    <!-- 背景星星节点 -->
    <div class="stars" :style="{color: $store.state.theme}" id="star"></div>
    <div class="stars" :style="{color: $store.state.theme}" id="star2"></div>
    <div class="stars" :style="{color: $store.state.theme}" id="star3"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {};
  },
  mounted() {},
  methods: {}
}
</script>

<style lang='scss' scoped>
  @import '@/assets/styles/stars.scss'; //使用背景星星样式
</style>