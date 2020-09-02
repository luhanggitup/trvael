<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object,
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    },
  },
  data() {
    return {
      touchstart: false,
      startY: 0,
      timer: null,
    };
  },
  update() {
    // 计算A字母到顶部的距离
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchstart = true;
    },
    // 字母表上下拖动
    handleTouchMove(e) {
      if (this.touchstart) {
        // 函数截流
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          // 你点击位置的距离
          const touchY = e.touches[0].clientY - 79;
          // 20是每个字母高度
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchstart = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/varilbles';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
}

.item {
  text-align: center;
  line-height: 0.4rem;
  color: $bgcolor;
}
</style>