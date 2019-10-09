<template>
	<view>
		<!-- {{shopCarList}} -->
		 <Tabs
		        :TabList="TabList"
		        :currentTab="current"
		        @tabs="tabsChange"
		    >
		        <TabPane>
		            <view>
						<uni-card v-for="(card,index) in cards" :key="index">
							<view class="tou clear">
								<image :src="card.tp1"></image>
								<view class="mingzi clear">
									<a>
										<span class="title">{{card.jt}}</span>
										<span class="jiantou"> > </span>
									</a>
									<view class="xiaobiao" v-for="xiaobiao in card.xiaobiaos">
										{{xiaobiao}}
									</view>
								</view>
								<view class="wancheng">
									<p>{{card.wancheng}}</p>
								</view>
								<view>
								<scroll-view class="scroll-view_H" scroll-x="true">
									<view class="scroll-view-item_H" v-for="(huadong,index) in card.huadongs" :key="index">
										<view><image :src="huadong.img" mode=""></image></view>
										<view>{{huadong.name}}</view>
									</view>
								</scroll-view>
							</view>
							</view>
							
						<view class="xia clear">
							<view class="jiage">
								<span class="shuliang">共{{card.num}}件</span>
								<span class="jine">￥{{card.z_money}}</span>
							</view>
							<view class="anniu">
								<button size="mini" @click="back">再来一单</button>
							</view>
						</view>
						</uni-card>
					</view>
		        </TabPane>
		        <TabPane>
		            <view>
						 <uni-card v-for="(card1,index) in cards1" :key="index">
						 	<view class="tou clear">
						 		<image :src="card1.img"></image>
						 		<view class="mingzi clear">
						 			<a>
						 				<span class="title">{{card1.title}}</span>
						 				<span class="jiantou"> > </span>
						 			</a>
						 			<span class="shijian">
										{{card1.shijian}}
									</span>
						 		</view>
						 		<view class="wancheng">
						 			<p>{{card1.wancheng}}</p>
						 		</view>
						 	</view>
						 	<view class="fan">
								<view class="fanname" v-for="(fan,index) in fans" :key="index">
									<span>{{fan.name}}</span>
									<span class="geshu">X{{fan.geshu}}</span>
								</view>
							</view>
						 <view class="xia clear">
						 	<view class="jiage">
						 		<span class="shuliang">共10件</span>
						 		<span class="jine">￥0.01</span>
						 	</view>
						 	<view class="anniu">
						 		<button size="mini">评价</button>
								<button size="mini">再来一单</button>
						 	</view>
						 </view>
						 </uni-card>
					</view>
		        </TabPane>
		        <TabPane>
		            <view>
						<uni-card v-for="(card2,index) in cards2" :key="index">
							<view class="tou clear">
								<image :src="card2.img"></image>
								<view class="mingzi clear">
									<a>
										<span class="title">{{card2.title}}</span>
										<span class="jiantou"> > </span>
									</a>
									<span class="shijian">
																{{card2.shijian}}
															</span>
								</view>
								<view class="wancheng">
									<p>{{card2.wancheng}}</p>
								</view>
							</view>
							<view class="fan">
														<view class="fanname" v-for="(fan1,index) in fans1" :key="index">
															<span>{{fan1.name}}</span>
															<span class="geshu">X{{fan1.geshu}}</span>
														</view>
													</view>
						<view class="xia clear">
							<view class="jiage">
								<span class="shuliang">共10件</span>
								<span class="jine">￥0.01</span>
							</view>
							<view class="anniu clear">
								<button size="mini">退款进度</button>
								<button size="mini" >再来一单</button>
							</view>
						</view>
						</uni-card>
					</view>
		        </TabPane>
		    </Tabs>
	</view>
</template>

<script>
	import {
	    mapState,
	} from 'vuex'
	import uniCard from "@/components/uni-card/uni-card";
	import Tabs from '@/components/wiszx-tabs/tabs.vue';
	import TabPane from '@/components/wiszx-tabs/tabPane.vue';
	export default {
		components: {uniCard,Tabs,TabPane},
		computed: mapState(['forcedLogin', 'hasLogin', 'userName','shopCarList']),
		data() {
			return {
				current:0,
				TabList:[
					{title:'全部订单'},
					{title:'待评价'},
					{title:'退款'}
				],
				//订单
				cards:[
						{
						tp1:'https://cube.elemecdn.com/1/7d/65861fbd5153897019d3c8997412cpng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed',
						jt:'粥店',
						xiaobiaos:['20减10','20减10','20减10','20减10','20减10'],
						wancheng:'已完成',
						num:1,
						z_money:1,
						huadongs:[
									{img:'../../static/img/zhou1.webp',name:'❤皮蛋瘦肉粥（经典）'},
									{img:'../../static/img/zhou2.webp',name:'南瓜粥'},
									{img:'../../static/img/zhou3.webp',name:'大枣山药粥'},
									{img:'../../static/img/zhou4.webp',name:'清火白粥'},
									{img:'../../static/img/zhou5.webp',name:'青菜粥'},
									{img:'../../static/img/zhou6.webp',name:'山药玉米咸粥'},
								],
						},
					],
				
				//评价
				cards1:[{
						img:'https://cube.elemecdn.com/1/7d/65861fbd5153897019d3c8997412cpng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed',
						title:'粥店',
						shijian:'2019-09-15 18:58',
						wancheng:'已完成'}],
				fans:[
					{name:'❤皮蛋瘦肉粥（经典）',geshu:'1'},
					{name:'南瓜粥',geshu:'1'},
					{name:'大枣山药粥',geshu:'1'},
					{name:'清火白粥',geshu:'1'},
					{name:'青菜粥',geshu:'1'},
					{name:'山药玉米咸粥',geshu:'1'},
					{name:'山药玉米咸粥',geshu:'1'},
					{name:'山药玉米咸粥',geshu:'1'},
					{name:'山药玉米咸粥',geshu:'1'},
				],
				//退款
				cards2:[{
						img:'https://cube.elemecdn.com/1/7d/65861fbd5153897019d3c8997412cpng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed',
						title:'粥店',
						shijian:'2019-09-15 18:58',
						wancheng:'已取消'}],
				fans1:[
					{name:'❤皮蛋瘦肉粥（经典）',geshu:'1'},
					{name:'南瓜粥',geshu:'1'},
					{name:'大枣山药粥',geshu:'1'},
					{name:'清火白粥',geshu:'1'},
					{name:'青菜粥',geshu:'1'},
				],
						
}
		},
		methods: {
			 tabsChange(index){
				this.current = index;
			},
			back(){
				uni.navigateTo({
					url:'../daohang/daohang'
				})
			}
		},
		 components:{
		        Tabs,
		        TabPane
		    },
			// watch:{
			// 	shopCarList(){
			// 		this.cards = this.shopCarList;
			// 	}
			// },
		onLoad(){
			// if(this.addorderlist){
			this.cards = this.shopCarList;
			// }
		}
	}
</script>

<style scoped>
	.scroll-view_H {
			white-space: nowrap;
			width: 100%;
		}
		.scroll-view-item_H {
			display: inline-block;
			width: 150upx;
			height: 160upx;
			margin: 2%  1% 2% 1%;
		}
		.scroll-view-item_H view:nth-child(1) image{
			width: 150upx;
			height: 110upx;
		}
		.scroll-view-item_H view:nth-child(2){
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-size: 12px;
		}
	
	
	
	
	
	
	
	.clear:after{
	  content:"";
	  display: block;
	  clear:both;
	}
	.tou{
		padding: 10px;
	}
	.tou image{
		width: 45px;
		height: 45px;
		float: left;
	}
	.tou .mingzi{
		width: 440upx;
		float: left;
		margin-left: 20upx;
	}
	.tou .mingzi a{
		width: 440upx;
	}
	.tou .mingzi .xiaobiao{
		font-size: 10px;
		line-height: 10px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		display: inline-block;
		margin-right: 10upx;
		border: 1upx solid #DD524D;
		background-color: #DD524D;
		border-radius: 10upx;
	}
	.tou .wancheng{
		float: right;
	}
	.tou .title{
		width: 400upx;
		font-size: 14px;
		display: inline-block;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		line-height: 30upx;
	}
	.tou .jiantou{
		font-size: 16px;
		float: right;
	}
	
	
	.fan{
		height: 180upx;
		overflow-y: scroll;
		
	}
	.fanname .geshu{
		float: right;
	}
	
	
	
	.xia{
		margin: 0 20upx 20upx 0;
		float: right;
	}
	.xia .jiage{
		float: right;
	}
	.xia .jiage .shuliang{
		font-size: 10px;
		color: #8F8F94;
		margin-right: 10px;
	}
	.xia .jiage .jine{
		font-size: 14px;
	}
	.xia .anniu{
		margin-top: 40upx;
	}
	.xia .anniu button{
		margin-left: 20upx;
		float: right;
	}
</style>
