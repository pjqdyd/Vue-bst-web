<!-- 硬件部信息卡片 -->
<template>
  <div class="card-box">
    <li :style="{height: $pageHeight*0.6 +'px'}">
      <div class="card-item" :style="{borderColor: $store.state.theme}"></div>
      <div class="card-shadow" :style="{backgroundImage: 'linear-gradient(135deg, #fff 10%,' + $store.state.theme + ' 100%)'}"></div>
    </li>
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
  li {
    width: calc(16vw); 
    display: inline-block;
    margin: 0 4%;
    list-style: none;
    opacity: .8;
    position: relative;
    box-sizing: border-box;
    .card-item {
      border: solid 1px;
      height: 100%;
      text-align: center;
      background: #fff;
      border-radius: 8px;
      position: relative;
      z-index: 10;
      box-sizing: border-box;
    }
    .card-shadow { //卡片的阴影
      width: calc(100% - 25px);
      height: calc(100% - 35px);
      display: inline-block;
      border-radius: 8px;
      position: absolute;
      left: 33px;
      top: 40px;
      opacity: .6;
    }
  }
//媒体查询, 适应不同宽度
@media screen and (max-width: $_maxWidth) {
  .card-box, li, .card-item{
    width: calc(80vw) !important;
  }
  .card-shadow{
    width: calc(80vw - 25px) !important;
  }
}
</style>