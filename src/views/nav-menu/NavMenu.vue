<!-- 顶部导航菜单 -->
<template>
  <div>
    
    <el-menu
      :default-active="pageIndex"
      active-text-color="#fff"
      class="nav-menu"
      mode="horizontal"
      @select="handleSelect"
    ><!-- style="box-shadow: 0  1px 10px rgba(0, 0, 150, .2);" :text-color="$store.state.theme" --> 

      <!-- 左边logo和标题 -->
      <div class="el-item-box-logo">
        <img class="bst-logo" src="@/assets/images/BST-Shadom.png" />
        <div class="bst-title">{{$t('bst.nav-title')}}</div> <!--标题分中英文显示 -->
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
$nav-textColor: #eee;
$nav-bgColor: rgba($color: $_bgColor, $alpha: 0);

.nav-menu {
  position: fixed;
  top: 5px;
  width: 100%;
  height: $nav-height;
  background: $nav-bgColor;
  display: flex;
  justify-content: flex-end;
  z-index: 999;
  align-items: center;
  font-family: Helvetica,"微软雅黑";
  .el-item-box-logo {
    position: absolute;
    left: 1.5rem;
    width: 25%;
    height: $nav-height;
    line-height: $nav-height;
    display: flex;
    justify-content: flex-start;
    .bst-logo {
      width: auto;
      padding: 4px;
      margin: 4px 10px;
      height: 24px;
      float: left;
      border-radius: 50%;
      background-color: #fff;
    }
    .bst-title {
      font-size: 17px;
      color: $nav-textColor;
      white-space: nowrap;
      overflow: hidden;
      text-overflow:ellipsis;
    }
  }
  .el-menu-item {
    padding: 0 3%;
    color: $nav-textColor;
    height: $nav-height;
    line-height: $nav-height;
    font-size: 16px;
  }
  .el-item-box {
    margin: 2%;
    color: #fff;
  }
}
.el-menu--horizontal {
  border-bottom: 0 !important;
}
.el-menu-item:not(.is-disabled):focus,
.el-menu-item:not(.is-disabled):hover,
.el-submenu__title:hover,
.el-item-box:hover {
  color: #fff;
  background-color: $nav-bgColor;
}
//媒体查询, 适应不同宽高度, 当小于宽度500px是隐藏logo, 缩小字体
@media screen and (max-width: $_maxWidth) {
  .el-item-box-logo{
    display: none !important;
  }
  .el-menu-item, .el-dropdown{
    font-size: 15px !important;
  }
}
//媒体查询, 适应不同宽高度, 当宽度大于1920px后固定宽度
@media screen and (min-width: $_minWidth) {
  .nav-menu{
    position: absolute;
    width: $_minWidth;
  }
}
</style>