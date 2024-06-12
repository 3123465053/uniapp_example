<template>
	<view class="container">
		 
		    <!-- 聊天列表 -->
         <view class="chat-body">
			<view class="chat-one">
				<image class="chat-face" src="@/static/chat-images/image1.jpg"/>
				<view class="chat-box">
			     <view class="chat-sender">机器人</view>		
				 <view class="chat-content">你好</view>		
				</view>
			</view> 
			
			<view class="chat-one">
				<image class="chat-face" src="@/static/chat-images/image1.jpg"/>
				<view class="chat-box">
			    <view class="chat-sender">机器人</view>		
				 <image class="chat-img" src="@/static/chat-images/image2.jpg" mode="widthFix"/>		
				</view>
			</view> 
			
			<view class="chat-one chat-one-mine">
				<view class="chat-box">
					<view class="chat-content"> 你好，机器人</view>
				</view>
				<image class="chat-face" src="@/static/chat-images/image3.webp"/>
			</view>
			
			<view class="chat-one chat-one-mine">
						 <view class="chat-box">
							 <image class="chat-img" src="@/static/chat-images/image4.jpg" mode="widthFix" />
						 </view>
						 <image class="chat-face" src="@/static/chat-images/image4.jpg"/>
			</view>
			
		 </view>
		 
	    <!--聊天输入 -->
		 <view class="chat-foot">
			  <input type="text" class="msg-input" cursor-spacing="16"/>
			  <image class="im-chose" src="@/static/chat-images/image1.jpg"/>
			  <view  class="send-btn">发送</view>		  
		 </view>
		 
		 
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

<style lang="scss" scoped>
  .container{
	  background-color: #f1f1f1;
	  min-height: 100vh;
  }
  
  
  
</style>
