<template>
  <div id="app">
    <!-- keep-aline标签是vue自带的一个标签，解决
    每次页面请求的时候，ajax都去请求city。json数据
    多次请求，性能过低 -->
    <!-- exclude加上组件名字。是解决缓存的问题，让这个页面不缓存，
    因为我们在进页面的时候如果缓存了每次都是进的id1页面，进id2是不会在重新更新
    也可以在生命周期钩子activated里面解决 -->

    <keep-alive exclude="Detail">
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

</style>
