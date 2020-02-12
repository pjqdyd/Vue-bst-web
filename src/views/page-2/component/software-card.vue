<!-- 软件卡片 -->
<template>
  <div class="card-box">
    <el-card class="el-card" :body-style="{ padding: '0px' }">
      <div class="image-box" :style="[
                {height: $pageHeight*0.65 +'px'},
                {paddingTop: $pageHeight*0.55 +'px'},
                {backgroundImage: 'url(' + image + ')' }
        ]">
        <div class="text-box" :style="{height: $pageHeight*0.65 +'px'}">
          文字盒子
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    image: { //图片背景
      type: Object,
      default: null
    }
  },
  components: {},
  data() {
    return {};
  },
  mounted() {
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
$shadow-color:  rgba(0, 0, 150, .2);
.card-box {
  margin: 0 4% 0 4%;
  box-sizing: border-box;
  .el-card {
    border: 0;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0  5px 20px 1px $shadow-color;
  }
  .el-card:hover{ //鼠标移过时添加四边阴影
      box-shadow:
      -3px 0px 20px 1px $shadow-color,
      0px -3px 20px 1px $shadow-color,
      3px 0px 20px 1px $shadow-color,
      0px 3px 20px 1px $shadow-color;
    }
  .image-box {
    width: 100%;
    background-size: cover;
    box-sizing: border-box;
    .text-box{
      color: #fff;
      position: relative;
      background-color: #eaeaea;
    }
  }
  .image-box:hover{ //播放动画, 播放一次, 并停留在最后一帧
       overflow: hidden;
       animation: showText 1s 1 forwards;
      -webkit-animation: showText 1s 1 forwards;
  }
}

//动画,减少内边距, 使文本box显示出来
@keyframes showText {
	0% {padding-top: 100%;}
	100% {padding-top: 0px;}
}
</style>