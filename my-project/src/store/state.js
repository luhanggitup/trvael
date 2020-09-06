// 用了localStorage如果用户用的是隐身模式。或者关闭了浏览器储存功能，
// 代码就会报错，所以要用try.catch语法
let defaultCity = "上海"
try {
  if(localStorage.city){
    defaultCity = localStorage.city
  }
} catch (error) { 
}

export default {
  city: defaultCity 
}