<template>
	<view>
		<text class="content">我的</text>
		
		<!-- onClick 点击后执行的函数，定义在下面的methods里， 第二个为简写格式-->
		<view v-on:click="onClick">{{title}}</view>
		<view @click="onClick">{{title}}</view>
		
		
	<view class="box" :style="{background:bgcolor}" @click="clickBg"></view>
	
	<view class="block" :class="{myactive:state}" @click="clickBlock"></view>
	
	<view class="nav">
		<view class="item" :class="navIndex==index?'active':''" v-for="(item,index) in navArr" :key="item.id" @click="navClick(index)">{{item.title}}</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			  // 此处定义变量
				state:false,
				bgcolor:"#c00",
				title:"点击事件",
				navArr:[
				{id:1,title:"首页"},
				{id:2,title:"咨询"},
				{id:3,title:"详情"},
				{id:4,title:"其他"}],
				navIndex:0,
			}
		},
		
		//此处定义函数
		methods: {
			onClick(){
				this.title="点击后的数据源"
			},
			clickBg(){
				let color="#"+String(Math.random()).substring(3,6);   //截取字符串6位作为随机颜色
				this.bgcolor=color;
			},
			clickBlock(){
				this.state=!this.state;
			},
			navClick(index){
				this.navIndex=index;
			}
		}
	}
</script>

<style>
.box{
	width: 200rpx;
	height: 200rpx;
}
.block{
	width: 300rpx;
	height: 300rpx;
	background: red;
}
.myactive{
	width: 400rpx;
	height: 400rpx;
	background: pink;
	border-radius: 20rpx;
}
.nav{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.item{
	flex: 1;
	line-height: 90rpx;
	background:#ccc;
	text-align: center;
}
.active{
		background:#1AA034;
		color: #fff;
}

</style>
