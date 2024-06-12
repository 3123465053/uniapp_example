<template>
	<view>
		<text class="content">发现</text>
		
		<!-- 引用下面data返回值 支持所有常见类型-->
		<text> {{title}}</text>
		
		<!-- 如果下面的state值为真就显示，否则显示v-else -->
		<view v-if="state">微信</view>
		<view v-else>H5</view>
		
	     <view v-show="state">是否显示</view>
		 
		<!-- 循环  key刷新-->
		 <view class="goods" v-for="(item,index) in goods" :key="index">
			 <view>商品名称：{{item.title}} -  价格：¥{{item.price}}</view> 
		 </view>
		 
		  <!-- 不能解析html 第二种可以 -->
		  <view>{{code}}</view>
		  <view v-html="code"></view>
		  
		<!--  属性值（动态绑定）需用v-bind 下面是简写 -->
		  <image v-bind:src="img"></image>
		  <image :src="img"></image>
		  <image :src="'/static/chat-images/image'+item+'.jpg'" v-for="(item,index) in [1,2,4]"></image>
		  
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img:"../../static/chat-images/image1.jpg",
		       code:"<h1>标题1</h1>",
				title:"\n微信小程序",
				state:true,
				goods:[
					{"title":"标题2",
					"price":23},
					{"title":"标题7",
					"price":43},
					{"title":"标题7",
					"price":63},
					{"title":"标7题",
					"price":73},
					
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
