<template>
	<view class="wrapper">
		<view class="top">
			<view class="left">
				<view class="subTitle" v-for="(item,index) in coby" @tap="change(index)" :class="{active:index == reindex}">
					<view style="position: relative;background-color: 0 0 0;height: 60upx;z-index: 9;line-height: 60upx;">
						{{item.title}}
						<uni-icon type="arrowdown" size="20" v-if="index==0&&!cobyKey"></uni-icon>
						<uni-icon type="arrowup" size="20"v-else-if="index==0&&cobyKey"></uni-icon>
						<view style="position: absolute;left: 0;top:60upx;background-color: #ffffff;width: 700upx;" v-show="item.children&&reindex==0&&cobyKey">
						<view v-for="item001 in item.children" v-html="item001"></view>
						</view>
					</view>
				</view>
			</view>
			<view class="right">
				筛选
				<uni-icon type="arrowdown" size="20"></uni-icon>
			</view>
		</view>
		<view class="tip">
			
			<button v-for="(item,index) in tipList" :class="{activeColor:index==0}">{{item}}</button>
		</view>
		<view class="botton" style="position: relative; z-index: 1;">
			<view class="subList" v-for="item in subList">
				<view class="pic">
					<image :src="item.src"></image>
				</view>
				<view class="content">
					<view class="subTitle" v-html="item.title"></view>
					<view class="subcontent" style="font-size: 28upx; margin-top: 5upx;">
						<view class="subcontent_left">
							<uni-icon type="star-filled" size="10"></uni-icon>
							{{item.fen}}
							<!-- <view v-html='item.fen'></view> -->
						</view>
						<view class="subcontent_medol">
							月售
							{{item.count}}
							<!-- <span v-html='item.count'></span> -->
						</view>
						<view class="subcontent_right">
							<view>{{item.time+'分钟'}}</view>
							<view class="km">{{item.long+'km'}}</view>
						</view>
					</view>
					<view style="font-size: 28upx;">
						{{'起送 ￥'+item.starts+ ' 配送 ￥' + item.pages }}
					</view>
					<view style="display:flex ;">
						<view  v-for='item001 in item.goodText'>
							<!-- <button v-html='item001' style='margin: 5upx 40upx 0 0; font-size: 24upx; color: #DD524D;'></button> -->
							<view v-html="item001" style="margin: 5upx 40upx 0 0; font-size: 24upx; color: #FB4E44; border: 2upx solid #DD524D; padding: 2upx 10upx;"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from "../../../uni-icon/uni-icon.vue"
	export default {
		name:'aboutFood',
		components: {uniIcon},
		data(){
			return{
				coby:[
					{
						title:'综合排序',
						children:[
							'速度最快',
							'评分最高',
							'起送价最低',
							'配送费最低',
							'人均高到低',
							'人均低到高',
						]
					},
					{
						title:'销量'
					},
					{
						title:'距离'
					}
				],
				cobyKey:false,
				reindex:0,
				tipList:[
					'中秋大促',
					'减配送费',
					'减满优惠',
					'会员红包'
				],
				subList:[
					{
						src:'http://img2.imgtn.bdimg.com/it/u=3174351576,871072472&fm=26&gp=0.jpg',
						title:'叫了只炸鸡(小寨店)',
						fen:4.8,
						count:242,
						time:30,
						long:2.3,
						starts:15,
						pages:5,
						goodText:[
							'首单减14',
							'20减20',
						],
					},{
						src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4169490890,532185952&fm=26&gp=0.jpg',
						title:'大先生小碗菜(小寨店)',
						fen:4.6,
						count:5809,
						time:30,
						long:1.7,
						starts:19,
						pages:5,
						goodText:[
							'首单减14',
							'25减10',
						],
					},{
						src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4252003309,2746916249&fm=26&gp=0.jpg',
						title:'鱼小嫩酸菜鱼米饭(小寨店)',
						fen:4.3,
						count:4690,
						time:30,
						long:0.867,
						starts:18,
						pages:5,
						goodText:[
							'首单减14',
							'20减19',
						],
					},{
						src:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2277811963,3433037073&fm=26&gp=0.jpg',
						title:'麻辣香锅(小寨店)',
						fen:4.7,
						count:1242,
						time:36,
						long:1.9,
						starts:10,
						pages:0.5,
						goodText:[
							'首单减14',
							'29减18',
						],
					},{
						src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1158604147,1231149090&fm=26&gp=0.jpg',
						title:'黄焖鸡米饭(小寨店)',
						fen:4.4,
						count:2202,
						time:30,
						long:2.0,
						starts:15,
						pages:12,
						goodText:[
							'首单减14',
							'29减18',
						],
					},{
						src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=277262490,2422523972&fm=11&gp=0.jpg',
						title:'西茶(赛格国际DP店)',
						fen:4.6,
						count:2040,
						time:62,
						long:0.282,
						starts:30,
						pages:5,
						goodText:[
							'小奶茶果汁人气第三名',
							'高分店铺'
						],
					},{
						src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4058655780,2333755109&fm=26&gp=0.jpg',
						title:'一只酸奶牛',
						fen:5.0,
						count:177,
						time:30,
						long:1.9,
						starts:20,
						pages:3,
						goodText:[
							'首单减13',
							'新客减1'
						],
					},{
						src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569230979279&di=7875bf4387feee2ce3c08745fe3edbe5&imgtype=0&src=http%3A%2F%2Fwx2.sinaimg.cn%2Flarge%2Feafa0bdagy1fz2fnsdch6g20hs093q47.gif',
						title:'COCO都可茶饮(小寨百盛店)',
						fen:4.7,
						count:3231,
						time:30,
						long:0.53,
						starts:20,
						pages:4,
						goodText:[
							'首单减13',
							'38减10'
						],
					},{
						src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1583679077,1661725988&fm=26&gp=0.jpg',
						title:'杨翔豆皮涮牛肚(明德门店)',
						fen:4.6,
						count:647,
						time:30,
						long:1.3,
						starts:20,
						pages:0.5,
						goodText:[
							'首单减14',
							'28减3'
						],
					},{
						src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2789939092,2412522578&fm=26&gp=0.jpg',
						title:'云南过桥米线',
						fen:4.2,
						count:914,
						time:31,
						long:1.3,
						starts:15,
						pages:0.5,
						goodText:[
							'首单减13',
							'18减15'
						],
					},{
						src:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2637151623,4161512490&fm=26&gp=0.jpg/it/u=3448903465,140725496&fm=26&gp=0.jpg',
						title:'DQ(西安金鹰小寨店)',
						fen:5.0,
						count:221,
						time:30,
						long:0.043,
						starts:20,
						pages:4,
						goodText:[
							'首单减13',
							'7元无门槛红包'
						],
					},
					{
						src:'https://f10.baidu.com/it/u=663424511,2054105626&fm=72',
						title:'东北水饺(阳阳国际店)',
						fen:4.4,
						count:1413,
						time:32,
						long:1.8,
						starts:15,
						pages:0.5,
						goodText:[
							'首单减16',
							'10元减8'
						],
					},
				]
			}
		},
		methods:{
			change(value){
				this.reindex = value;
				if(value==0){
					this.cobyKey=!this.cobyKey;
				}
			}
		}
	}
</script>

<style>
	.wrapper{
		font-size: 30upx;
		color: #999999;
		margin: 0 10upx;
	}
	.wrapper .top{
		display: flex;
		justify-content: space-between;
	}
	
	.wrapper .top .left{
		display: flex;
		font-size: 32upx;
	}
	.wrapper .top .left .subTitle{
		margin: 0 20upx;
		display: flex;
	}
	.active{
		color: #333333;
		font-weight: bold;
	}
	.wrapper .tip{
		display: flex;
		justify-content: center;
		margin-top: 10upx;
	}
	.wrapper .tip button{
		font-size: 30upx;
	}
	.activeColor{
		color: #DD524D;
	}
	.wrapper .tip button{
		border: none;
		outline: none;
		padding: 0upx 10upx;
		height: 60upx;
		line-height: 60upx;
	}
	.wrapper .botton .subList{
		margin: 40upx 0 0 5upx;
		display: flex;
	}
	.wrapper .botton .subList .pic image{
		width: 180upx;
		height: 120upx;
		border-radius: 10upx;
	}
	.wrapper .botton .subList .content{
		margin-left: 20upx;
		flex: 1;
	}
	.wrapper .botton .subList .content .subTitle{
		font-size: 36upx;
		overflow-wrap: break-word;
		overflow: auto;
		font-weight: bold;
		color: #000000;
	}
	.wrapper .botton .subList .content .subcontent{
		font-size: 20upx;
		display: flex;
	}
	.wrapper .botton .subList .content .subcontent .subcontent_left{
		display: flex;
		margin: 0 20upx 0 0;
		color: #F0AD4E;
		width: 100upx;
	}
	.wrapper .botton .subList .content .subcontent .subcontent_medol{
		width: 140upx;
	}
	.wrapper .botton .subList .content .subcontent .subcontent_right{
		font-size: 24upx;
		display: flex;
		flex: 1;
		justify-content: flex-end;
	}
	.km{
		margin:  -8upx 0 0 20upx;
	}
</style>
