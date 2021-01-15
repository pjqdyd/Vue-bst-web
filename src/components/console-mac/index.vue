<!-- Mac 风格的控制台 -->
<template>
  <div class="window-box" >
    <!-- 顶部选项卡 -->
    <div class="top-bar">
      <span class="close btn"></span>
      <span class="min btn"></span>
      <span class="max btn"></span>
    </div>

    <!-- 内容区域 -->
    <div class="content">
      <div>内容区域</div>
    </div>

  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang='scss' scoped>
.window-box {
  margin: auto;
  width: 100%;
  height: 100%;
  float: right;
  position: relative;
  background-color:  #f9f9f9;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
  .top-bar {
    width: 100%;
    height: 25px;
    background:#232323;
    padding: 5px;
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
    .close {background: #fc635d;}
    .min {background: #fdbc40;}
    .max {background: #34c84a;}
  }
  .content {
    height: calc(100%);
    width: 100%;
  }
}
</style>