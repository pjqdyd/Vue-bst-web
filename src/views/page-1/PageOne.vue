<!-- 第一页 -->
<template>
  <div>
    <div id="page-one" class="page-one" :style="{height: $pageHeight+'px' }">
      <!-- 轮播图组件 -->
      <el-swiper></el-swiper>

      <div class="logo-info-box">
        <!-- 图标标题组件 -->
        <logo-title></logo-title>

        <!-- 介绍卡片组件 -->
        <info-card></info-card>
      </div>

      <!-- 波浪动画组件 -->
      <wave-animation></wave-animation>
    </div>
  </div>
</template>

<script>
import ElSwiper from "./component/el-swiper.vue"; //轮播图组件
import LogoTitle from "./component/logo-title.vue"; //图标标题组件
import InfoCard from "./component/info-card.vue";   //介绍卡片组件
import WaveAnimation from "@/components/wave-animation/index.vue"; //波浪动画组件

export default {
  components: {
    ElSwiper,
    LogoTitle,
    InfoCard,
    WaveAnimation,
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
  overflow: hidden;
  .logo-info-box{
    position: relative;
    top: 50px;
    display: flex;
    justify-content: space-between;
    //pointer-events:none; //阻止鼠标事件
  }
}
</style>