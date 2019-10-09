<template>
	<view class="content">
		<!-- 图片轮播 -->
		<!-- <uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
		    <swiper class="swiper-box" @change="change">
		        <swiper-item v-for="(item ,index) in info" :key="index">
		            <view class="swiper-item">
		                <img :src="item.content" alt="图片错误">
		            </view>
		        </swiper-item>
		    </swiper>
		</uni-swiper-dot> -->
		<!-- 晚餐好店 -->
		<view class="ze">
			<view class="title456">{{ze.title}}</view>
			<view class="gengduo">{{ze.gengduo}}</view>
		</view>
		<!-- 商品类型1 -->
		<navigator :url="'../infoList/infoList'">
			<view class="aa1" v-for="item in wancan">
				<view class="a1">
					<view class="tp1">
						<img :src="item.tp1" alt="图片错误">
					</view>
					<view class="pisa">{{item.pisa}}</view>
					<view class="genju">{{item.genju}}</view>
				</view>
				<view class="a2">
					<view class="tp2">
						<img :src="item.tp2" alt="图片错误">
					</view>
					<view class="pisa2">{{item.pisa2}}</view>
					<view class="genju2">{{item.genju2}}</view>
				</view>
			</view>
		</navigator>
		
		<!-- 商品类型2 -->
		<view class="aa2">
			<view class="w1" v-for="item in xishi">
				<view class="tuo1">
					<img :src="item.tuo1" alt="图片错误">
				</view>
				<view class="kuai">{{'—' +item.kuai+ '—'}}</view>
				<view class="bai">
					<view class="hui">
						<view class="cai">{{item.hui}}</view>
						<view class="jia">{{item.jia}}</view>
					</view>
					<view class="ha">
						<img :src="item.tp1" alt="图片错误">
					</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	// import {uniSwiperDot} from "../uni-swiper-dot/uni-swiper-dot.vue";
	
	export default{
		name:'lunbotu',
		data() {
		        return {
					wancan:[
						{
							tp1:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2103529440,1598209146&fm=26&gp=0.jpg',
							pisa:'光合披萨(小寨店)',
							genju:'根据你看过的店推荐',
							tp2:'http://p1.meituan.net/200.0/deal/939fb8f1cfc1c4c378324f3340167e1439349.jpg',
							pisa2:'汉中老王家热凉米皮店',
							genju2:'凉皮凉粉中的点评人气',
						},
						{
							tp1:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4002537948,520197596&fm=15&gp=0.jpg',
							pisa:'红透天自助涮烤',
							genju:'[政法/师大]单人午/晚市套餐',
							tp2:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3977080519,2283544977&fm=26&gp=0.jpg',
							pisa2:'仟禧自助涮烤',
							genju2:'[政法/师大]单人午/晚市套餐',
						},
						{
							tp1:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3129180234,3953095439&fm=26&gp=0.jpg',
							pisa:'和谐号海鲜烤肉火锅自助',
							genju:'[小寨]单人自助餐',
							tp2:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1716717014,1479883867&fm=26&gp=0.jpg',
							pisa2:'牛一嘴·中国兰州牛肉拉面',
							genju2:'[文景路]单人餐，提供免费WiFi',
						},
					],
					ze:{
						title:'晚餐好店',
						gengduo:'更多>',
					},
					xishi:[
						{
							tuo1:'http://p1.meituan.net/200.0/deal/3874c41cb8756487564c1e25263862e8121539.jpg@174_0_586_586a%7C267h_267w_2e_90Q',
							kuai:'西式快餐',
							hui:'烩菜',
							jia:'￥28.0',
							tp1:'http://p1.meituan.net/200.0/deal/b7585580e4a6d87b7b832467b4689541546962.jpg@120_0_480_480a%7C267h_267w_2e_90Q',
						},
						{
							tuo1:'http://p0.meituan.net/200.0/dpdeal/cf0b6aa64895348de6548bc9d1db3ee4312672.jpg',
							kuai:'奶茶果汁',
							hui:'珍珠奶茶',
							jia:'￥11.0',
							tp1:'http://p1.meituan.net/200.0/deal/61ce03e080b35a5a77302f8ac9c02ae4296248.jpg@0_169_1079_1079a%7C267h_267w_2e_90Q',
						},
					],
		        }
		    },
		    methods: {
				infoList(){
					uni.redirectTo({
					    url: '../infoList/infoList',
					});
				},
		    }
	}
</script>

<style>
	.swiper-item img{
		width: 700upx;
		height: 200upx;
		border-radius: 10upx;
		margin: 40upx 0 0 25upx;
	}
	.aa1{
		margin-top: 30upx;
		display: flex;
		flex-direction: row;
	}
	.a1{
		margin-left: 15upx;
	}
	.a1 img{
		width: 350upx;
		height: 210upx;
		border-radius: 10upx;
	}
	.a2{
		margin-left: 20upx;
	}
	.a2 img{
		width: 350upx;
		height: 210upx;
		border-radius: 10upx;
	}
	.pisa{
		font-size: 28upx;
		height: 36upx;
		font-weight: bold;
		margin: 10upx 0 0 20upx;
		width: 300upx;
		overflow: hidden;
	}
	.genju{
		font-size: 24upx;
		color: #F0AD4E;
		margin: 8upx 0 0 20upx;
		height: 28upx;
		width: 300upx;
		overflow: hidden;
	}
	.pisa2{
		font-size: 28upx;
		height: 36upx;
		font-weight: bold;
		margin: 10upx 0 0 20upx;
		width: 300upx;
		overflow: hidden;
	}
	.genju2{
		font-size: 24upx;
		color: #F0AD4E;
		margin: 8upx 0 0 20upx;
		height: 28upx;
		width: 300upx;
		overflow: hidden;
	}
	.ze{
		display: flex;
		flex-direction: row;
	}
	.title456{
		font-size: 36upx;
		font-weight: bold;
		margin-left: 16upx;
	}
	.gengduo{
		font-size: 24upx;
		color:  #808080;
		margin: 18upx 0 0 490upx;
	}
	.aa2{
		display: flex;
		flex-direction: row;
		margin-top: 30upx;
		position: relative;
		height: 250upx;
		margin-bottom: 40upx;
	}
	.aa2 img{
		width: 350upx;
		height: 250upx;
		opacity: 0.6;
	}
	.w1{
		background:rgba(0,0,0,0.8);	
		margin-left: 15upx;
		border-radius: 10upx;
	}
	.kuai{
		position: absolute;
		margin: -220upx 0 0 60upx;
		color: #FFFFFF;
		font-weight: bold;
	}
	.bai{
		position: absolute;
		width: 300upx;
		height: 110upx;
		background-color: #FFFFFF;
		margin: -140upx 0 0 26upx;
		border-radius: 10upx;
	}
	.ha img{
		position: absolute;
		width: 100upx;
		height: 90upx;
		margin: -95upx 0 0 190upx;
		opacity: 1;
		border-radius: 10upx;
	}
	.cai{
		font-size: 32upx;
		font-weight: bold;
		margin: 10upx 0 0 30upx;
	}
	.jia{
		color: #DD524D;
		margin: 5upx 0 0 10upx;
		font-size: 32upx;
		font-weight: bold;
	}
</style>
