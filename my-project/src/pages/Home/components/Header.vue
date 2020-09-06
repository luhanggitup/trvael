<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe60a;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe627;</span>
      输入城市/景点 /游玩
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!-- {{this.$store.state.city}} -->
        <!-- 映射后的写法 -->
        {{this.city}}
        <span class="iconfont .arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "HomeHeader",
  computed:{
    // 把vuex里面city数据映射到computed这个组件里面
    ...mapState(['city'])
  }
};
</script>

<style lang='stylus' scoped>
// 整体布局
@import '~styles/varilbles';

.header {
  display: flex;
  background: $bgcolor;
  line-height: 0.86rem;
  height: 0.86rem;
  line-height: 0.86rem;
  color: #fff;
}

.header-left {
  width: 0.64rem;
  float: left;
}

.back-icon {
  text-align: center;
  font-size: 0.4rem;
}

// 内容部分
.header-input {
  flex: 1;
  height: 0.64rem;
  line-height: 0.64rem;
  margin-top: 0.12rem;
  padding-left: 0.2rem;
  margin-left: 0.2rem;
  background: #fff;
  border-radius: 0.1rem;
  color: #ccc;
}

.header-right {
  min-width  1.04rem
  padding 0 .1rem
  float: left;
  text-align: center;
	color #fff
}

.arrow-icon {
  margin-left: -0.14rem;
  font-size: 0.24rem;
  background: red;
}
</style>
