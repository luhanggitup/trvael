<template>
  <div class="list" ref="wrapper">
    <div >
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
          <div class="item border-topbottom">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: "Citylist",
  mounted (){
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
  padding-left: 0.2rem;
  color: #666;
  font-size: 0.26rem;
}

.button-list {
  overflow: hidden;
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
}

.button-wrapper {
  float: left;
  width: 33.33%;
}

.button {
  text-align: center;
  margin: 0.1rem;
  padding: 0.1rem 0;
  border: 0.02rem solid #ccc;
  border-radius: 0.06rem;
}

.item-list .item {
  line-height: 0.76rem;
  color: #666;
  padding-left: 0.2rem;
}
</style>