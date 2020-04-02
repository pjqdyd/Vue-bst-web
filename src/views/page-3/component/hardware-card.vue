<!-- 硬件部信息卡片 -->
<template>
  <div class="card-box">
    <li :style="{height: $pageHeight*0.7 +'px'}">
      <!-- 卡片 -->
      <div class="card-item" :style="{borderColor: $store.state.theme}">
        <!-- 文字内容 -->
        <div class="card-bg-text" :style="{backgroundImage: 'url(' + image + ')'}">
          <div class="text-contant" :style="{backgroundColor: $store.state.theme}">{{text.contant}}</div>
        </div>
        <!-- 标题图标 -->
        <div class="card-icon-title" :style="{borderColor: $store.state.theme}">
          <i class="iconfont" v-html="text.icon"></i>
          {{text.title}}
        </div>
      </div>
      <!-- 卡片阴影 -->
      <div class="card-shadow" :style="{backgroundImage: 'linear-gradient(90deg, ' + $store.state.theme + ' 0%, #cfb1f1 100%)'}"></div>
    </li>
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
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
  li {
    width: calc(17vw); 
    display: inline-block;
    margin: 0 4%;
    list-style: none;
    position: relative;
    border: 0;
    opacity: .9;
    .card-item {
      border: solid .8px;
      height: 100%;
      text-align: center;
      background: #fff;
      border-radius: 8px;
      position: relative;
      z-index: 10;
      .card-bg-text{
        width: 100%;
        height: calc(100% - 60px);
        border-radius: 8px 8px 0 0;
        background-size: cover;
        .text-contant {
          width: 100%;
          height: 100%;
          padding: 15px;
          text-indent: 2em;
          font-size: 17px;
          opacity: 0;
        }
      }
      .card-icon-title{
        font-size: 24px;
        width: 100%;
        height: 60px;
        border-top: solid 1px;
        line-height: 60px;
        color: #000;
        text-align: left;
        padding-left: 15px;
        white-space :nowrap;
        overflow : hidden;
        text-overflow: ellipsis;
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
.text-contant:hover{ //动画显示文本
    animation: showText .6s 1 forwards;
    -webkit-animation: showText .6s 1 forwards;
}

//减少透明度, 使文本显示出来
@keyframes showText {
	0% {opacity: 0;}
	100% {opacity: .8;}
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