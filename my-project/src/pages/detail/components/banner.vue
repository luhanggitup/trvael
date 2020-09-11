<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="https://tr-osdcp.qunarzz.com/tr-osd-tr-space/img/f1a9be7a999cfb38a16303c124814f70.jpg?ver=1"
        alt
      />
      <div class="banner-info">
        <div class="banner-title">
          大连海洋(AAAA)世界景区
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe641;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" 
    @close="handleClick"
    v-show="showGallary">

    </common-gallary>
  </div>

</template>

<script>
import CommonGallary from 'common/gallery/Gallery'
export default {
  name: "DetailBanner",
  data(){
    return{
      showGallary:false,
      imgs:[
        "https://imgs.qunarzz.com/sight/p0/201407/03/a584374ee80b738e2600d6bcaf1299e3.jpg_710x360_6933edac.jpg",
        "https://imgs.qunarzz.com/sight/p0/1905/c0/c03326de9866c8d8a3.img.jpg_710x360_5ecd468b.jpg"
      ]   
    }
  },
  methods:{
    handleBannerClick () {
      this.showGallary=true
    },
    handleClick () {
      this.showGallary = false
    }

  },
  components:{
    CommonGallary
  }
};
</script>

<style lang="stylus" scoped>
.banner {
  position relative
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}
.banner-img {
    width: 100%;
  }
.banner-info {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 0.6rem;
  color white
  background-image linear-gradient(top,rgba(0, 0, 0, 0),rgba(0, 0, 0, .8))
}
.banner-title {
  flex: 1;
  font-size .32rem
  padding 0 .2rem
 
}
.banner-number {
  padding: 0 .4rem;
  margin-top  .14rem
  height: .32rem;
  line-height: .32rem;
  border-radius: 0.2rem;
  background: rgba(0 0 0 .8);
}
.banner-icon{
  font-size .24rem
}
</style>