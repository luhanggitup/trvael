import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import mutations from "./muations"

Vue.use(Vuex)





export default new Vuex.Store({
  // state里面存放的是公用的数据,全局公用
  state,
    // city是上次存储的数据或者是默认值
  // 接收组件通过dispatch传过来的值
  // ctx是上下文。city是值
  // actions:{
  //   change(ctx,city){
  //     // ctx拿到commit方法,传递给muations
  //     ctx.commit("changeCity",city)
  //   }
  // 因为这里没有用异步操作以及操作非常简单，不是批量操作
  // 所有components组件可以直接通过commit来操作，省掉disptah步骤
  // },
  // action调用muatioons,通过commit
  mutations
    // city是外部传递过来的值
    // state是所有的公用数据 
})