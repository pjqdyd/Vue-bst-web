<!-- 简介卡片组件 -->
<template>
  <div class="info-card">
    <div v-for="o in 4" :key="o">列表内容</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.info-card{
  width: 30%;
  border-radius: 30px;
  margin: auto;
  margin-bottom: -20px;
  position: relative;
  background-color: rgba($color: #fff, $alpha: 0.2);
}
</style>