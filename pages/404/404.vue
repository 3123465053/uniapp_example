<template>
	<view>
		<h1>页面未找到 404</h1>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			let timer=setTimeout(()=>{
				clearTimeout(timer)        //清除计时器
				
			
			  //底部tab切换时需要用此路由来跳转
				uni.switchTab({
					url:"/pages/index/index"       
				})
				// uni.navigateTo({
				// 	url:"/pages/index/index"
				// })
			},
			2000)           
			// 两秒后跳回首页
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
