<!-- 第3页 -->
<template>
  <div>
    <div id="page-three" class="page-three"  :style="[{height: $pageHeight+'px'}, {backgroundImage: 'linear-gradient(90deg, ' + $store.state.theme + ' 0%, #cf7ae2 100%)'}]">
      
      <!-- 水滴弧形效果 -->
      <img class="water-drop" src="@/assets/images/water-drop.png" />

      <!-- 硬件部标题 -->
      <div class="title-box">
        {{$t("bst.team-hardware")}}
      </div>

      <!-- 硬件部卡片 -->
      <div class="card-row-box">
        <el-row id="el-row" type="flex" justify="space-around">
          <el-col span="5" v-for="index in 5" :key="index">
            <hardware-card></hardware-card>
          </el-col>
        </el-row>
      </div>

    </div>
    <!-- 分割线 -->
    <el-divider content-position="center">3</el-divider>
  </div>
</template>

<script>

import HardwareCard from "./component/hardware-card.vue"; //硬件部信息卡片

export default {
  components: {
    HardwareCard
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.page-three{
  background-color: #666 !important;
  border-bottom: calc(30vh) solid #fff;
  .water-drop{
    width: 100%;
    height: 70px;
    float: left;
    position: relative;
    top: 0;
  }
  .title-box {
    width: 100%;
    height: 80px;
    color: #fff;
    font-size: 50px;
    text-align: center;
    position: relative;
    top: 0px;
  }
  .card-row-box{
    width: 100%;
    margin: auto;
    padding: 20px;
    overflow-x: auto;
    overflow-y: hidden;
    box-sizing: border-box;
    position: relative;
    top: 80px;
  }
}
//媒体查询, 适应不同宽度
@media screen and (max-width: $_maxWidth) {
  #el-row{
    width: calc(100vw * 5);
  }
}
</style>