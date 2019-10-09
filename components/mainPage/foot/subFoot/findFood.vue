<template>
	<view class="wrapper">
		<view class="tip">
			<button v-for="(item,index) in tipList" :class="{activeColor:index==0}">{{item}}</button>
		</view>
		<view class="botton">
			<view class="subList" v-for="item in subList">
				<view class="pic">
					<image :src="item.src"></image>
				</view>
				<view class="content">
					<view class="subTitle" v-html="item.title"></view>
					<view class="subcontent">
						<view class="con">
							月售
							{{item.count}}
						</view>
						<view class="subcontent_right">
							<view>{{item.time+'分钟'}}</view>
						</view>
					</view>
					<view style="font-size: 24upx;">
						{{'起送 ￥'+item.starts+ ' 配送 ￥' + item.pages }}
					</view>
					<view style="display:flex ;">
						<view  v-for='item001 in item.goodText' class="goodtext">
							<!-- <button v-html='item001' style='margin-right: 20upx;font-size: 24upx; color: #DD524D;'></button> -->
							<view v-html='item001' style="border: 2upx solid #DD524D; font-size: 24upx; margin-right: 20upx; color: #FB4E44; padding: 2upx 10upx;"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'findFood',
		data(){
			return{
				tipList:[
					'超值套餐',
					'热销爆款',
					'店铺招聘',
					'人气单品'
				],
				subList:[
					{
						src:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4206619892,124567116&fm=15&gp=0.jpg',
						title:'霸气冰淇淋草莓',
						fen:4.8,
						count:78,
						time:39,
						long:2.3,
						starts:29,
						pages:0,
						goodText:[
							'30减14',
							'7.83折'
						],
					},{
						src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2964048869,826681137&fm=26&gp=0.jpg',
						title:'芒果班戟           ',
						fen:4.8,
						count:960,
						time:30,
						long:2.7,
						starts:14.8,
						pages:2.96,
						goodText:[
							'14减6',
							'7.3折'
						],
					},{
						src:'https://f12.baidu.com/it/u=660933137,2174578895&fm=72',
						title:'MOJI招牌三明治',
						fen:4.8,
						count:488,
						time:32,
						long:1.3,
						starts:18,
						pages:1,
						goodText:[
							'25减12',
							'7.0折'
						],
					},{
						src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2799074501,336197342&fm=26&gp=0.jpg',
						title:'薯条',
						fen:4.8,
						count:553,
						time:30,
						long:5.3,
						starts:20,
						pages:0,
						goodText:[
							'30减12',
							'7.6折'
						],
					},{
						src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1054759483,190498909&fm=26&gp=0.jpg',
						title:'蛋炒年糕',
						fen:4.8,
						count:30,
						time:30,
						long:2.0,
						starts:25,
						pages:5,
						goodText:[
							'30减15',
							'7.8折'
						],
					},{
						src:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2459780076,1976916866&fm=26&gp=0.jpg',
						title:'南瓜饼',
						fen:4.8,
						count:404,
						time:30,
						long:2.7,
						starts:13,
						pages:2,
						goodText:[
							'30减17',
							'7.0折'
						],
					},{
						src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2098511337,1169693441&fm=26&gp=0.jpg',
						title:'汤圆',
						fen:4.8,
						count:104,
						time:35,
						long:2.5,
						starts:7,
						pages:0,
						goodText:[
							'30减15',
							'7.7折'
						],
					},{
						src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2305273641,2481964184&fm=26&gp=0.jpg',
						title:'黑鸭鸭锁骨',
						fen:4.8,
						count:430,
						time:40,
						long:2.5,
						starts:15,
						pages:4,
						goodText:[
							'30减12',
							'7.1折'
						],
					},{
						src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=213864067,4276143179&fm=26&gp=0.jpg',
						title:'红豆布丁烤奶',
						fen:4.7,
						count:407,
						time:38,
						long:2.5,
						starts:10,
						pages:4,
						goodText:[
							'25减4',
							'7.0折'
						],
					},{
						src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3207460053,3692195524&fm=26&gp=0.jpg',
						title:'手工咖啡',
						fen:4.5,
						count:14,
						time:30,
						long:2.5,
						starts:15,
						pages:0,
						goodText:[
							'18减6',
							'7.6折'
						],
					},
				],
			}
		}
	}
</script>

<style>
	.wrapper{
		margin: 0 15upx;
	}
	.wrapper .tip{
		display: flex;
		justify-content: center;
		margin-top: 40upx 0 20upx 0;
	}
	.wrapper .tip button{
		padding: 10upx 20upx;
		height: 60upx;
		line-height:45upx;
		font-size: 32upx;
		color: #8F8F94;
	}
	.wrapper .botton{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.wrapper .botton .subList{
		width: 48%;
		margin:20upx 0;
		border-radius: 10upx 10upx 0 0;
		overflow: hidden;
	}
	.wrapper .botton .subList .pic image{
		width: 100%;
		height: 240upx;
	}
	.wrapper .botton .subList .content{
		margin-left: 20upx;
	}
	.wrapper .botton .subList .content .subTitle{
		font-size: 32upx;
		overflow-wrap: break-word;
		overflow: auto;
		font-weight: bold;
		margin-top: 10upx;
	}
	.wrapper .botton .subList .content .subcontent{
		font-size: 20upx;
		display: flex;
		justify-content: space-between;
	}
	.wrapper .botton .subList .content .subcontent .subcontent_left{
		display: flex;
		margin: 0 20upx 0 0;
		color: #F0AD4E;
	}
	.wrapper .botton .subList .content .subcontent .subcontent_right{
		margin-left: 45upx;
		display: flex;
		font-size: 24upx;
		margin-top: 5upx;
	}
	.con{
		font-size: 24upx;
	}
</style>
