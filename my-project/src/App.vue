<template>
  <div id="app">
    <!-- keep-aline标签是vue自带的一个标签，解决
    每次页面请求的时候，ajax都去请求city。json数据
    多次请求，性能过低 -->

    <keep-alive>
       <router-view/>
    </keep-alive> 
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* *{
  touch-action:manipulation;
} */
</style>
