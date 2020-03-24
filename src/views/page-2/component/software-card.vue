<!-- 软件卡片 -->
<template>
  <div class="card-box">
    <el-card class="el-card" :body-style="{ padding: '0px' }">
      <!-- 图片背景 -->
      <div class="image-box" :style="[
                {height: $pageHeight*0.7 +'px'},
                {paddingTop: $pageHeight*0.7 - 70 + 'px'},
                {backgroundImage: 'url(' + image + ')' }
        ]">
        <!-- 文字内容盒子 -->
        <div class="text-box" :style="[{height: $pageHeight*0.7 +'px'}, {backgroundColor: $store.state.theme}]">
          
          <!-- 图标标题 -->
          <div class="text-title">
            <i class="iconfont" v-html="text.icon"></i>
            {{text.title}}
          </div>
          <!-- 介绍内容 -->
          <div class="text-contant">
             {{text.contant}}
          </div>

        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    image: { //背景图片
      type: Object,
      default: null
    },
    text: { //文字内容
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
  margin: 0 4%;
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
    background-position: center;
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

//媒体查询, 适应不同宽度
@media screen and (max-width: $_maxWidth) {
  .card-box{
    width: calc(80vw);
  }
}
</style>