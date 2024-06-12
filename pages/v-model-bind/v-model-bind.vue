<template>
	<view>
		<view>标题：{{title}}</view>
	<!-- 	双向绑定，当输入内容里面当改变时会，同时改变定义变量的值 -->
		<input type="text" v-model="title"/>
		
		-----------案例------------
		<view class="out">
			<view class="row">
				<input class="border" type="text" placeholder="请输入姓名..." v-model="message.uername"/>
			</view>
			<view class="row">
				<input class="border" type="text" placeholder="请输入联系电话" v-model="message.tel"/>
			</view>
			
			<view class="row">
				<textarea class="border" placeholder="请输入留言内容..." v-model="message.content"></textarea>
			</view>
			
			<view class="row">
				<button type="primary" @click="onSubmit">提交留言</button>
			</view>
			
		</view>
	{{message}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:"标题",
				message:{
					uername:"",
					tel:"",
					content:""
				}
			};
		},
		methods:{
			onSubmit(){
				console.log(this.message)
			}
		}
	}
</script>

<style lang="scss">
	.out{
		padding: 30rpx;
	}
	.border{
		border: 1px solid #eee;
		width: 100%;
		min-height: 80rpx;
		padding-left: 10rpx;
		box-sizing: border-box;
	}
	.row{
	margin-bottom: 10rpx;
	}

</style>
