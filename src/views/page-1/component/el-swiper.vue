<!-- 轮播图组件 -->
<template>
  <div class="el-swiper">
    <el-carousel indicator-position="none" :height="$pageHeight + 'px'">
      <el-carousel-item>
        <h3>1</h3>
      </el-carousel-item>
      <el-carousel-item>
        <h3>2</h3>
      </el-carousel-item>
      <el-carousel-item>
        <h3>3</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    margin: 0;
    height: 750px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>