<!-- Mac 风格的控制台 -->
<template>
  <div class="window-box" >
    <!-- 顶部选项卡 -->
    <div class="top-bar">
      <span class="close btn"></span>
      <span class="min btn"></span>
      <span class="max btn"></span>
    </div>

    <div class="content">

      <!-- 轮播图盒子 -->
      <el-carousel class="swiper-box" :height="$pageHeight*0.6 + 'px'" indicator-position="outside"> 
        <!-- 推荐的内容分页 -->
        <el-carousel-item v-for="(promotePage, index) in promotePages" :key="index" class="swiper-page"> 
          <!-- 每页的推荐内容集合 -->
          <div class="swiper-item">
            <div class="promote-item" v-for="(promoteItem, i) in promotePage" :key="i">
                <!-- 推广信息盒子 -->
                <promote-box :promoteData="promoteItem" :promoteIcon="PromoteIconList[promoteItem.icon_name]"></promote-box>
            </div>
          </div>
        </el-carousel-item>
    </el-carousel>

  </div>

  </div>
</template>

<script>

import PromoteBox from "./promote-box.vue"; //导入推广信息盒子组件

import Bilibili_Icon from "@/assets/images/promote/bilibili.png"; //图标

export default {
  components: {
    PromoteBox
  },
  data() {
    return {
      PromoteIconList: {
        "bilibili": Bilibili_Icon
      }
    };
  },
  mounted() {},
  methods: {},
  computed: {
      //通过计算属性返回来自对应语推广信息的分页 
      promotePages() {
        var promoteInfoList =  this.$t("bst.promote-info-list");
				const pages = []
				promoteInfoList.forEach((promoteInfo, index) => {
					const pageNum = Math.floor(index / 8) //得到页数, 8个分为一页
					if (!pages[pageNum]) { //如果当前页没有集合
						pages[pageNum] = []  //创建集合
					}
					pages[pageNum].push(promoteInfo) //往对应的集合中添加元素
				})
				return pages //返回分页后的集合
			}
  }
};
</script>

<style lang='scss' scoped>
.window-box {
  margin: auto;
  width: 100%;
  height: 100%;
  float: right;
  position: relative;
  background-color: #232323;
  box-sizing: border-box;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
  .top-bar {
    width: 100%;
    height: 25px;
    background: #f9f9f3;
    padding: 5px;
    box-sizing: border-box;
    overflow: hidden;
    float: left;
    border-radius: 5px 5px 0 0;
    .btn {
      width: 15px;
      height: 15px;
      display: block;
      float: left;
      border-radius: 50%;
      margin-right: 5px;
    }
    .close {
      background: #fc635d;
    }
    .min {
      background: #fdbc40;
    }
    .max {
      background: #34c84a;
    }
  }

  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    .swiper-box{
      width: 80%;
      margin: auto;
      margin-top: 60px;
      background-color: #fdbc40;
      align-content: center;
      .swiper-page{
        display: flex;
        direction: column;
        justify-content: center;
        align-items: center;
        .swiper-item{
          width: 100%;
          //height: calc(26vw);
          .promote-item{
            position: relative;
            float: left;
            width: 25%;
            height: calc(13vw);
            border: cadetblue 1px solid;
            background-color:#413838;
          }
        }
      }
    }
  }
}
</style>