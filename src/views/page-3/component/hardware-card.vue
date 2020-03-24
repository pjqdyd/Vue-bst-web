<!-- 硬件部信息卡片 -->
<template>
  <div class="card-box">
    <li :style="{height: $pageHeight*0.65 +'px'}">
      <div class="card-item" :style="{borderColor: $store.state.theme}">
        <div class="card-bg-text">这里是文字</div>
        <div class="card-icon-title" :style="{borderColor: $store.state.theme}">文字标题</div>
      </div>
      <div class="card-shadow" :style="{backgroundImage: 'linear-gradient(90deg, ' + $store.state.theme + ' 0%, #cfb1f1 100%)'}"></div>
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
    position: relative;
    border: 0;
    opacity: .8;
    box-sizing: border-box;
    .card-item {
      border: solid .9px;
      height: 100%;
      text-align: center;
      background: #fff;
      border-radius: 8px;
      position: relative;
      z-index: 10;
      box-sizing: border-box;
      .card-bg-text{
        width: 100%;
        height: calc(100% - 60px);
        border-radius: 8px 8px 0 0;
        background-image: url("~@/assets/images/software/2.jpg");
        background-size: cover;
        
      }
      .card-icon-title{
        font-size: 20px;
        width: 100%;
        height: 60px;
        border-top: solid 1px;
        line-height: 60px;
        color: #000;
      }
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