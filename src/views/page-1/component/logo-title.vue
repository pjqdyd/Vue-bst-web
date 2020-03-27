<!-- 图标标题组件 -->
<template>
  <div class="log-title-box">
      <!-- logo图标 -->
      <div>
         <img class="bst-img" src="@/assets/images/BST-Shadom.png" />
      </div>
     
      <!-- bst标题 中文: 蓝色技术工作室, 英文: Blue Technology Studio-->
      <div class="bst-title-box">
        <h1 class="bst-title">{{$t('bst.title')}}</h1>
      </div>

      <div>
        <h2 class="bst-title-en">Blue Technology Studio</h2>
      </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
    };
  },
  mounted() {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.log-title-box{
  width: 40%;
  height: 100%;
  margin: auto;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  .bst-img {
    width: 100px;
    height: auto;
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
  .bst-title {
    font-family: "Montserrat", sans-serif;
    font-size: 60px;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 8px;
    margin: 0;
    background: url("~@/assets/images/title-bg.png");
    background-size:contain;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
  .bst-title-en{
    font-size: 30px;
    color: #fff;
    text-decoration: underline;
  }
}

//媒体查询, 适应不同宽高度
@media screen and (max-width: $_maxWidth) {
  .log-title-box{
    height: calc(60vh) !important;
    .bst-img {
      width: 80px;
      height: auto;
    }
    .bst-title{
      font-size: 60px;
      line-height: 70px;
    }
    .bst-title-en{
      font-size: 16px;
    }
  }
}
</style>