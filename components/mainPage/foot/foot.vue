<template>
	<view class="">
		<view class="title">
			<view class="subTitle" v-for="(item,index) in titleText" v-html="item" @tap="change(index)" :class="{active:index==reindex}"></view>
		</view>
		<view class="content" v-show="reindex==0">
			<aboutFood></aboutFood>
		</view>
		<view class="content" v-show="reindex==1">
			<findFood></findFood>
		</view>
	</view>
</template>

<script>
	import aboutFood from '../foot/subFoot/aboutFood.vue';
	import findFood from '../foot/subFoot/findFood.vue';
	export default {
		name:'foot',
		components:{aboutFood,findFood},
		data(){
			return{
				titleText:[
					'附近商家',
					'发现好菜'
				],
				reindex:0
			}
		},
		methods:{
			change(value){
				this.reindex = value;
			}
		}
	}
</script>

<style scoped>
	.title{
		font-size: 40upx;
		display: flex;
		font-weight: bold;
		width: 700upx;
		line-height: 80upx;
		height: 80upx;
		margin-bottom: 20upx;
		/* border-bottom: 1upx solid #666666; */
	}
	.subTitle{
		margin:0 20upx;
	}
	.active{
		border-bottom:8upx solid #F0AD4E;
		color: #F0AD4E;
	}
	.content{
		
	}
</style>
