<!-- 第2页 -->
<template>
  <div>
    <div id="page-two" class="page-two" :style="{height: $pageHeight+'px' }">
        <!-- <console-mac></console-mac> -->
    </div>
    <!-- 分割线 -->
    <el-divider content-position="center">2</el-divider>
  </div>
</template>

<script>

import ConsoleMac from "@/components/console-mac/index.vue"; //Mac风格控制台组件

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
</style>