<template>
	<view class="sabjicaidan">
		<uni-nav-bar left-icon="back" left-text="返回" title=" " @click-left="back" fixed="true" status-bar="false">
			<view class="nav">
				<input type="text" style="width: 400upx;margin-left: 25upx;" />
				<uni-icon type="search" size="20" style="line-height: 50upx; ;"></uni-icon>
			</view>
			<view class=""  style="line-height: 50upx;float: right ;margin-left: 50upx;">
				<button @click="toShopCar">
					<uni-icon type="home" size="20"></uni-icon>
				</button>
			</view>
		</uni-nav-bar>
		<view class="tp">
			<img :src="jihe.tp" alt="图片错误">
			<view class="tp1">
				<img :src="jihe.tp1" alt="图片错误">
			</view>
		</view>
		<view class="zt">
			<view class="zt1">
				<view class="ss">{{jihe.ss}}</view>
				<view class="sj">{{jihe.sj}}</view>
				<view class="gog">{{jihe.gog}}</view>
				<view class="wmk">{{jihe.wmk}}</view>
			</view>
			<view class="zt2">
				<img :src="jihe.tp3" alt="图片错误">
			</view>
		</view>
		<view class="jan">
			<view>{{jihe.jan1}}</view>
			<view>{{jihe.jan2}}</view>
			<view>{{jihe.jan3}}</view>
			<view>{{jihe.jan4}}</view>
			<view>{{jihe.jan5}}</view>
			<view>{{jihe.jan6}}</view>
		</view>
		
	</view>
</template>

<script>
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue"
	import uniIcon from "../../components/uni-icon/uni-icon.vue"
	export default {
		name: 'sanjicaidan',
		components: {uniNavBar,uniIcon},
		data() {
			return{
				jihe:{
					tp:'http://img4.imgtn.bdimg.com/it/u=2779572989,2757230919&fm=15&gp=0.jpg',
					tp1:'http://img4.imgtn.bdimg.com/it/u=166214646,1415226928&fm=26&gp=0.jpg',
					tp3:'http://img3.imgtn.bdimg.com/it/u=922771745,2692662304&fm=26&gp=0.jpg',
					ss:'一只炸鸡	(小寨店)',
					sj:'配送约30分钟 | 准时宝 | 放心吃',
					gog:'三年如一日，感谢各位小哥哥，小姐姐，一路陪伴支持，不忘初心，一路向前，用心去做。做最好的寿司。',
					wmk:'￥7无门槛|兑换',
					jan1:'首单减14',
					jan2:'20减20',
					jan3:'30减28',
					jan4:'津贴6元',
					jan5:'45减38',
					jan6:'88减52',
				}
			}
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			toShopCar(){
				uni.navigateTo({
					url:'../../pages/shopCar/shopCar'
				})
			}
		}
	}
</script>

<style scoped>
	.sabjicaidan .nav{
		border: #000000 1px solid;
		height: 50upx;
		border-radius: 25upx;
		display: flex;
	}
	
	.tp{
		position: relative;
		height: 430upx;
	}
	.tp img{
		width: 100%;
		height: 330upx;
	}
	.tp1{
		position: absolute;
		margin: -130upx 0 0 28upx;
	}
	.tp1 img{
		width: 700upx;
		height: 200upx;
		border-radius: 20upx;
	}
	.zt{
		display: flex;
		flex-direction: row;
	}
	.zt1{
		margin: 0 25upx 0 25upx;
	}
	.zt2 img{
		width: 120upx;
		height: 100upx;
		margin: 15upx 0 0 5upx;
		border-radius: 10upx;
	}
	.ss{
		font-weight: bold;
		font-size: 32upx;
	}
	.sj{
		font-size: 24upx;
		margin-top: 10upx;
	}
	.gog{
		font-size: 24upx;
		height: 30upx;
		width: 550upx;
		overflow: hidden;
		color: #999999;
		margin-top: 10upx;
	}
	.wmk{
		font-size: 26upx;
		height: 50upx;
		line-height: 52upx;
		width: 200upx;
		margin-top: 20upx;
		background-color: #F0AD4E;
	}
	.jan{
		display: flex;
		flex-direction: row;
	}
	.jan > view {
		font-size: 24upx;
		margin: 20upx 0upx 0 26upx;
		border: 2upx solid #DD524D;
		color: #DD524D;
		padding: 0 5upx 0 5upx;
	}
</style>
