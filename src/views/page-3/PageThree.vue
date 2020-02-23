<!-- 第3页 -->
<template>
  <div>
    <div id="page-three" class="page-three"  :style="{height: $pageHeight+'px' }">

      <!-- 硬件部标题 -->
      <div class="title-box" :style="{color: $store.state.theme}">
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
  .title-box {
    width: 100%;
    height: 80px;
    font-size: 50px;
    text-align: center;
    position: relative;
  }
  .card-row-box{
    margin: auto;
    padding: 20px;
    overflow-x: auto;
    overflow-y: hidden;
    box-sizing: border-box;
  }
}
//媒体查询, 适应不同宽度
@media screen and (max-width: $_maxWidth) {
  #el-row{
    width: calc(100vw * 5);
  }
}
</style>