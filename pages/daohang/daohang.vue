<template>
	<view>
		<sanjicaidan></sanjicaidan>
		<view class="title">
			<view class="subTitle" v-for="(item,index) in titleText" v-html="item" @tap="change(index)" :class="{active:index==reindex}"></view>
		</view>
		<view class="content" v-if="reindex==0">
			<find></find>
		</view>
		<view class="content" v-else-if="reindex==1">
			<pj></pj>
		</view>
		<view class="content" v-else-if="reindex==2">
			<hc></hc>
		</view>
	</view>
</template>

<script>
	import find from '../../components/subdaohang/find.vue';
	import pj from '../../components/subdaohang/pj.vue';
	import hc from '../../components/subdaohang/hc.vue';
	import sanjicaidan from '../../components/subdaohang/sanjicaidan.vue';
	export default {
		components:{find,pj,hc,sanjicaidan},
		data() {
			return {
				titleText:[
					'点菜',
					'评价',
					'商家'
				],
				reindex:0
			}
		},
		methods: {
			change(value){
				this.reindex = value;
			}
		}
	}
</script>

<style scoped>
	.title{
		font-size: 34upx;
		display: flex;
		line-height: 80upx;
		height: 80upx;
		margin-top: 30upx;
	}
	.subTitle{
		margin: 0 40upx;
		
	}
	.active{
		border-bottom:4upx solid #F0AD4E;
		color: black;
		font-weight: bold;
	}
	.content{
		
	}
</style>
