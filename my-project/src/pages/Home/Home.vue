<template>
  <div>
   <home-header></home-header>
   <home-swiper></home-swiper>
   <home-icons></home-icons>
   <home-recommend></home-recommend>
  </div> 
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons  from './components/icons'
import HomeRecommend from './components/Recommend'
export default {
name:'Home',
components : {
  HomeHeader,
  HomeSwiper,
  HomeIcons,
  HomeRecommend
}
}
</script>

<style>
 
</style>