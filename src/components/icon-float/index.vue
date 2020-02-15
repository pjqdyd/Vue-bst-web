<!-- 浮动图标组件 -->
<template>
  <div class="iconfont icon-float-box" :style="{color: $store.state.theme}" v-html="icon">
  </div>
</template>

<script>
export default {
  props:{
      icon: {
          type: String,
          default: ""
      }
  },
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.icon-float-box {
  font-size: 20px;
  animation: triangle-jump 2s infinite;
  @keyframes triangle-jump {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(15px);
    }
  }
}
</style>