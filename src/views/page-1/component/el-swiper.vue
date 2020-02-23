<!-- 轮播图组件 -->
<template>
  <div class="el-swiper">
    <el-carousel indicator-position="none" :height="$pageHeight + 'px'">

      <block v-for="(image, index) in swiperList" :key="index">
        <el-carousel-item>
          <!-- 轮播背景图 -->
          <div class="swiper-image" :style="{backgroundImage: 'url(' + image + ')' }" >
            <!-- 背景图前的遮罩 -->
            <div class="swiper-mask" :style="{backgroundColor: maskColor}"></div>
          </div>
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
  methods: {},
  computed: {
    maskColor(){ //遮罩颜色
      return this.$store.state.theme;
    }
  }
};
</script>

<style lang='scss' scoped>
.el-swiper {
  width: 100%;
  position: absolute;
  top: 0;
  overflow: hidden;
  z-index: 0;
  .swiper-image{
    width:100%;
    height:100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    .swiper-mask{
      width:100%;
      height:100%;
      opacity: .2;
    }
  }
}
</style>