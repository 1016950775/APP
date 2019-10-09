<template>
	<view class="content">
		<view class="head">
			<view class="wrap">
				<!-- <p>美团会员</p> -->
				<view class="info">
					<view class="left"></view>
					<view class="right">
						<p class='top'>18629288940</p>
						<p class='bottom'>暂未开通美团会员</p>
					</view>
				</view>
				<view class="card">
					<view class="left">
						<view class="top">
							美团会员·尊享版
						</view>
						<view class="bottom">
							每月享<text>30元</text>无门槛红包
						</view>
					</view>
					<view class="right">
						<p>
							最低￥<text>15</text>/月
						</p>
						<view class="btn">
							<navigator url="order_child/order_child">
								立即开通
							</navigator>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="body wrap">
			<ul>
				<li>
					<p>联合会员专区</p>
					<view class="box">
						<a href="#">
							<ul class='wrapper'>
								<li></li>
								<li>
									<p><text>￥22</text><text>￥40</text>/月</p>
									<view class="btn">
										<navigator url="order_child/txvip">
										购买联合会员
										</navigator>
									</view>
								</li>
							</ul>
						</a>
							
					</view>
				</li>
				<li>
					<p>
						尊享会员<text>3</text>大特权
					</p>
					<view class="bimg"></view>
				</li>
			</ul>
			
			
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
			
			}
		}
	}
</script>

<style>
	.wrap{
		width: 90%;
		margin: 0 auto;
	}
	.head{
		height: 350upx;
		/* border: 1upx solid red; */
		background-color: black;
	}
	.head p{
		height: 100upx;
		line-height: 100upx;
		text-align: center;
		color: white;
		/* border: 1upx solid red; */
		
	}
	.head .info{
		height: 75upx;
		/* border: 1upx solid red; */
		display:flex;
		justify-content: flex-start;
	
	}
	.head .info .left{
		width: 69upx;
		height: 69upx;
		/* border: 1upx solid white; */
		border-radius: 50%;
		background-image: url('~@/static/img/logof.png');
		background-position: 0.35px 0;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		
	}
	.head .info .right{
		/* border: 1upx solid white; */
		width: 500upx;
		margin-left: 40upx;
	}
	.head .info .right .top{
		margin-top: 6upx;
		height: 30upx;
		font-size: 28upx;
		line-height: 30upx;
		text-align: left;
	}
	.head .info .right .bottom{
		height: 25upx;
		font-size: 24upx;
		line-height: 25upx;
		text-align: left;
		color: #808080;
		/* border: 1px solid red; */
		margin-top: 10upx;
	}
	.head .card{
		margin-top: 30upx;
		/* height: 110px; */
		height: 220upx;
		/* border: 1px solid red; */
		border-radius: 20upx;
		background: linear-gradient(to bottom right, #FCE5CF , #E6BB98);
		display: flex;
		justify-content: space-between;
	}
	.head .card .left{
		width: 50%;
		/* border: 1px solid red; */
		margin-left: 30upx;
	}
	.head .card .left .top{
		/* border: 1px solid red; */
		/* height: 40px;*/
		height: 80upx;
		line-height: 80upx;
		margin-top: 36upx;
		font-weight: bold;
	}
	.head .card .left .top:after{
		content: '';
		display: block;
		width: 70upx;
		height: 6upx;
		background: linear-gradient(to right,  #E6BB98 , #FCE5CF)
	}
	.head .card .left .bottom{
		height: 60upx;
		/* border: 1px solid red; */
		font-size: 28upx;
		line-height: 60upx;
		margin-top: 10upx;
	}
	.head .card .left .bottom text{
		color: red;
		font-weight: bold;
	}
	.head .card .right{
		width: 30%;
		/* border: 1px solid red; */
		margin-right: 30upx;
	}
	.head .card .right p{
		/* border: 1px solid red; */
		font-size: 28upx;
		color: #000000;
		height: 60upx;
		line-height: 60upx;
		margin-top: 40upx;
	}
	.head .card .right p text{
		font-weight: bold;
		font-size: 36upx;
	}
	.head .card .right .btn{
		/* border: 1px solid red; */
		height: 60upx;
		text-align: center;
		line-height: 60upx;
		background-color: #000000;
		border-radius: 30upx;
		margin-top: 12upx;
		
	}
	.head .card .right .btn navigator{
		font-size: 32upx;
		text-decoration: none;
		color: #E6BB98;
	}
	.body{
		margin-top: 130upx;
		/* border: 1px solid red; */
	}
	.body ul {
		padding: 0;
		margin: 0;
	}
	.body ul li{
		list-style: none;
	}
	.body > ul > li:first-child p{
		font-size: 32upx;
	}
	.wrapper{
		width: 600upx;
		margin: 0 auto;
		/* border: 1px solid red; */
	}
	.body > ul > li:first-child .box{
		border: 0.5px solid #C0C0C0;
		margin-top: 20upx;
		box-shadow: 5upx 5upx 5upx #C0C0C0;
		border-radius: 15upx;
	
	}
	.body > ul > li:first-child .box a ul{
		padding: 0;
		margin: 0 auto;
		height: 150upx;
		display: flex;
		justify-content: space-between;
	}
	.body > ul > li:first-child .box a ul li:first-child{
		height: 122upx;
		width: 51%;
		/* border: 1px solid red; */
		background-image: url('~@/static/img/logo.png');
		background-position: 0 -3px;
		background-repeat: no-repeat;
		margin-top: 14upx;
		background-size: 100% 100%;
	}
	.body > ul > li:first-child .box a ul li:last-child{
		/* border: 1px solid red; */
		height: 122upx;
		width: 30%;
		margin-top: 14upx;
	}
	.body > ul > li:first-child .box a{
		text-decoration: none!important;
	}
	.body > ul > li:first-child .box a ul li:last-child p{
		/* border: 1px solid red; */
		margin-top: 5upx;
		color: #000000;
		font-size: 20upx;
		height: 40upx;
		line-height: 40upx;
		text-align: center;
	}
	.body > ul > li:first-child .box a ul li:last-child p text:first-child{
		color: red;
		font-size: 32upx;
	}
	.body > ul > li:first-child .box a ul li:last-child p text:last-child{
		text-decoration: line-through;
	}
	.body > ul > li:first-child .box a ul li:last-child .btn{
		/* border: 1px solid red; */
		height: 55upx;
		font-size: 24upx;
		line-height: 55upx;
		text-align: center;
		border-radius: 25upx;
		background: linear-gradient(to right, #FFA020 , #FE7439);
		color: white;
		margin-top: 15upx;
	}
	.body > ul >li:nth-child(2) p{
		/* border: 1px solid red; */
		margin-top: 40upx;
		font-size: 32upx;
	}
	.body > ul >li:nth-child(2) p text{
		color: #FE7439;
		/* font-weight: bold; */
		font-size: 36upx;
	}
	.body > ul >li:nth-child(2) .bimg{
		/* border: 1px solid red; */
		height: 150upx;
		background-image: url('~@/static/img/bimg.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 90%;
		margin: 20upx auto 0;
	}

	
</style>
