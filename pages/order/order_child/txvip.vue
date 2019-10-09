<template>
	
	
	<view class="txvip">
		<view class="title">
			<image src="../../../static/img/t3.png" style="width: 100%;height: 400upx;"></image>
		</view>
		<view class="phone">
			<image src="../../../static/img/p7.png"></image>
			<text class="txt1">177****0741</text>
			<text class="txt">开通前请绑定腾讯视频账号<text class="txt2">立即绑定</text></text>
		</view>
		<view class="cz">
			<image src="../../../static/img/p8.png"></image>
		</view>
		<view class="content">
			<view class="nav">
				<view class="content1">
					<image src="../../../static/img/p9.png"></image>
					<image src="../../../static/img/p10.png" style="margin-left: 20upx;"></image>
				</view>
				<view class="zi">
					腾讯视频  热播榜
				</view>
				<view class="lb">
					<scroll-view class="scroll-view_H" scroll-x="true" :info="info" scroll-left="120">
					    <view class="swiper-box">
					        <view class="scroll-view-item_H" v-for="(item ,index) in info" :key="index">
					            <view style="height: 300upx!important;">
					                <!-- {{item.content}} -->
									<image  :src="item.content" style="width: 350upx;height: 200upx;"></image>
									<view style="text-align: left;">
										<text style="font-size: 24upx;margin-left: 15upx;">{{item.txt}}</text>
									</view>
					            </view>
					        </view>
					    </view>
					</scroll-view>
				</view>
				<view >
					<view class="qy1">
						<text class="t1"><text class="t2">美团特权1</text>开通得30元会员红包</text>
						<view class="t3">
							<text>每月六张5元无门槛红包，可与其他优惠叠加使用</text>
						</view>
						<view class="t4">
							<image src="../../../static/img/p21.png"></image>
						</view>
					</view>
					<view class="qy2">
						<text class="t1"><text class="t2">美团特权2</text>会员红包金额升级</text>
						<view class="t3">
							<text>会员红包金额可在指定商户升级，每单更优惠</text>
						</view>
						<view class="t4">
							<image src="../../../static/img/p22.png"></image>
							<image src="../../../static/img/p23.png"></image>
							<image src="../../../static/img/p24.png"></image>
						</view>
					</view>
					<view class="f1">
						-更多合作商家客可在美团外卖查看-
					</view>
					<view class="f2">
						具体可升级商家和金额以美团外卖App实际为准
					</view>
					<view class="box">
						<view class="btn">
							联合会员仅需￥25
							</view>
						<view class="btn2">立即开通</view>
					</view>
				</view>
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
		                content: '../../../static/img/p11.png',
						txt:'在远方·首播'
		            },
					{
		                content: '../../../static/img/p12.png',
						txt:'都破苍穹·更新'
		            },
					{
		                content: '../../../static/img/p13.png',
						txt:'漠北七雄：狼王'
		            },
					{
					    content: '../../../static/img/p14.png',
						txt:'激荡·首播'
					},
					{
					    content: '../../../static/img/p15.png',
						txt:'六界封神·玄幻'
					},
					{
					    content: '../../../static/img/p16.png',
						txt:'连环杀人狂之谜'
					},
					{
					    content: '../../../static/img/p17.png',
						txt:'我家小两口特约饭'
					},
					{
					    content: '../../../static/img/p18.png',
						txt:'空降利刃·更新'
					},
					{
					    content: '../../../static/img/p19.png',
						txt:'边境杀手2：边境战士'
					},
					{
					    content: '../../../static/img/p20.png',
						txt:'十年三月三十日'
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
	.txvip .phone{
		margin: 30upx 15upx;
		height: 90upx;
	}
	.txvip .phone image{
		width: 90upx;
		height: 90upx;
		float: left;
	}
	.txvip .phone .txt1{
		float: left;
		width: 500upx;
		font-size: 32upx;
		margin-left: 30upx;
	}
	.txvip .phone .txt{
		float: left;
		font-size: 24upx;
		margin-left: 30upx;
		margin-top: 10upx;
		color: #8D8D8D;
	}
	.txvip .phone .txt .txt2{
		margin-left: 30upx;
		color: #D89D7C;
		text-decoration: underline;
	}
	.txvip .cz{
		margin: 0 15upx;
		margin-bottom: 30upx;
	}
	.txvip .cz image{
		height: 180upx;
		width: 100%;
	}
	.txvip .content{
		background-color: #F4F4F4;
	}
	.txvip .content .nav{
		margin: 0 15upx;
		padding-top: 60upx;
	}
	.txvip .content .nav .content1 image{
		width: 48%;
		height: 300upx;
	}
	.txvip .content .nav .zi{
		font-size: 32upx;
		margin: 30upx 0;
	}
	.txvip .content .nav .lb .scroll-view_H {
			/* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
		white-space: nowrap;
		width: 100%;
	}
	.txvip .content .nav .lb .scroll-view-item_H {
		display: inline-block;
		width: 49%;
		height: 200upx;
		font-size: 36upx;
		margin: 2%  1% 2% 0%;
	    }
	.txvip .content .nav .lb .scroll-view-item_H view{
			box-sizing: border-box;
		}
	.txvip .content .nav .lb .scroll-view-item_H view:nth-child(1){
			width: 100%;
			text-align: right;
			/* padding: 1% 4%; */
		}
	.txvip .content .nav .lb .scroll-view-item_H view:nth-child(2){
			width: 100%;
			height: 120upx;
		}
	.txvip .content .nav .lb .scroll-view-item_H view:nth-child(2) image{
			width: 300upx;
			height: 200upx;
		}
	.txvip .content .nav .lb .scroll-view-item_H view:nth-child(3){
			width: 100%;
			height: 50upx;
		}
	.txvip .content .nav .lb .scroll-view-item_H view:nth-child(4){
			width: 100%;
			height: 50upx;
	    }
	.txvip .content .nav .qy1{
		margin-top: 40upx;
	}
	.txvip .content .nav .qy1 .t1{
		font-size: 32upx;
		font-weight: bold;
	}
	.txvip .content .nav .qy1 .t2{
		font-size: 24upx;
		text-align: center;
		line-height: 40upx;
		background-color: #26323F;
		color: #CCBFB6;
		padding: 0.5% 2% 0.5% 2%;
		border-radius: 8upx;
		margin-right: 10upx;
	}	
	.txvip .content .nav .qy1 .t3{
		font-size: 24upx;
		margin-top: 10upx;
		color: #9A9A9A;
	}
	.txvip .content .nav .qy1 .t4{
		margin-top: 20upx;
	}
	.txvip .content .nav .qy1 .t4 image{
		width: 100%;
		height: 300upx;
	}
	.txvip .content .nav .qy2{
		margin-top: 40upx;
	}
	.txvip .content .nav .qy2 .t1{
		font-size: 32upx;
		font-weight: bold;
	}
	.txvip .content .nav .qy2 .t2{
		font-size: 24upx;
		text-align: center;
		line-height: 40upx;
		background-color: #26323F;
		color: #CCBFB6;
		padding: 0.5% 2% 0.5% 2%;
		border-radius: 8upx;
		margin-right: 10upx;
	}	
	.txvip .content .nav .qy2 .t3{
		font-size: 24upx;
		margin-top: 10upx;
		color: #9A9A9A;
	}
	.txvip .content .nav .qy2 .t4{
		margin-top: 20upx;
	}
	.txvip .content .nav .qy2 .t4 image{
		width: 100%;
		height: 600upx;
	}
	.txvip .content .nav .f1{
		width: 100%;
		font-size: 28upx;
		text-align: center;
		margin-top: 40upx;
	}
	.txvip .content .nav .f2{
		width: 100%;
		font-size: 22upx;
		text-align: center;
		margin-top: 10upx;
		color: #9A9A9A;
	}
	.box{
		display: flex;
		justify-content: center;
		font-size: 35upx;
		margin-bottom: 20upx;
	}
	.btn{
		height: 80upx;
		width: 50%;
		margin: 10upx 0 0 -20upx;
		border-bottom-left-radius: 60upx;
		border-top-left-radius: 60upx;
		color: #ECEAE6;
		background-color: #332D2D;
		text-align: left;
		line-height: 80upx;
		font-weight: bold;
		font-size: 28upx;
		padding-left: 50upx;
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
		color: #563726;
		font-size: 28upx;
	}
</style>
