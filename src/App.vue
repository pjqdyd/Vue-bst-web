<template>
  <div id="app">
      <!-- 使显示时有淡入淡出效果 -->
      <transition name="el-fade-in" duration="2000">
        <div v-if="isShow">
          <router-view/>
        </div>
      </transition>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        "isShow": false //是否显示内容
      }
    },
    //如果加载完成, 移除index.html的加载动画, 显示vue挂载的组件内容
    beforeCreate(){
      setTimeout(() =>{
        let loadingBox = document.getElementById("init-loading-div");
        if(loadingBox != null){
          document.body.removeChild(loadingBox);
        }
        this.isShow = true; //显示vue挂载的内容
      },2000);
    }
  }
</script>

<style lang="scss">
#app {
  font-family: $_fontFamily;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $_fontColor;
}
div{
  box-sizing: border-box;
}
/* 默认文字颜色 */
.default-text-color{
  color: $_fontColor;
}

/* 覆盖折叠面板的'>'图标默认样式, 隐藏 */ 
.el-collapse-item__arrow{
  width: 0;
  height: 0;
  visibility: hidden;
  /* opacity: 0; */
}

/* 默认下拉菜单文字大小 */
.el-dropdown{
  font-size: 16px;
}

/* 默认下拉文字的颜色 */
.el-dropdown-link{
  color: #eee;
}
.el-dropdown-link:hover{
  color: #fff;
}

// 默认导航指示条颜色
.el-carousel__button{
    background-color: #000 !important;
}
</style>
