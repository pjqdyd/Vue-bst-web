<!-- 硬件部信息卡片 -->
<template>
  <div>
    <li>
      <div class="card-item" :style="{borderColor: $store.state.theme}"></div>
      <div class="card-shadow" :style="{backgroundImage: 'linear-gradient(135deg, #fff 10%,' + $store.state.theme + ' 100%)'}"></div>
    </li>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
  li {
    width: 222px;
    display: inline-block;
    margin: 0 15px 30px;
    list-style: none;
    zoom: 1;
    opacity: .8;
    position: relative;
    .card-item {
      border: solid 1px;
      padding: 28px 0;
      height: 294px;
      text-align: center;
      background: #fff;
      border-radius: 8px;
      position: relative;
      z-index: 10;
    }
    .card-shadow { //卡片的阴影
      width: 198px;
      height: 315px;
      display: inline-block;
      border-radius: 8px;
      position: absolute;
      left: 33px;
      top: 44px;
      opacity: .6;
    }
  }
</style>