<template>
	<view>
		<text class="content">通讯录</text>
		
		<!-- type="success"样式值 -->
		<icon type="success" size="30"></icon>
		
		  <!-- 滚动视图 -->
		<scroll-view class="scroll" scroll-x="true" scroll-y="true">
		<view class="group">
			<view class="item"> 222</view>
			<view class="item"> 222</view>
			<view class="item"> 222</view>
			<view class="item"> 222</view>
			<view class="item"> 222</view>
			<view class="item"> 222</view>
			<view class="item"> 222</view>
		</view>
		</scroll-view>
		
	<!-- 	轮播 -->
		<swiper class="swiper" circular="true" autoplay="true" duration="300" indicator-dots="true" indicator-color="#fff" indicator-active-color="#4cd964">
			<swiper-item class="swiper-item" mode="aspectFill"> <image src="../../static/chat-images/image1.jpg" class="swiper-image"></image></swiper-item>
		<swiper-item class="swiper-item" mode="aspectFill"> <image src="../../static/chat-images/image2.jpg" class="swiper-image"></image></swiper-item>	
		</swiper>
		
	<!-- 	图片 -->
	<image src="../../static/chat-images/image1.jpg" class="img" mode="aspectFill"></image>
	
<!-- 	视频   https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4--> 
 <video src="/static/video/test-video.mp4" autoplay="true" initial-time="2"></video>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

.scroll{
 border:1px solid red;
 box-sizing: border-box;
 height: 220rpx;
}
.group{
	white-space: nowrap;
}
 .item{
 		 width: 220rpx;
 		 height: 220rpx;
 		 background: royalblue;
		 display: inline-block;
		 margin-right: 10rpx;
 }
 .img{
	 
 }
 .swiper{
	 height: 400rpx;
 }
 .swiper-image{
	 width: 100%;
	 height: 500rpx;
 }
 .swiper-item{
	 padding: 20rpx;
	 box-sizing: border-box;
 }
</style>
