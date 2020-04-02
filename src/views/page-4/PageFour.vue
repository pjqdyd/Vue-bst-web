<!-- 第4页 -->
<template>
  <div>
     <div id="page-four" class="page-four"  :style="{height: $pageHeight+'px' }">

      <!-- Mac风格控制窗 -->
      <div class="mac-box">
        <console-mac></console-mac>
      </div>

      <!-- 底部信息盒子 -->
      <div class="bottom-info-box" :style="{color: $store.state.theme}">
        <p class="bottom-info-text">© 2019 - 2020 蓝色技术工作室 江西科技学院</p>
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
    width: 500px;
    height: 500px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .bottom-info-box{
    width: 100%;
    height: 60px;
    opacity: .9;
    background-color: #282c34;
    .bottom-info-text{
      font-size: 16px;
    }
  }
}
</style>