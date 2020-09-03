<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyWord" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="search" v-show="keyWord">
      <ul>
        <li class='item-search border-bottom' 
        v-for="item in list" :key="item.id">{{item.name}}</li>
        <li class="item-search border-bottom" v-show="noData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: "CitySearch",
  props:{
   citie: Object
  },
  data(){
    return{
      keyWord:'',
      list:[],
      timer:null
    }
  },
  computed:{
    noData(){
      return !this.list.length
    }
  },
  // 监听器监听数据变化
  watch:{
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)     
      }
      if(!this.keyWord){
        this.list =[]
        return
      }
      // 函数截流
      this.timer = setTimeout(() => {
        const result = []   
        for (let i in this.citie){
          this.citie[i].forEach( value => {
            if(value.spell.indexOf(this.keyWord) > -1 ||
                 value.name.indexOf(this.keyWord) > -1){
                   result.push(value)
                 }           
          });       
        } 
        this.list = result   
      }, 100);
    }
  },
  // 解决不能拖动
  mounted () {
    this.Bscroll = new Bscroll(this.$refs.search)
  }
};
</script>

<style lang='stylus' scoped>
@import '~styles/varilbles';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgcolor;
}

.search input {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.1rem;
  height: 0.62rem;
  line-height: 0.62rem;
  text-align: center;
  border-radius: 0.06rem;
  color: #666;
}
.search-content{
  z-index 1
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  background #eee
}
.item-search{
   line-height .62rem
   padding-left .2rem
   color #666
   background #fff
 }
</style>