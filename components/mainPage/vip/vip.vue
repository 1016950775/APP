<template>
	<view class="vip">
		<view class="vip0">优惠专区</view>
		<view class="vip2">
			<view>
				<image :src="image1" mode=""></image>
			</view>
			<view>
				<image :src="image2" mode=""></image>
			</view>
		</view>
		<view class="aa1"  >
			<view class="aa2" v-for="item in aa">
				<view class="title">{{item.title}}</view>
				<view class="titles">{{item.titles}}</view>
				<view class="image">
					<image :src="item.image" mode="图片错误"></image>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
	    name: "vip",
		data () {
				  return{
					    image1:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1384764277,2188628693&fm=26&gp=0.jpg",
						image2:"http://img.21xianhua.com/upload/2019/08/12/2885323da54c52f69b49ac75f04abd01@360",
					  aa:[
						  {
							title:"必胜客",
							titles:"5折优惠",
							image:"https://img.4008823823.com.cn/kfcios/Version/671_753981.jpg"
						  },
						  {
							  title:"必吃",
							  titles:"权威榜单",
							  image:"http://p0.meituan.net/200.0/deal/cd5fc40f1d7bf19eb5e15d1537f00dfc49438.jpg"
						  },
						  {
							  title:"天气转凉",
							  titles:"健康常备",
							  image:"http://image.360kad.com/group1/M00/1D/D6/CgAgEVapv0uAZSJJAAAgAJWAbuA94.jpeg"
						  },
						  {
							title:"限时折扣",
							titles:"低至99",
							image:"http://img.21xianhua.com/upload/2018/03/11/ad2d237bc6bcd59f50bb4f960db7188b@360"
						  }
					  ]
				  }
			}
	  }
</script>

<style>
	.vip0{
		font-size: 40upx;
		font-weight: bold;
		margin-bottom: 20upx;
		margin-left: 24upx;
	}
	.vip2{
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 250upx;
		justify-content: center;
		margin-bottom: 10upx;
	}
	.vip2 view{
		margin-right: 10upx;
		border-radius: 10upx;
	}
	.vip2 image{
		height: 230upx;
		width: 340upx;
		margin-left: 8upx;
		border-radius: 10upx;
	}
	.aa1{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;		
	}
	.aa2{
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 160upx;
		height: 134px;
		margin-right: 12upx;
		border-radius: 10upx;
		margin: 0 12upx;
	}
	.title{
		font-size: 30upx;
		font-weight: bold;
	}
	.titles{
		height: 42upx;
		overflow: hidden;
		font-size: 26upx;
		color: #aaa;
	}
	.image image{
		margin-top: 16upx;
		width: 150upx;
		height: 160upx;
		border-radius: 10upx;
	}
	
</style>
