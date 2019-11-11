<!-- 顶部导航菜单 -->
<template>
  <div>
    <el-menu
      :default-active="pageIndex"
      :active-text-color="$store.state.theme"
      style="box-shadow: 0  1px 10px rgba(0, 0, 150, .2);"
      class="nav-menu"
      mode="horizontal"
      @select="handleSelect"
    >
      <!-- 左边标题和logo -->
      <div class="el-item-box-logo">
        <img class="bst-logo" src="@/assets/images/BST-Shadom.png"/>
        <span class="bst-title">蓝色技术工作室宣传网</span>
      </div>

      <!-- 页面(中/英文显示) -->
      <el-menu-item index="1">{{$t('pages.page1')}}</el-menu-item>
      <el-menu-item index="2">{{$t('pages.page2')}}</el-menu-item>
      <el-menu-item index="3">{{$t('pages.page3')}}</el-menu-item>
      <el-menu-item index="4">{{$t('pages.page4')}}</el-menu-item>

      <!-- 语言选框 -->
      <div class="el-item-box">
        <lang-picker></lang-picker>
      </div>

      <!-- 主题颜色选框 -->
      <div class="el-item-box">
        <theme-picker></theme-picker>
      </div>
    </el-menu>
  </div>
</template>

<script>
import LangPicker from "@/components/lang-picker/index.vue"; //语言选择插件
import ThemePicker from "@/components/theme-picker/index.vue"; //主题选择插件

export default {
  components: {
    LangPicker,
    ThemePicker
  },
  props: {
    pageIndex: {
      type: String,
      default: "1"
    }
  },
  data() {
    return {};
  },
  methods: {
    //当前点击的选项
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$emit("selectChange", key); //向外触发选项改变事件, key是选项序号
    }
  }
};
</script>

<style lang='scss' scoped>
$nav-height: 40px;
$nav-bgColor:  rgba($color: $_bgColor, $alpha: 0.2);

.nav-menu {
  position: fixed;
  top: 0;
  width: 100%;
  height: $nav-height;
  background: $nav-bgColor;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .el-item-box-logo{
    position: absolute;
    left: 1rem;
    width: 25%;
    height: $nav-height;
    line-height: $nav-height;
    display: flex;
    justify-content: flex-start;
    .bst-logo{
      width: auto;
      margin: 8px;
      height: 26px;
    }
    .bst-title{
      font-family: YouYuan, '微软雅黑';
      font-size: 18px;
      color: $_fontColor;
      font-weight: 600;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
  }
  .el-menu-item {
    padding: 0 3%;
    color: $_fontColor;
    height: $nav-height;
    line-height: $nav-height;
  }
  .el-item-box {
    font-size: 16px;
    margin: 2%; 
    color: $_fontColor;
  }
}
.el-menu--horizontal {
  border-bottom: 0 !important;
}
.el-menu-item:not(.is-disabled):focus,
.el-menu-item:not(.is-disabled):hover,
.el-submenu__title:hover,
.el-item-box:hover {
    color: #aaa;
    background-color: $nav-bgColor;
}
</style>