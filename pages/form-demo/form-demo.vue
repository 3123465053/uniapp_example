<template>
	<view>
		<!-- 自带表单 -->
		<form @submit="onSubmit">
			<view class="row">
				<input name="username" type="text"/>
			</view>
			
			<view class="row">
				<textarea name="content" type="text"/>
			</view>
			
			
			<view>
				<radio-group name="gender">
				<radio value="男">男</radio>
				<radio value="女">女</radio>
				<radio value="保密" checked>保密</radio>
				</radio-group>
			</view>
			<view>
				<picker :range="options" name="school" :value="selectValue" @change="onChange">
					<view>点击选择学历：{{options[selectValue]}}</view>
				</picker>
			</view>
			<view>
				<button form-type="submit" type="primary">提交表单</button>
				<button form-type="reset">重置表单</button>
			</view>
		
		</form>
	   
	   <input type="text" v-model="title"/>
	   <view>原标题：{{title}}</view>
	   <view>修改后：{{changeTitle}}</view>
	   
	   <publicBox></publicBox>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectValue:0,
				options:['高中','大专','本科','博士'],
				title:""
			};
		},
		methods:{
			onSubmit(e){
				console.log(e.detail.value)
			},
			onChange(e){
				this.selectValue=e.detail.value
			}
		},
		
		//计算复杂，需要缓存的写在这里
		computed:{
			changeTitle(){
			return this.title.toLocaleUpperCase()	
			}
		}
	}
</script>

<style lang="scss">

</style>
