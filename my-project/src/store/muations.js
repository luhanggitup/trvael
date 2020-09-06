export default {
  changeCity (state,city ) {
    state.city = city
    // localstorage是存储用户点击的默认数据
    try {
      localStorage.city = city       
    } catch (error) {       
    }
  }
}