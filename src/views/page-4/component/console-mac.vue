<!-- Mac 风格的控制台 -->
<template>
  <div class="window-box" >
    <!-- 顶部选项卡 -->
    <div class="top-bar">
      <span class="close btn"></span>
      <span class="min btn"></span>
      <span class="max btn"></span>
    </div>

    <div class="content">
      <!-- 轮播图盒子 -->
      <el-carousel class="swiper-box" :height="$pageHeight*0.6 + 'px'"> 
        <el-carousel-item v-for="item in 4" :key="item">
         <div class="swiper-item">{{item}}</div>
        </el-carousel-item>
    </el-carousel>
  </div>

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.window-box {
  margin: auto;
  width: 100%;
  height: 100%;
  float: right;
  position: relative;
  background-color: #232323;
  box-sizing: border-box;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
  .top-bar {
    width: 100%;
    height: 25px;
    background: #f9f9f3;
    padding: 5px;
    box-sizing: border-box;
    overflow: hidden;
    float: left;
    border-radius: 5px 5px 0 0;
    .btn {
      width: 15px;
      height: 15px;
      display: block;
      float: left;
      border-radius: 50%;
      margin-right: 5px;
    }
    .close {
      background: #fc635d;
    }
    .min {
      background: #fdbc40;
    }
    .max {
      background: #34c84a;
    }
  }

  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    .swiper-box{
      width: 80%;
      margin: auto;
      margin-top: 50px;
      background-color: #fdbc40;
      .swiper-item{
       width: 100%;
       height: 100%;
      }
    }
  }
}
</style>