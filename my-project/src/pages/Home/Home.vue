<template>
  <div>
    <home-header ></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header"
import HomeSwiper from "./components/swiper"
import HomeIcons from "./components/icons"
import HomeRecommend from "./components/Recommend"
import HomeWeekend from "./components/weekend"
import axios from "axios"
import {mapState} from "vuex"

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data() {
    return {
      lastCity:'',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  computed:{
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json?city=" + this.city)
      .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;     
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    },
  },
  // 生命周期函数
  // 页面挂载
  mounted() {
    this.lastCity = this.city
    this.getHomeInfo();
  },
  // keep-alive方式里面的生命周期函数
  // 当页面重新执行的时候运行
  activated(){
    if ( this.lastCity !== this.city) {
      // 这次的页面和上次的不相同的时候，重新发送ajax请求
      this.lastCity = this.city
      this.getHomeInfo();
    }  
  }
};
</script>

<style>
</style>