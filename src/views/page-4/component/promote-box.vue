<!-- 推广信息 -->
<template>
  <div class="content">

        <!-- 推荐的内容 -->
        <el-row type="flex">
        </el-row>

        <div v-for="(item, index) in promoteInfoList" :key="index">
          {{item.name}}
        </div>

        <promote-item></promote-item>

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
      promoteInfoList: this.$t("bst.promote-info-list"), // 推广信息集合
      promoteIconList: { //推广图片图标集合
        "bilibili": Bilibili_Icon,
        "github": Github_Icon,
        "jianshu": Jianshu_Icon,
        "weibo": Weibo_Icon,
        "bst": Bst_Icon,
        "wechat": Wechat_Icon,
        "huntercat": Huntercat_Icon
      }
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang='scss' scoped>
</style>