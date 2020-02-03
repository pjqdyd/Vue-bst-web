<!-- 软件卡片 -->
<template>
  <div class="card-box">
    <el-card :body-style="{ padding: '5px' }" shadow="hover">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      />
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.card-box {
  margin: 0 2% 0 2%;
  .el-card {
      border-radius: 10px;
  }
  .image {
    width: 100%;
    display: block;
  }
}
</style>