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
        box-shadow: 18px 18px 30px rgba(0, 0, 0, 0.1),
                    -18px -18px 30px rgba(255, 255, 255, 1);
        border-radius: 10px;
        background-color: #efeeee;
        transition: box-shadow .2s ease-out;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 80%;
            height: auto;
        }
    }
    .promote-name{
        width: 80%;
        height: 40px;
        font-size: 16px;
        line-height: 40px;
        margin: auto;
        color: slategrey;
    }
}
.promote-icon img{
    transition: width 0.2s ease-out;
}
.promote-icon:hover{
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2),
    0px 0px 0px rgba(255, 255, 255, 0.8),
    inset 18px 18px 30px rgba(0, 0, 0, 0.1),
    inset -18px -18px 30px rgba(255, 255, 255, 1);
    transition: box-shadow .2s ease-out;
}
.promote-icon img:hover{
    width: 90%;
    transition: width 0.2s ease-out;
}
</style>