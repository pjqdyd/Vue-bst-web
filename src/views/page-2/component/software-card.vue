<!-- 软件卡片 -->
<template>
  <div class="card-box">
    <el-card class="el-card" :body-style="{ padding: '0px' }">
      <!-- 图片背景 -->
      <div class="image-box" :style="[
                {height: $pageHeight*0.7 +'px'},
                {paddingTop: $pageHeight*0.6 +'px'},
                {backgroundImage: 'url(' + image + ')' }
        ]">
        <!-- 文字内容盒子 -->
        <div class="text-box" :style="[{height: $pageHeight*0.7 +'px'}, {backgroundColor: $store.state.theme}]">
          <!-- 图标标题 -->
          <div class="text-title">
            <i class="iconfont icon-title" v-html="icon"></i>
            Web前端
          </div>
          <!-- 介绍内容 -->
          <div class="text-contant">
            蓝色技术工作室成立于 2011 年 10 月，旨在提高学生对科学技术的兴趣和认知能力，使同学们积极地对科学技术进行不断的研究和探索，让同学们有一个相互交流的平台，实现学习和实践相结合，从而使同学们的知识水平达到一个更高的层次。我们着重培养电子、汽车、机械、软件方面的专业人才，培养其动手能力和创新思维。自团队成立来，它培养了一批又一批专业基础扎实的学生。经过五年的努力，我们参与了江西省及全国举办的各类比赛 , 涵盖汽车，机械，电子，计算机等各个学科。
          </div>

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
    return {
      icon: "&#xe6db;"
    };
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
  opacity: .8;
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
      opacity: .8;
      .text-title{
        font-size: 30px;
        text-align: left;
        padding:  15px;
        white-space :nowrap;
        overflow : hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
        .text-icon{
          font-size: 80px;
        }
      }
      .text-contant{
        text-indent: 2em;
        font-size: 17px;
        margin: 15px;
        box-sizing: border-box;
      }
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