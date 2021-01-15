<!-- 第4页 -->
<template>
  <div>
     <div id="page-four" class="page-four"  :style="{height: $pageHeight+'px' }">
      <!-- 推广信息盒子组件 -->
      <div class="promote-box" :style="{height: $pageHeight - 90  + 'px'}">
        <promote-box></promote-box>
      </div>


      <!-- 底部信息盒子 -->
      <div class="bottom-info-box" :style="{backgroundImage: 'linear-gradient(90deg, ' + $store.state.theme + ' 0%, #cf7ae2 100%)'}">
          <el-link class="bottom-info-text" :href="bottomInfo.bst.url"  type="info" target="_blank">{{bottomInfo.bst.name}}</el-link>
          <mobile-hide>
            <!-- 浮动图标1 -->
            <div class="icon-float1" :style="{color: $store.state.theme}"><icon-float :icon="'&#xe630;'" :size="'60px'"></icon-float></div>
            <!-- 浮动图标2 -->
            <div class="icon-float2" :style="{color: $store.state.theme}"><icon-float :icon="'&#xe631;'" :size="'60px'"></icon-float></div>
          </mobile-hide>
      </div> 
     </div>

  </div>
</template>

<script>

import PromoteBox from "./component/promote-box.vue"; // 推广盒子组件

import IconFloat from "@/components/icon-float/index.vue";   //浮动图标组件
import MobileHide from "@/components/mobile-hide/index.vue"; //移动端隐藏组件


export default {
  components: {
    PromoteBox,
    IconFloat,
    MobileHide
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {},
  computed: {
    bottomInfo(){ //底部盒子信息
      return this.$t("bst.bottom-info");
    }
  }
};
</script>

<style lang='scss' scoped>
.page-four{
  display: flex;
  flex-direction: column;
  justify-items: self-end;
  .promote-box{
    width: 80%;
    margin: auto;
    opacity: .8;
  }
  .bottom-info-box{
    position: relative;
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
    .icon-float1{
      position: absolute;
      left: 15%;
      bottom: 150px;
      user-select: none;
    }
    .icon-float2{
      position: absolute;
      right: 15%;
      bottom: 550px;
      user-select: none;
    }
  }
}
</style>