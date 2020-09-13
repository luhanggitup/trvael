<template>
<div>
  <router-link tag="div"  to="/" class="header-abs" v-show="showAbs">
     <div class="iconfont header-abs-back">&#xe60a;</div>
  </router-link>
  <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
         <div class="iconfont header-fixed-back">&#xe60a;</div>
      </router-link>
      景点详情
  </div>
</div>
</template>

<script>
export default {
  name:"DetailHeader",
  data () {
    return{
      showAbs:true,
      // 景点详情渐隐渐现。动态的绑定一个样式
      opacityStyle:{
        opacity:0
      }
    }
  },
  methods:{
    handleScroll () {
      const top = document.documentElement.scrollTop
      if( top > 60){
        let  opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      }else{
        this.showAbs = true
      }
    }
  },
  activated () {
    // 全局事件，绑定在全局window上面
    window.addEventListener('scroll',this.handleScroll)
  },
  // 解绑全局事件
  deactived () {
    removeEventListener('scroll',this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varilbles'
.header-abs{
  position absolute
  left .2rem
  top .2rem
  width .8rem
  height .8rem
  line-height .8rem
  text-align center
  border-radius .4rem
  background rgba(0,0,0, .8)
}
.header-abs-back{
  color #fff
  font-size .4rem
}
.header-fixed{
  z-index 2 
  position fixed
  top 0
  left 0
  right 0
  height .86rem
  line-height .86rem
  text-align center
  color #fff
  background $bgcolor
  font-size .32rem 
}
.header-fixed-back{
  position absolute
  width .64rem
  top 0px
  left 0px
  text-align center
  font-size .4rem
  color #ffffff
}


</style>