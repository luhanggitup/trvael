<template>
  <div class="header">
    <div class="header-left">
		<div class="iconfont back-icon">&#xe60a;</div>
		</div>
    <div class="header-input">
			<span class="iconfont">&#xe627;</span>
			输入城市/景点	/游玩
			</div>
    <div class="header-right">
			{{this.city}}
		<span class="iconfont .arrow-icon">&#xe64a;</span>
		</div>
  </div>
</template>

<script>
export default {
	name: "HomeHeader",
	props : {
		city : String
	}
};
</script>

<style lang='stylus' scoped>
// 整体布局
@import '~styles/varilbles';
.header {
  display: flex;
	background:$bgcolor;
	line-height .86rem
	height:.86rem;
	line-height: .86rem;
	color:#fff
}
.header-left {
  width: 0.64rem;
  float: left;
}
.back-icon{
	text-align:center;
	font-size:.4rem;
}

// 内容部分
.header-input {
  flex: 1;
	height:.64rem;
	line-height:.64rem;
	margin-top:.12rem;
	padding-left:.2rem;
	margin-left:.2rem;
	background:#fff;
	border-radius:.1rem;
	color:#ccc;
}
.header-right {
  width: 1.24rem;
  float: left;
	text-align:center;
}
 .arrow-icon{
	margin-left -.14rem
	font-size:.24rem;
	background red
}
</style>
