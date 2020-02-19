<!-- 第4页 -->
<template>
  <div>
     <div id="page-four" class="page-four"  :style="{height: $pageHeight+'px' }">

       <!-- Mac风格控制窗 -->
       <div class="mac-box">
          <console-mac></console-mac>
       </div>

     </div>

  </div>
</template>

<script>

import ConsoleMac from "@/components/console-mac/index.vue"; //Mac风格控制窗组件

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
  .mac-box{
    width: 500px;
    height: 500px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>