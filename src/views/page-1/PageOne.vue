<!-- 第一页 -->
<template>
  <div>
    <div id="page-one" class="page-one" :style="{height: $pageHeight+'px' }">
     
      <!-- 轮播图组件 -->
      <el-swiper></el-swiper>

      <!-- logo图标 -->
      <img class="bst-img" src="@/assets/images/BST-Shadom.png" />

      <!-- 波浪动画组件 -->
      <wave-animation></wave-animation>
    </div>
  </div>
</template>

<script>
import WaveAnimation from "@/components/wave-animation/index.vue"; //波浪动画组件
import ElSwiper from "./component/el-swiper.vue";                  //轮播图组件

export default {
  components: {
    WaveAnimation,
    ElSwiper
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.page-one {
  width: 100%;
  position: relative;
  .bst-img {
    right: 30%;
    top: 8rem;
    width: 10%;
    height: auto;
    position: relative;
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
}
</style>