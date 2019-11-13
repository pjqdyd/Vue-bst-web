<!-- 第一页 -->
<template>
  <div>
    <!-- <div id="page-one" class="page-one" :style=" 'height:'+curHeight+'px' ">1</div> -->
    <div id="page-one" class="page-one">
      <img class="bst-img" src="@/assets/images/BST-Shadom.png" />
    </div>
    <!-- 分割线 -->
    <el-divider content-position="center">1</el-divider>
  </div>
</template>

<script>
export default {
  components: {},
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
.page-one {
  width: 100%;
  .bst-img {
    right: 30%;
    top: 8rem;
    width: 10%;
    height: auto;
    position: relative;
    animation: triangle-jump 2s infinite;
    @keyframes triangle-jump {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(15px);
      }
    }

  }
}
</style>