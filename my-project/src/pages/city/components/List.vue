<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              <!-- {{this.$store.state.city}} -->
              <!-- mapstate映射后的写法 -->
              {{this.curreCity}}
              </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" 
               :key="item.id"
               @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-topbottom"
               v-for="innerItem of item"
               :key="innerItem.id"
              @click="handleCityClick(innerItem.name)"
          >
          {{innerItem.name}}
          </div>
        </div> 
      </div>
    </div>
 </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from "vuex"
export default {
  name: "Citylist",
   props:{
    cities:{},
    hot:Array,
    letter:String
  },

  computed:{
    ...mapState({
      // 可以是数组也可以是一个对象
      curreCity:'city'
    })
  },

  methods:{
    // 组件改变state需要通过dispatch改变Actions
    handleCityClick (city) {
      // this.$store.dispatch('change',city)
      // 因为这里没有用异步操作以及操作非常简单，不是批量操作
      // 所有components组件可以直接通过commit来改变数据，省掉disptah步骤
      // this.$store.commit('changeCity',city)
      // 这个写法是...mapMuations简便写法
      this.changeCity(city)
      // 路由跳转，需要跳转到哪个页面路劲
      this.$router.push('./')
    },
    ...mapMutations(['changeCity'])
  },
  

watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
   mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
};
</script>

<style lang='stylus' scoped>
@import '~styles/varilbles';

.border-topbottom, &:before {
  border-color: #ccc;
}

.border-topbottom, &:after {
  border-color: #ccc;
}

.border-topbottom, &:before {
  border-color: #ccc;
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  bottom: 0;
  left: 0;
  right: 0;
}

  .title {
    line-height: .54rem;
    background: #eee;
    padding-left: .2rem;
    color: #666;
    font-size: .26rem;
  }

  .button-list {
    overflow: hidden;
    padding: .1rem .6rem .1rem .1rem;
  }

  .button-wrapper {
    float: left;
    width: 33.33%;
  }

  .button {
    text-align: center;
    margin: .1rem;
    padding: .1rem 0;
    border: .02rem solid #ccc;
    border-radius: .06rem;
  }

  .item-list .item {
    line-height: .76rem;
    color: #666;
    padding-left: .2rem;
  }
</style>