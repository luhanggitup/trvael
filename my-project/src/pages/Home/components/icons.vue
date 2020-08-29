<template>
  <div class="icons">
    <swiper>
      <swiper-slide  v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of iconList" :key="item.id">
          <div class="icon-img">
            <img
              class="icon-img-content"
              :src="item.imgUrl"
            />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data () {
    return{
      iconList:[
        {
          id:'001',
          imgUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1543241925,4273539728&fm=26&gp=0.jpg',
          desc:'景点门票'
        },
        {
          id:'002',
          imgUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1543241925,4273539728&fm=26&gp=0.jpg',
          desc:'滑雪季节'
        },
        {
          id:'004',
          imgUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1543241925,4273539728&fm=26&gp=0.jpg',
          desc:'景点门票'
        },
        {
          id:'005',
          imgUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1543241925,4273539728&fm=26&gp=0.jpg',
          desc:'景点门票'
        },
        {
          id:'006',
          imgUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1543241925,4273539728&fm=26&gp=0.jpg',
          desc:'景点门票'
        },
        {
          id:'007',
          imgUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1543241925,4273539728&fm=26&gp=0.jpg',
          desc:'动物园'
        },
        {
          id:'008',
          imgUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1543241925,4273539728&fm=26&gp=0.jpg',
          desc:'观光车'
        },
        {
          id:'009',
          imgUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1543241925,4273539728&fm=26&gp=0.jpg',
          desc:'你变模样'
        }
      ]

    }
  },
  computed: {
    pages () {
      const pages =[]
      this.iconList.forEach(function(item,index){
        const page = Math.floor (index/8)
        if(!pages[page]){
         pages[page] = []
        }
        pages[page].push(item)
      })
      return pages

      // const pages =[]
      // this.iconList.array.forEach(item,index=> {
      //   const page = Math.floor(index/8)
      //   if(!pages[page]){
      //     pages[page] = []
      //   }
      //   pages[page].push(item)
      // });
      // return item
      }
  }
};
</script>

<style lang='stylus' scoped>
@import '~styles/varilbles';
@import '~styles/mixins'

.icons >>> .swiper-container{
  height 0
  padding-bottom 50%
  margin-top .1rem
}

.icon {
  position: relative;
  float: left;
  width: 25%;
  padding-bottom: 25%;
}

.icon img {
  width: 70%;
}

.icon-img {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0.44rem;
}

.icon-img-content {
  display: block;
  margin: 0 auto;
  height: 100%;
  border-radius: 0.5rem;
}

.icon-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  color: $derkTextColor;
  text-align: center;
  ellipsis()
}
</style>