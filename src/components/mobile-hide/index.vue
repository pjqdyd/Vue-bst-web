<!-- 在移动端会隐藏的组件 -->
<template>
  <div id="mobile-hide" v-show="isShow">
    <slot />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
        isShow: true
    };
  },
  mounted() {
    if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|IEMobile)/i)) {
      this.isShow = false;
    }
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
</style>