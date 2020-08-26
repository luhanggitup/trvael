<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key='item.id'>
        <img class='swiper-img' :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination:".swiper-pagination",
        loop:true
      },
      swiperList:[
        {
          id:'001',
          imgUrl:'https://imgs.qunarzz.com/vs_ceph_vcimg/7c151dc2ebcab3c802569ef285aa634f.jpeg'
        },
        {
          id:'002',
          imgUrl:'https://imgs.qunarzz.com/vc/57/28/30/a8bc10efbf8d119be4ea526ea6.jpg_92.jpg'
        }
      ]
    };
  },
};
</script>

<style>
.swiper-pagination-bullet-active{
  background:white;
}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 31.25%;
  background:red;
}
.swiper-img {
  width: 100%;
}
</style>