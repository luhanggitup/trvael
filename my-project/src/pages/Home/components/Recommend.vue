<template>
  <div>
    <div class="title">热线推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
          <img class='item-img' :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button"> 查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
name:'HomeRecommend',
data(){
  return{
    recommendList :[
      {
        id:'001',
        imgUrl:'https://imgs.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_710x360_8c0a2156.jpg',
        title:'大连圣亚海洋世界大',
        desc:'浪费大连首站，浪漫的海洋主题公园大连圣亚海洋世界'
      },
       {
        id:'002',
        imgUrl:'https://imgs.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_710x360_8c0a2156.jpg',
        title:'大连圣亚海洋世界大',
        desc:'浪费大连首站，浪漫的海洋主题公园大连圣亚海洋世界'
      },
       {
        id:'003',
        imgUrl:'https://imgs.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_710x360_8c0a2156.jpg',
        title:'大连圣亚海洋世界大',
        desc:'浪费大连首站，浪漫的海洋主题公园大连圣亚海洋世界'
      }
    ]

  }

}
}
</script>

<style lang='stylus' scoped>
@import "~styles/mixins"
.title{
  margin-top .2rem
  line-height .6rem
  background #eee
  text-indent .2rem
}
.item{
  overflow hidden
  display:flex
  height 1.9rem
  // background red
}
.item-img{
  width 1.7rem
  height 1.7rem
  padding .1rem
}
.item-info{
  flex 1
  padding .1rem
  min-width 0
}
.item-title{
  line-height .54rem
  font-size .32rem
  ellipsis()
}
.item-desc{
  line-height .4rem
  color #ccc
  ellipsis()
}
.item-button{
  margin-top .12rem
  line-height .44rem
  background #ff9300
  padding 0 .2rem
  border-radius .06rem

}
</style>