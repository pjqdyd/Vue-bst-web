<!-- Mac 风格的控制台 -->
<template>
  <div>
    <div class="window-box">
       <div class="top-bar">
        <span class="close btn"></span>
        <span class="min btn"></span>
        <span class="max btn"></span>
      </div>
      <div class="text">这是一段文字</div>
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
  width: 500px;
  height: 300px;
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

  .text {
    height: 100%;
    padding: 45px 20px;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    text-align: left;
    box-sizing: border-box;
  }
}
</style>