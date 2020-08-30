<template>
  <div class="list">
    <li class="item" v-for="(item,key) of cities" :key="key">
     {{key}}
    </li>
  </div>
</template>

<script>
export default {
  name:'CityAlphabet',
  props:{
    cities:{}
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varilbles'
.list{
  display flex
  flex-direction column
  justify-content center
  list-style none
  position absolute 
  top 1.58rem
  right 0
  bottom 0
  width .4rem
}
.item{
  text-align center
  line-height .4rem
  color $bgcolor
}

</style>