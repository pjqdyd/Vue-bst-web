<!-- 第3页 -->
<template>
  <div>
    <div id="page-three" class="page-three"  :style="[{height: $pageHeight+'px'}, {backgroundImage: 'linear-gradient(90deg, ' + $store.state.theme + ' 0%, #cf7ae2 100%)'}]">
      
      <!-- 水滴弧形效果 -->
      <div>
        <img class="water-drop" src="@/assets/images/water-drop.png" />
      </div>

      <!-- 硬件部标题 -->
      <div class="title-box">
        {{$t("bst.team-hardware")}}
        <!-- 浮动图标 -->
        <div class="icon-float"><icon-float :icon="'&#xe631;'" :size="'60px'"></icon-float></div>
      </div>

      <!-- 硬件部卡片 -->
      <div class="card-row-box">
        <el-row id="el-row" type="flex" justify="space-around">
          <el-col span="5" v-for="(cardBG, index) in cardBGList" :key="index">
            <hardware-card :image="cardBG" :text="textList[index]"></hardware-card>
          </el-col>
        </el-row>
      </div>

       <!-- 底部介绍短句 -->
      <div class="bottom-text">{{$t("bst.text-hardware")}}</div>

    </div>
  </div>
</template>

<script>
import HardwareCard from "./component/hardware-card.vue"; //硬件部信息卡片
import IconFloat from "@/components/icon-float/index.vue";   //浮动图标组件

import cardBG1 from "@/assets/images/hardware/1.jpg"; //卡片背景
import cardBG2 from "@/assets/images/hardware/2.jpg";
import cardBG3 from "@/assets/images/hardware/3.jpg";
import cardBG4 from "@/assets/images/hardware/4.jpg";
import cardBG5 from "@/assets/images/hardware/5.jpg";

export default {
  components: {
    HardwareCard,
    IconFloat
  },
  data() {
    return {
      cardBGList: [cardBG1, cardBG2, cardBG3, cardBG4, cardBG5], //卡片背景图片集合
    };
  },
  mounted() {
  },
  methods: {},
  computed: {
    textList(){ //通过计算属性返回来自对应语言的文字列表, 避免切换语言时无响应
      return this.$t("bst.hardware-info-list");
    }
  }
};
</script>

<style lang='scss' scoped>
.page-three{
  background-color: #666 !important;
  border-bottom: calc(25vh) solid #fff;
  .water-drop{
    width: 100%;
    height: 60px;
    float: left;
    position: relative;
    top: 0;
  }
  .title-box {
    width: 100%;
    height: 70px;
    color: #fff;
    font-size: 50px;
    text-align: center;
    position: relative;
    float: left;
    top: 0px;
    .icon-float{
      user-select: none;
      position: relative;
      top: -75px;
      right: 30%;
    }
  }
  .card-row-box{
    width: 100%;
    margin: auto;
    padding: 20px;
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    top: 0px;
  }
  .bottom-text{
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    color: #c7c6d6;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
//媒体查询, 适应不同宽度
@media screen and (max-width: $_maxWidth) {
  #el-row{ //给盒子固定宽度,使其中的内容可滚动
    width: calc(100vw * 5);
  }
  .water-drop{
    height: 30px !important;
  }
}
</style>