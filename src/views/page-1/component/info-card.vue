<!-- 简介卡片组件 -->
<template>
  <div class="info-card">
    <h2 class="bst-title">{{$t('bst.info-title')}}</h2> <!-- 简介 -->
    <p id="bst-text" class="bst-text">{{$t('bst.info-content')}}</p>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    //当在移动端时, 设置卡片的高度, 使超出卡片的文字内容可滚动
    // if (navigator.userAgent.match(/(phone|iPhone|ios|Android|Mobile|IEMobile)/i)) {
    //   var bstText = document.getElementById("bst-text");
    //   bstText.style.height = (this.$pageHeight * 0.65) + 'px';
    // }
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.info-card{
  width: 35%;
  padding: 15px;
  margin: auto;
  margin-top: 10%;
  margin-right: 10%;
  overflow-y: auto;
  border-radius: 30px;
  box-shadow: 0  1px 10px rgba(0, 0, 150, .2);
  background-color: rgba($color: #fff, $alpha: 0.2);
  .bst-title{
    font-size: 20px;
  }
  .bst-text{
    text-indent: 2em;
    font-size: 16px;
  }
}
.info-card::-webkit-scrollbar {
    display: none;/*隐藏滚动条*/
}

//媒体查询, 适应不同宽高度
@media screen and (max-width: $_maxWidth) {
  #bst-text{
    font-size: 14px;
    height: calc(60vh);
  }
}
</style>