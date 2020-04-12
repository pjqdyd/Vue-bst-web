<!-- 推荐信息盒子 -->
<template>
  <div class="promote-box">
      <!-- 推广图标 -->
      <div class="promote-icon"> 
          <img :src="promoteIcon">
      </div>
      <!-- 推广的名称 -->
      <div class="promote-name">{{promoteData.name}}</div>
  </div>
</template>

<script>
export default {
  props: {
      promoteData:{ //推广信息
          type: Object,
          default: null
      },
      promoteIcon: { //图标
          type: Object,
          default: null
      }
  },
  components: {},
  data () {
    return {};
  },
  mounted() {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.promote-box{
    width: 100%;
    height: 100%;
    .promote-icon{
        width: 80%;
        height: 80%;
        margin: auto;
        border-radius: 10px;
        img{
            width: 80%;
            height: auto;
        }
    }
    .promote-name{
        width: 80%;
        height: 20%;
        margin: auto;
    }
}
</style>