<template>
	<view>
		<view class="logo2">
			<image src="../../static/img/t2.png"></image>
		</view>
		<view class="logo">
			<image src="../../static/img/t1.png"></image>
		</view>
		<view class="logo1">
			<view class="title">
				特权3
			</view>
			<view class="nav">
				低价购买会员价量包
			</view>
			<view class="pt">
				<image src="../../static/img/p1.png"></image>
				开通会员后即可购买和使用
			</view>
			<view class="lb">
				<scroll-view class="scroll-view_H" scroll-x="true" :info="info" scroll-left="120">
				    <view class="swiper-box">
				        <view class="scroll-view-item_H" v-for="(item ,index) in info" :key="index">
				            <view>
				                <!-- {{item.content}} -->
								<image  :src="item.content" style="width: 240upx;height: 280upx;"></image>
				            </view>
				        </view>
				    </view>
				</scroll-view>
			</view>
		</view>
		<view class="foot">
			常见问题与说明 >
		</view>
		<view class="box">
			<view class="btn">
				尊享会员
				<text>最低<text class="t1">￥<text class="t2">15</text></text>/月</text>
				</view>
			<view class="btn2">
				<navigator url="../../pages/order/order_child/order_child">
				立即开通
				</navigator>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		 data() {
		        return {
		            info: [
					{
		                content: '../../static/img/p2.png',
		            },
					{
		                content: '../../static/img/p3.png'
		            },
					{
		                content: '../../static/img/p4.png'
		            },
					{
					    content: '../../static/img/p5.png'
					},
					{
					    content: '../../static/img/p6.png'
					},
					],
		            current: 0,
		            mode: 'long',
		        }
		    },
		    methods: {
		        change(e) {
		            this.current = e.detail.current;
		        },
				imageError: function(e){
					console.error('image发生error事件 携带值为' + e.detail.errMsg)
				},
				upper: function(e){
					console.log(e)
				},
				lower: function(e){
					console.log(e)
				},
				sroll:function(e){
					console.log(e)
					this.old.scroll = e.detail.scroll
				},
				goTop: function(e){
					this.scroll = e.detail.scroll
					this.$nextTick(function(){
						this.scroll = 0
					});
					uni.showToast({
						icon:"none",
						title:"纵向滚动 current 值已被修改为0"
					})
				}
		    }
	}
</script>

<style>
	.logo2{
		width: 90%;
		height: 350upx;
		margin: 20upx auto;
	}
	.logo{
		width: 90%;
		height: 650upx;
		margin: 20upx auto;
	}
	.logo image{
		width: 100%;
		height: 650upx;
	}
	.logo2 image{
		width: 100%;
		height: 350upx;
	}
	.logo1{
		width: 90%;
		height: 470upx;
		margin: 20upx auto;
		border: 3px #F3F3F3 solid;
		border-radius: 5px;
	}
	.logo1 .title{
		width: 80upx;
		height: 35upx;
		font-size: 22upx;
		text-align: center;
		line-height: 35upx;
		background: linear-gradient(to right, #F4E1CF , #F0CCB2); /* 标准的语法 */
		opacity:0.85;
		margin: 7upx 0 0 40upx;
		border-radius: 5upx;
	}
	.logo1 .nav{
		margin: 15upx 0 15upx 40upx;
		font-size: 30upx;
	}
	.logo1 .pt{
		width: 90%;
		height: 40upx;
		font-size: 28upx;
		margin-left: 30upx;
		line-height: 40upx;
	}
	.logo1 .pt image{
		height: 30upx;
		width: 28upx;
	}
	.logo1 .lb{
		width: 600upx;
		margin-left: 30upx;
		margin-top: 20upx;
	}
	.foot{
		font-size: 28upx;
		text-align: center;
		width: 90%;
		height: 30upx;
		line-height: 30upx;
		margin: 40upx 0;
		color: #ADADAB;
	}
	.box{
		display: flex;
		justify-content: center;
		font-size: 35upx;
		margin-bottom: 20upx;
	}
	.btn{
		height: 80upx;
		width: 60%;
		margin: 10upx 0 0 -20upx;
		border-bottom-left-radius: 60upx;
		border-top-left-radius: 60upx;
		color: #FBE0D4;
		background-color: #332D2D;
		text-align: center;
		line-height: 80upx;
		font-weight: bold;
	}
	.btn text{
		font-size: 25upx;
		font-style: normal;
		font-weight: normal;
	}
	.btn .t1{
		color: #E4C5A9;
	}
	.btn .t1 .t2{
		font-size: 35upx;
		color: #FBE0D4;
		font-weight: bold;
	}
	.btn2{
		height: 80upx;
		width: 30%;
		margin: 10upx 0 0 -3upx;
		border-bottom-right-radius: 60upx;
		border-top-right-radius: 60upx;
		background: linear-gradient(to right, #FAE8D9 , #E4C5A9);
		text-align: center;
		line-height: 80upx;
		font-weight: bold;
	}
	.lb .scroll-view_H {
			/* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
			white-space: nowrap;
			width: 100%;
		}
		.lb .scroll-view-item_H {
			display: inline-block;
			width: 40%;
			height: 300upx;
			text-align: center;
			font-size: 36upx;
			margin: 2%  1% 2% 1%;
		}
		.lb .scroll-view-item_H view{
			box-sizing: border-box;
		}
		.lb .scroll-view-item_H view:nth-child(1){
			width: 100%;
			text-align: right;
			padding: 1% 4%;
		}
		.lb .scroll-view-item_H view:nth-child(2){
			width: 100%;
			height: 120upx;
		}
		.lb .scroll-view-item_H view:nth-child(2) image{
			width: 300upx;
			height: 300upx;
		}
		.lb .scroll-view-item_H view:nth-child(3){
			width: 100%;
			height: 50upx;
		}
		.lb .scroll-view-item_H view:nth-child(4){
			width: 100%;
			height: 50upx;
	    }
</style>
