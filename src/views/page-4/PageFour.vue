<!-- 第4页 -->
<template>
  <div>
     <div id="page-four" class="page-four"  :style="{height: $pageHeight+'px' }">

      <!-- Mac风格控制窗 -->
      <div class="mac-box" :style="{height: $pageHeight - 160  + 'px'}">
        <console-mac></console-mac>
      </div>

      <!-- 底部信息盒子 -->
      <div class="bottom-info-box" :style="{backgroundImage: 'linear-gradient(90deg, ' + $store.state.theme + ' 0%, #cf7ae2 100%)'}">
          <el-link class="bottom-info-text" href="https://www.baidu.com"  type="info" target="_blank">© 2019-2020 蓝色技术工作室</el-link>
          <el-link class="bottom-info-text" href="https://www.baidu.com"  type="info" target="_blank">&nbsp;江西科技学院</el-link>
      </div> 
     </div>

  </div>
</template>

<script>

import ConsoleMac from "./component/console-mac.vue"; //Mac风格控制窗组件

export default {
  components: {
    ConsoleMac
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
.page-four{
  display: flex;
  flex-direction: column;
  justify-items: self-end;
  .mac-box{
    width: 80%;
    margin: auto;
    opacity: .9;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .bottom-info-box{
    width: 100%;
    height: 60px;
    line-height: 60px;
    opacity: .9;
    background-color: #282c34;
    .bottom-info-text{
      color: #fff;
      font-family: "幼圆";
      font-size: 16px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>