<!-- 简介卡片组件 -->
<template>
  <div class="info-card">
    <h2 class="bst-title">简介:</h2>
    <p id="bst-text" class="bst-text">蓝色技术工作室成立于 2011 年 10 月，旨在提高学生对科学技术的
      兴趣和认知能力，使同学们积极地对科学技术进行不断的研究和探
      索，让同学们有一个相互交流的平台，实现学习和实践相结合，从而
      使同学们的知识水平达到一个更高的层次。我们着重培养电子、汽车
      、机械、软件方面的专业人才，培养其动手能力和创新思维。自团队成立来，
      它培养了一批又一批专业基础扎实的学生。经过五年的努力，我们参与了江西
      省及全国举办的各类比赛 , 涵盖汽车，机械，电子，计算机等各个学科。</p>
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
    if (navigator.userAgent.match(/(phone|iPhone|ios|Android|Mobile|IEMobile)/i)) {
      var bstText = document.getElementById("bst-text");
      bstText.style.height = (this.$pageHeight * 0.65) + 'px';
    }
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.info-card{
  width: 30%;
  padding: 15px;
  margin: auto;
  margin-top: 10%;
  overflow-y: auto;
  border-radius: 30px;
  position: relative;
  top: 40px;
  box-sizing: border-box;
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
</style>