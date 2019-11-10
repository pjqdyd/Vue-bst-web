<!-- 第一页 -->
<template>
  <div>
    <!-- <div id="page-one" class="page-one" :style=" 'height:'+curHeight+'px' ">1</div> -->
    <div id="page-one" class="page-one">
      <img class="triangle-right-top" src="@/assets/images/BST-Shadom.png" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      //curHeight: "" //窗口高度
    };
  },
  mounted() {
    //var h = document.documentElement.clientHeight || document.body.clientHeight;
    //this.curHeight = h; //获取窗口height
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.page-one {
  width: 100%;
  .triangle-right-top {
    right: 30%;
    top: 150px;
    width: 200px;
    height: 200px;
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