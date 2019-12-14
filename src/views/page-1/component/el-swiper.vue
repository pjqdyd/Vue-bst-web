<!-- 轮播图组件 -->
<template>
  <div class="el-swiper">
    <el-carousel indicator-position="none" :height="$pageHeight + 'px'">

      <block v-for="(image, index) in swiperList" :key="index">
        <el-carousel-item>
          <img class="swiper-image" :src="image">
        </el-carousel-item>
      </block>

    </el-carousel>
  </div>
</template>

<script>

import swiper1 from "@/assets/images/swiper/swiper1.png";
import swiper2 from "@/assets/images/swiper/swiper2.png";
import swiper3 from "@/assets/images/swiper/swiper3.png";

export default {
  components: {},
  data() {
    return {
      swiperList: [swiper1, swiper2, swiper3]
    };
  },
  beforeMount() {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.el-swiper {
  width: 100%;
  height: 750px;
  position: absolute;
  top: 0;
  line-height: 750px;
  z-index: 0;
}
</style>