<template>
	<view class="wrapper">
		<view class="hahaha">
			<view class="box" v-for="(item,index) in titlecontext">
				<view class="left">
					<view class="left_title_a">
						<view class="left_title" v-html="item.title1" @tap="change(index)" :class="{active:index==reindex}"></view>
					</view>
					<view class="right">
						<view class="rm" v-html="item.title1"></view>
						<view class="rm-aa" v-for="(item001,index001) in item.childen" v-show="item.childen.length&&index==reindex" @tap="diancan">
							<view class="tz" >
								<view class="tp1">
									<img :src="item001.tp1" alt="图片错误">
								</view>
								<view class="tz2">
									<view class="jt">{{item001.jt}}</view>
									<view class="aoe">{{item001.aoe}}</view>
									<view class="ys">{{item001.ys}}</view>
									<view class="jg">￥{{item001.jg}}/份</view>
									<view class="zk">{{item001.zk}}</view>
									<view class="jsq">
										<button class="subjsq" @tap="sub(index,index001,item001.mount)">
											-
										</button>
										<view>{{item001.mount}}</view>
										<button class="subjsq" @tap="add(index,index001,item001.mount)">
											+
										</button>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="shangjia">
				<!-- <view class="title_1">
					<uni-icon type="chat" size="20"></uni-icon><br/>
					<view class="titleText">联系商家</view>
				</view> -->
				<view class="title_3">
					<button class="titleText" @click="goShopCar">加入购物车 </button>
				</view>
				<view class="title_2" @click="viewKey_f">
					<image :src="pic_src"></image>
					<view>
						￥{{sum}}
					</view>
				</view>
				<view class="title_3">
					<button class="titleText" @click="enter">立即支付</button>
				</view>
			</view>
			
			<!-- 购买调整 -->
			<view v-show="viewKey">
				<view class="choose">
					<view style="flex: 1;background-color: #000;opacity: .5;" @click="viewKey_f"></view>
					<view class="box_box">
						<view class="box" v-for="(item,index) in titlecontext">
							<view>
								<view class="rm-aa" v-for="(item001,index001) in item.childen" v-show="item.childen.length&&index==reindex&&item001.mount" @tap="diancan">
									<view class="tz" >
										<view class="tp1">
											<img :src="item001.tp1" alt="图片错误">
										</view>
										<view class="tz2">
											<view class="jt">{{item001.jt}}</view>
											<view class="jg">￥{{item001.jg*item001.mount}}</view>
											<view class="jsq">
												<button class="subjsq" @tap="sub(index,index001,item001.mount)">
													-
												</button>
												<view>{{item001.mount}}</view>
												<button class="subjsq" @tap="add(index,index001,item001.mount)">
													+
												</button>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
						
					</view>
						
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import {
	    mapState,
	    mapMutations
	} from 'vuex'
	import uniIcon from "../uni-icon/uni-icon.vue"
	export default {
		components: {uniIcon},
		computed: mapState(['forcedLogin', 'userName']),
		data() {
			return {
				titlecontext:[
					{
						title1:'热卖',
						childen:[
							{
								tp1:'http://img2.imgtn.bdimg.com/it/u=4276076153,1401269833&fm=26&gp=0.jpg',
								jt:'奥尔良鸡腿堡',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售420 赞5',
								zk:'0.71折 限1份 2份起购',
								jg:1.99,
								mount:0,
							},
							{
								tp1:'http://img0.imgtn.bdimg.com/it/u=3860002376,4084574030&fm=26&gp=0.jpg',
								jt:'麻辣豆腐',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售220 赞15',
								jg:6.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img5.imgtn.bdimg.com/it/u=2100654638,1369728777&fm=26&gp=0.jpg',
								jt:'素炒细面',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:5.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								rm:'叫了只鸡',
								tp1:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1799264791,2117008812&fm=26&gp=0.jpg',
								jt:'叫了只炸鸡',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售4020 赞500',
								jg:7.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
								
							},
						]
					},
					{
						title1:'折扣',
						childen:[
							{
								rm:'满减专区',
								tp1:'http://img3.imgtn.bdimg.com/it/u=3038768514,1720405735&fm=26&gp=0.jpg',
								jt:'炒肉片',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售120 赞5',
								jg:1.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
								
							},
							{
								rm:'进店必点',
								tp1:'http://img4.imgtn.bdimg.com/it/u=2451195952,1434338382&fm=26&gp=0.jpg',
								jt:'烤香肠',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售320 赞54',
								jg:4.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
								
							},
							{
								rm:'家庭套餐',
								tp1:'http://img4.imgtn.bdimg.com/it/u=1951997671,3890603425&fm=26&gp=0.jpg',
								jt:'蛋炒饭',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售620 赞53',
								jg:6.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
								
							},
							{
								rm:'啤酒炸鸡',
								tp1:'https://f10.baidu.com/it/u=3482215282,1585577056&fm=72',
								jt:'炸鸡啤酒店',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞58',
								jg:7.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
								
							},
						]
					},
					{
						
						title1:'买赠',
						childen:[
							
							{
								rm:'精选饮料',
								tp1:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2897880905,2584695437&fm=26&gp=0.jpg',
								jt:'饮料',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售1420 赞532',
								jg:17.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
								
							},
							{
								rm:'可口可乐',
								tp1:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1292556052,182680624&fm=26&gp=0.jpg',
								jt:'可口可乐',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售4020 赞536',
								jg:14.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
								
							},
							{
								rm:'鸡&伴侣',
								tp1:'http://img5.imgtn.bdimg.com/it/u=3203469423,2648938914&fm=26&gp=0.jpg',
								jt:'特好吃',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售3420 赞54',
								jg:15.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
								
							},
							{
								tp1:'http://img5.imgtn.bdimg.com/it/u=2100654638,1369728777&fm=26&gp=0.jpg',
								jt:'素炒细面',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:4.9,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							}
						]
					},
					{
						title1:'叫了只鸡',
						childen:[
							{
								tp1:'http://img5.imgtn.bdimg.com/it/u=2100654638,1369728777&fm=26&gp=0.jpg',
								jt:'素炒细面',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:1.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img0.imgtn.bdimg.com/it/u=3803955261,927096685&fm=26&gp=0.jpg',
								jt:'叫了只鸡',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:10.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img3.imgtn.bdimg.com/it/u=2605373761,2281119648&fm=26&gp=0.jpg',
								jt:'叫了只鸡(麻辣)',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:13.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img2.imgtn.bdimg.com/it/u=1306955412,988083962&fm=26&gp=0.jpg',
								jt:'叫了只鸡(黑胡椒)',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:18.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img5.imgtn.bdimg.com/it/u=1008894142,599833933&fm=26&gp=0.jpg',
								jt:'叫了只鸡(原味)',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:16.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							
						]
					},
					{
						title1:'满减专区',
						childen:[
							{
								tp1:'http://img2.imgtn.bdimg.com/it/u=2427388158,799771484&fm=26&gp=0.jpg',
								jt:'奥尔良鸡肉卷',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:15.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img1.imgtn.bdimg.com/it/u=751881730,2640271041&fm=26&gp=0.jpg',
								jt:'墨西哥鸡肉卷',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:18.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img5.imgtn.bdimg.com/it/u=1615029711,2149162844&fm=26&gp=0.jpg',
								jt:'老北京鸡肉卷',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:11.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img3.imgtn.bdimg.com/it/u=1748267283,4027343464&fm=26&gp=0.jpg',
								jt:'香辣鸡腿堡',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:10.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							}
						]
					},
					{
						title1:'进店必点',
						childen:[
							{
								tp1:'http://img3.imgtn.bdimg.com/it/u=3695100841,2806982550&fm=26&gp=0.jpg',
								jt:'小酥肉',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:16.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img5.imgtn.bdimg.com/it/u=2100654638,1369728777&fm=26&gp=0.jpghttp://img0.imgtn.bdimg.com/it/u=551330457,3732026589&fm=26&gp=0.jpg',
								jt:'网红芝士热狗棒',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:4.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img1.imgtn.bdimg.com/it/u=1217088486,1376429107&fm=26&gp=0.jpg',
								jt:'甘梅地瓜条',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:9.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img5.imgtn.bdimg.com/it/u=532566352,3453655357&fm=26&gp=0.jpg',
								jt:'黄金双皮奶',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:15.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img0.imgtn.bdimg.com/it/u=183668496,3240803640&fm=26&gp=0.jpg',
								jt:'玉米布丁(6个)',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:13.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							}
						]
					},
					{
						title1:'家庭套餐',
						childen:[
							{
								tp1:'http://img0.imgtn.bdimg.com/it/u=409883039,621197161&fm=26&gp=0.jpg',
								jt:'欢乐全家桶',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:146.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img4.imgtn.bdimg.com/it/u=3827816851,3616002805&fm=26&gp=0.jpg',
								jt:'炸鸡套餐',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:172.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img5.imgtn.bdimg.com/it/u=1593531197,2774388892&fm=26&gp=0.jpg',
								jt:'网红辣酱',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:45.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img4.imgtn.bdimg.com/it/u=3928417679,3059384601&fm=26&gp=0.jpg',
								jt:'老回味酸梅汤',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:41.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							}
						]
					},
					{
						title1:'啤酒炸鸡',
						childen:[
							{
								tp1:'https://f10.baidu.com/it/u=2963243251,4011134796&fm=72',
								jt:'炸鸡啤酒',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:4.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img5.imgtn.bdimg.com/it/u=2021294246,2528902735&fm=26&gp=0.jpg',
								jt:'炸鸡啤酒',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:8.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img0.imgtn.bdimg.com/it/u=2735934067,3580780539&fm=26&gp=0.jpg',
								jt:'炸鸡啤酒',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:9.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img5.imgtn.bdimg.com/it/u=4163968378,4210253681&fm=26&gp=0.jpg',
								jt:'炸鸡啤酒',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:13.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							}
						]
					},
					{
						title1:'精选饮料',
						childen:[
							{
								tp1:'http://img5.imgtn.bdimg.com/it/u=2100654638,1369728777&fm=26&gp=0.jpg',
								jt:'素炒细面',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:1.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img2.imgtn.bdimg.com/it/u=808915093,2817994561&fm=15&gp=0.jpg',
								jt:'小鸡饮品',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:11.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img4.imgtn.bdimg.com/it/u=1651210524,2431668382&fm=15&gp=0.jpg',
								jt:'小鸡饮品',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:14.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img1.imgtn.bdimg.com/it/u=2983898989,2111059342&fm=26&gp=0.jpg',
								jt:'可口可乐',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:61.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
						]
					},
					{
						title1:'可口可乐',
						childen:[
							{
								tp1:'http://img1.imgtn.bdimg.com/it/u=2983898989,2111059342&fm=26&gp=0.jpg',
								jt:'可口可乐',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:61.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img2.imgtn.bdimg.com/it/u=1302761685,1513557671&fm=26&gp=0.jpg',
								jt:'可口可乐',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:71.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img3.imgtn.bdimg.com/it/u=1838129533,3540018858&fm=26&gp=0.jpg',
								jt:'可口可乐',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:21.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img5.imgtn.bdimg.com/it/u=507358295,3976804558&fm=26&gp=0.jpg',
								jt:'可口可乐',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:41.9,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							}
						]
					},
					{
						title1:'鸡&伴侣',
						childen:[
							{
								tp1:'http://img4.imgtn.bdimg.com/it/u=788102062,2380574916&fm=15&gp=0.jpg',
								jt:'小鸡饮品',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:31.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img0.imgtn.bdimg.com/it/u=2273460886,2412866280&fm=15&gp=0.jpg',
								jt:'小鸡饮品',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:71.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img2.imgtn.bdimg.com/it/u=808915093,2817994561&fm=15&gp=0.jpg',
								jt:'小鸡饮品',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:11.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img4.imgtn.bdimg.com/it/u=1651210524,2431668382&fm=15&gp=0.jpg',
								jt:'小鸡饮品',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:14.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							}
						]
					},
					{
						title1:'点鸡必看',
						childen:[
							{
								tp1:'http://img5.imgtn.bdimg.com/it/u=1853625116,2587339681&fm=15&gp=0.jpg',
								jt:'鸡块土豆',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:16.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img2.imgtn.bdimg.com/it/u=1269026893,3814317413&fm=15&gp=0.jpg',
								jt:'卤鸡肉',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:18.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img1.imgtn.bdimg.com/it/u=1389768851,3932644500&fm=26&gp=0.jpg',
								jt:'鸡块',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:17.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							{
								tp1:'http://img5.imgtn.bdimg.com/it/u=3136252750,1006156441&fm=26&gp=0.jpg',
								jt:'炸鸡翅',
								aoe:'奥尔良/鸡腿肉/面包片',
								ys:'月售400 赞111',
								jg:14.99,
								mount:0,
								zk:'0.71折 限1份 2份起购',
							},
							
						]
					},
				],
				reindex:0,
				title2:'满20减20；满30减28；满45减38；满88减52；满108减60；',
				viewKey:false,
				list0001:[],
				relist0002:[],
				title0001:'',
				shop_list0001:[],
				shop_relist0002:[],
				shop_title0001:'',
				
				pic_src:'data:image/jpeg;base64,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'
			}
		},
		methods: {
			...mapMutations(['addorderlist','shopCarList','shopCarList_ture']),
			change(value){
				this.reindex = value;
			},
			diancan(){
				if(!this.hasLogin){
					uni.showModal({
						title: '未登录',
						content: '您未登录，需要登录后才能继续',
						/**
						 * 如果需要强制登录，不显示取消按钮
						 */
						showCancel: !this.forcedLogin,
						success: (res) => {
							if (res.confirm) {
								/**
								 * 如果需要强制登录，使用reLaunch方式
								 */
								if (this.forcedLogin) {
			   						uni.reLaunch({
										url: '../login/login'
									});
								} else {
									uni.navigateTo({
									   url: '../login/login'
									});
								}
							}
						}
					});
				}
			},
			// 计数器
			add(index,index001,value){
				this.titlecontext[index].childen[index001].mount++;
			},
			sub(index,index001,value){
				if(value>0){
					this.titlecontext[index].childen[index001].mount--;
				}
			},
			
			// 确认支付
			enter(){
				const _this = this;
				// 订单支付页
				for (let i=0;i<_this.titlecontext.length;i++) {
					for(let j=0;j<_this.titlecontext[i].childen.length;j++){
						if(_this.titlecontext[i].childen[j].mount){
							_this.list0001.push(_this.titlecontext[i].childen[j])
							_this.title0001 = _this.titlecontext[i].title1;
						}
					}
				}
				for(let i=0;i<_this.list0001.length;i++){
					_this.relist0002.push(
						{
							src:_this.list0001[i].tp1,
							content:_this.list0001[i].jt,
							num:_this.list0001[i].mount,
							nowmoney:_this.list0001[i].mount*_this.list0001[i].jg,
							oldmoney:(_this.list0001[i].mount*_this.list0001[i].jg/0.8).toFixed(2)
						}
					)
				}
				_this.addorderlist(
					[{
						titles:_this.title0001,
						childcommoditylist:_this.relist0002
					}]
					
				)
				
				// 订单页
				// for (let i=0;i<_this.titlecontext.length;i++) {
				// 	for(let j=0;j<_this.titlecontext[i].childen.length;j++){
				// 		if(_this.titlecontext[i].childen[j].mount){
				// 			_this.shop_list0001.push(_this.titlecontext[i].childen[j])
				// 			_this.shop_title0001 = _this.titlecontext[i].title1;
				// 		}
				// 	}
				// }
				// for(let i=0;i<_this.shop_list0001.length;i++){
				// 	_this.shop_relist0002.push(
				// 		{
				// 			img:_this.shop_list0001[i].tp1,
				// 			name:_this.shop_list0001[i].jt,
				// 			nowmoney:_this.shop_list0001[i].mount*_this.shop_list0001[i].jg
				// 		}
				// 	)
				// }
				// _this.shopCarList(
				// 	{
				// 		tp1:'https://cube.elemecdn.com/1/7d/65861fbd5153897019d3c8997412cpng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed',
				// 		jt:_this.title0001,
				// 		xiaobiaos:['20减10','20减10','20减10','20减10','20减10'],
				// 		wancheng:'已完成',
				// 		num:_this.shop_relist0002.length,
				// 		z_money:_this.z_num,
				// 		huadongs:_this.shop_relist0002
				// 	}
					
				// )
				
				uni.navigateTo({
					url:'../../pages/gouwu/gouwu'
				})
			},
			goShopCar(){
				const _this = this;
				for (let i=0;i<_this.titlecontext.length;i++) {
					for(let j=0;j<_this.titlecontext[i].childen.length;j++){
						if(_this.titlecontext[i].childen[j].mount){
							_this.shopCarList_ture({
								img:_this.titlecontext[i].childen[j].tp1,
								name:_this.titlecontext[i].childen[j].jt,
								num:_this.titlecontext[i].childen[j].mount,
								money:_this.titlecontext[i].childen[j].mount*_this.titlecontext[i].childen[j].jg
							})
						}
					}
				}
				
				uni.navigateTo({
					url:'../../pages/shopCar/shopCar'
				})
			},
			
			viewKey_f(){
				const _this = this;
				for (let i=0;i<_this.titlecontext.length;i++) {
					for(let j=0;j<_this.titlecontext[i].childen.length;j++){
						if(_this.titlecontext[i].childen[j].mount){
							_this.viewKey = !_this.viewKey;
							break;
						};
					}
				}
				
			}
		},
		computed:{
			sum(){
				let sumAA = 0;
				const _this = this;
				for (let i=0;i<_this.titlecontext.length;i++) {
					for(let j=0;j<_this.titlecontext[i].childen.length;j++){
						sumAA += _this.titlecontext[i].childen[j].mount*_this.titlecontext[i].childen[j].jg;
					}
				}
				return sumAA.toFixed(2);
			},
			// z_num(){
			// 	let num = 0;
			// 	const _this = this;
			// 	for (let i=0;i<_this.titlecontext.length;i++) {
			// 		for(let j=0;j<_this.titlecontext[i].childen.length;j++){
			// 			if(_this.titlecontext[i].childen[j].mount){
			// 				num += _this.titlecontext[i].childen[j].mount*_this.titlecontext[i].childen[j].jg
			// 			}
			// 		}
			// 	}
			// 	return num;
			// },
			hasLogin(){
				return this.$store.state.hasLogin;
			}
		}
	}
</script>

<style scoped>
	.hahaha {
		position: relative;
		margin-top: 40upx;
		height: 700upx;
		overflow-y: scroll;	
		margin-bottom: 190upx;
	}
	.left_title_a{
		width: 150upx;
	}
	.wrapper .left .left_title{
		background-color:  #F8F8F8;
		text-align: center;
		font-size: 28upx;
		height: 80upx;
		line-height: 80upx;
		width: 150upx;
	}
	.wrapper .right{
		position: absolute;
		left:170upx;
		top: 0;
	}
	.tz{
		display: flex;
		flex-direction: row;
		margin-top: 30upx;
	}
	.tz2{
		margin-left: 20upx;
	}
	.tp1 img{
		width: 200upx;
		height: 160upx;
	}
	.rm{
		font-size: 28upx;
		background-color: #F0AD4E;
		height: 50upx;
		line-height: 50upx;
		width: 190upx;
		text-align: center;
		border-radius: 10upx;
		margin-top: 5upx;
	}
	.jt{
		font-size: 28upx;
		font-weight: bold;
		margin-top: -6upx;
	}
	.aoe{
		font-size: 24upx;
		margin-top: 5upx;
	}
	.ys{
		font-size: 24upx;
		color: #AAAAAA;
		margin-top: 5upx;
	}
	.zk{
		font-size: 24upx;
		margin-top: 5upx;
	}
	.jg{
		font-size: 28upx;
		color: #FB4E44;
		margin-top: 5upx;
		display: flex;
		justify-content: space-between;
	}
	.active{
		background-color: #FFFFFF !important;
	}
	.shangjia{
		width: 700upx;
		height: 150upx;
		border-radius: 75upx;
		background-color: #000000;
		margin: 25upx;
		position: fixed;
		bottom:10upx;
		left: 0;
		opacity: .8;
		display: flex;
		justify-content: space-between;
		overflow: hidden;
		z-index: 9;
	}
	.shangjia .title_1{
		height: 80upx;
		color: #FFFFFF;
		margin: 35upx;
		text-align: center;
		width: 150upx;
		font-size: 20upx;
		border-right: 3upx solid #FFFFFF ;
	}
	.shangjia .title_2{
		height: 150upx;
		line-height: 150upx;
		color: #FFFFFF;
		text-align: center;
		font-size: 30upx;
		display: flex;
		flex: 1;
	}
	.shangjia .title_2 > image{
		height: 150upx;
		width: 150upx;
	}
	.shangjia .title_2 > view{
		flex: 1;
	}
	.shangjia .title_3{
		height: 100%;
		line-height: 150upx;
		color: #FFFFFF;
		text-align: center;
		width: 185upx;
		font-size: 30upx;
		background-color: #F0AD4E;
		margin: 0;
		padding: 0;
	}
	.shangjia .title_3 .titleText{
		height: 100%;
		line-height: 150upx;
		color: #FFFFFF;
		text-align: center;
		width: 185upx;
		font-size: 30upx;
		background-color: #F0AD4E;
		margin: 0;
		padding: 0;
	}
	.jsq{
		display: flex;
		justify-content: space-between;
	}
	
	.jsq .subjsq{
		width: 60upx;
		height: 60upx;
		line-height: 60upx;
		text-align: center;
		background-color: #F0AD4E;
		color: #FFFFFF;
		border-radius: 50%;
		font-size: 40upx;
		padding: 0;
	}
	
	.choose{
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
		/* background-color: #000; */
		justify-content: flex-end;
		flex-direction: column;
		z-index: 1;
	}
	
	.choose .box_box{
		width: 750upx;
		border-radius: 5upx;
		background-color: #ffffff;
		/* height: 700upx; */
		padding-bottom: 150upx;
		/* overflow-y: scroll; */
		padding:0 25upx 180upx;
	}
	
	
</style>
	


