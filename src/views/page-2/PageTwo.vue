<!-- 第2页 -->
<template>
  <div>
    <div id="page-two" class="page-two" :style="{height: $pageHeight+'px' }">
      <!-- 软件部标题 -->
      <div class="title-box">软件部</div>

      <!-- 软件部的信息卡片 -->
      <div class="row-card-box">
        <el-row id="el-row" type="flex" justify="space-around">
          <el-col span="5" v-for="index in 5" :key="index">
            <software-card></software-card>
          </el-col>
        </el-row>
      </div>

    </div>
    <!-- 分割线 -->
    <el-divider content-position="center">2</el-divider>
  </div>
</template>

<script>
import SoftwareCard from "./component/software-card.vue"; //软件部卡片

export default {
  components: {
    SoftwareCard
  },
  data() {
    return {};
  },
  mounted() {
    //当在移动端时, 设置卡片box的宽度, 使超出的卡片可横向滚动
    if (navigator.userAgent.match(/(phone|iPhone|ios|Android|Mobile|IEMobile)/i)) {
      var elRow = document.getElementById("el-row");
      elRow.style.width = document.documentElement.clientWidth * 5 + "px";
    }
  },
  methods: {}
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