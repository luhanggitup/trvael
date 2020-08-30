<template>
  <div class="header">
    城市选择
      <router-link to="/">
         <div class="iconfont header-back">&#xe60a;</div>
      </router-link>
  </div>
</template>

<script>
export default {
  name:'CityHeader'

}
</script>

<style lang='stylus' scoped>
@import '~styles/varilbles'
.header{
  position relative
  overflow hidden
  height .86rem
  line-height .86rem
  text-align center
  color #fff
  background $bgcolor
  font-size .32rem 
}
.header-back{
  position absolute
  width .64rem
  top 0px
  left 0px
  text-align center
  font-size .4rem
  color #ffffff
}

</style>