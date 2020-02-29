<!-- 浮动图标组件 -->
<template>
  <div class="iconfont icon-float-box" v-html="icon" :style="{fontSize: size}">
  </div>
</template>

<script>
export default {
  props:{
      icon: {
          type: String,
          default: ""
      },
      size: {
        type: String,
        default: "20px"
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