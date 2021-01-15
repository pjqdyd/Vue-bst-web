<!-- 推广信息 -->
<template>
    <div class="content">

      <!-- 轮播图盒子 高度是父元素的80%再加上5-->
        <!-- 推荐的内容分页 -->
        <div v-for="(promotePage, index) in promotePages" :key="index" class="swiper-page"> 
          <!-- 每页的推荐内容集合, 宽度根据子元素的数量决定, +20表示阴影的宽度 -->
          <div class="swiper-item" :style="{width: Math.ceil(promotePage.length / 2) * 200 + 20 + 'px'}">
            <div class="promote-item" v-for="(promoteItem, i) in promotePage" :key="i">
                <!-- 推广信息盒子 -->
                <promote-item :promoteData="promoteItem" :promoteIcon="promoteIconList[promoteItem.icon_name]"></promote-item>
            </div>
          </div>
        </div>

  </div>
</template>

<script>

import PromoteItem from "./promote-item.vue"; //导入推广信息Item组件

import Bilibili_Icon from "@/assets/images/promote/bilibili.png"; //图标
import Github_Icon from "@/assets/images/promote/github.png";
import Jianshu_Icon from "@/assets/images/promote/jianshu.png";
import Weibo_Icon from "@/assets/images/promote/weibo.png";
import Bst_Icon from "@/assets/images/promote/bst.png";
import Wechat_Icon from "@/assets/images/promote/wechat.png";
import Huntercat_Icon from "@/assets/images/promote/huntercat.png";


export default {
  components: {
    PromoteItem
  },
  data() {
    return {
      promoteIconList: { //推广图片图标集合
        "bilibili": Bilibili_Icon,
        "github": Github_Icon,
        "jianshu": Jianshu_Icon,
        "weibo": Weibo_Icon,
        "bst": Bst_Icon,
        "wechat": Wechat_Icon,
        "huntercat": Huntercat_Icon
      },
      promoteItemNum: 8, //单页的推广图标数量
      prometeItemWidth: 200 //单个推广图标的宽度
    };
  },
  mounted() {},
  methods: {},
  computed: {
    promotePages() { //通过计算属性返回推广信息的分页 
      var promoteInfoList =  this.$t("bst.promote-info-list");
      const pages = []
      promoteInfoList.forEach((promoteInfo, index) => {
        const pageNum = Math.floor(index / this.promoteItemNum) //得到页数, 8个分为一页
        if (!pages[pageNum]) { //如果当前页没有集合
          pages[pageNum] = []  //创建集合
        }
        pages[pageNum].push(promoteInfo) //往对应的集合中添加元素
      })
      return pages //返回分页后的集合
    },

    clientWidth(){ //通过计算属性返回窗口宽度
      return this.$store.state.clientWidth; //窗口宽度
    }
  },
  watch: {
    clientWidth: { //监听窗口宽度的变化, 动态设置推荐图标的数量
      handler: function(val) {
        var swiperWidth = val * 0.64;
        console.log(swiperWidth);
        //计算每页宽度可以放几个推广,放两行
        this.promoteItemNum = parseInt(swiperWidth / this.prometeItemWidth) * 2; 
        this.theme = val; //更改当前主题色
      },
      immediate: true //立即执行
    }
  }
};
</script>

<style lang='scss' scoped>
.content {
height: calc(100% - 25px);
width: 100%;
.swiper-box{
    width: 80%;
    margin: auto;
    margin-top: 30px;
    //background-color: #f9f9f9;
    align-content: center;
    .swiper-page{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .swiper-item{
        //width: 100%;
        height: 400px;
        margin: auto;
        overflow: hidden;
        //display: grid; //网格布局
        //grid-template-columns: 200px 200px 200px 200px; //规定列数
        //grid-template-rows: 180px 180px;  //行数自动根据子元素的数量填充
        //align-content: center;
        //justify-content: center;
        .promote-item{ //推广信息盒子
        float: left;
        width: 200px;
        height: 200px;
        //background-color:#efeeee;
        }
    }
    }
}
}
</style>