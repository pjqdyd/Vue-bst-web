<!-- 第2页 -->
<template>
  <div>
    <div id="page-two" class="page-two" :style="{height: $pageHeight+'px' }">
      <!-- 软件部标题 -->
      <div class="title-box" :style="{color: $store.state.theme}">{{$t("bst.team-software")}}</div>

      <!-- 软件部的信息卡片 -->
      <div class="row-card-box">
        <el-row id="el-row" type="flex" justify="space-around">
          <el-col span="5" v-for="(cardBG, index) in cardBGList" :key="index">
            <software-card :image="cardBG" :text="textList[index]"></software-card>
          </el-col>
        </el-row>
      </div>

    </div>
    <!-- 分割线 -->
    <el-divider content-position="center">2</el-divider>
  </div>
</template>

<script>
import SoftwareCard from "./component/software-card.vue"; //软件部卡片组件

import cardBG1 from "@/assets/images/software/1.jpg"; //卡片背景
import cardBG2 from "@/assets/images/software/2.jpg";
import cardBG3 from "@/assets/images/software/3.jpg";
import cardBG4 from "@/assets/images/software/4.jpg";
import cardBG5 from "@/assets/images/software/5.jpg";

export default {
  components: {
    SoftwareCard
  },
  data() {
    return {
      cardBGList: [cardBG1, cardBG2, cardBG3, cardBG4, cardBG5], //卡片背景图片集合
      //textList: this.$t("bst.software-info-list")              //来自对应语言的文字列表
    };
  },
  mounted() {
    //当在移动端时, 设置卡片box的宽度, 使超出的卡片可横向滚动
    if (navigator.userAgent.match(/(phone|iPhone|ios|Android|Mobile|IEMobile|MQQBrowser|MicroMessenger)/i)) {
      var elRow = document.getElementById("el-row");
      elRow.style.width = document.documentElement.clientWidth * 5 + "px";
    }
  },
  methods: {},
  computed: {
    textList(){ //通过计算属性返回来自对应语言的文字列表, 避免切换语言时无响应
      return this.$t("bst.software-info-list");
    }
  }
};
</script>

<style lang='scss' scoped>
.page-two {
  z-index: 0;
  .title-box {
    width: 100%;
    height: 80px;
    color: #000;
    text-align: center;
  }

  .row-card-box {
    margin: auto;
    padding: 20px;
    overflow-x: auto;
    overflow-y: hidden;
    box-sizing: border-box;
  }
}
</style>