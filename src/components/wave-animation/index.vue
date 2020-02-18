<!-- 波浪动画组件 -->
<template>
  <div>
    <div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgTop">
        <div
          class="wave waveTop"
          :style="{backgroundImage:'url(' + require('@/assets/images/wave.png') +')' }"
        ></div>
      </div>
      <div class="waveWrapperInner bgMiddle">
        <div
          class="wave waveMiddle"
          :style="{backgroundImage:'url(' + require('@/assets/images/wave.png') +')' }"
        ></div>
      </div>
      <div class="waveWrapperInner bgBottom">
        <div
          class="wave waveBottom"
         :style="{backgroundImage:'url(' + require('@/assets/images/wave.png') +')' }"
        ></div>
      </div>
    </div>
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
@keyframes move_wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}
.waveWrapper {
  overflow: hidden;
  height: 150px;
  margin: auto;
}
.waveWrapperInner {
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 150px;
  bottom: -1px;
}
.bgTop {
  //z-index: 15;
  opacity: 0.4;
}
.bgMiddle {
  //z-index: 10;
  opacity: 0.7;
}
.bgBottom {
  //z-index: 5;
  opacity: 1;
}
.wave {
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat no-repeat;
  background-position: 0 bottom;
  transform-origin: center bottom;
}
.waveTop {
  background-size: 50% 120px;
  animation: move_wave 5s linear infinite;
}
 
.waveMiddle {
  background-size: 50% 100px;
  animation: move_wave 10s linear infinite;
}
.waveBottom {
  background-size: 50% 120px;
  animation: move_wave 15s linear infinite;
}

//添加适应宽高度
@media screen and (max-width: $_maxWidth) {
  .waveWrapper .waveAnimation .waveWrapperInner{
    height: calc(10vh) !important;
  }
  .waveTop {
    background-size:50% calc(10vh) !important;
  }
  .waveMiddle{
    background-size:50% calc(8vh) !important;
  }
  .waveBottom{
    background-size:50% calc(10vh) !important;
  }
}
</style>