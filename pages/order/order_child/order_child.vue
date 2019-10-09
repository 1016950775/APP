<template>
	<view>
		<view class="head">
			<view class="wrap">
				<view class="info">
					<view class="left"></view>
					<view class="right">
						<p class='top'>18629288940</p>
						<p class='bottom'>暂未开通美团会员</p>
					</view>
				</view>
			</view>
		</view>
		<view class="body">
			<view class="wrap">
				<view class="card">
					<view class="left">
						<view class="top">
							月卡
						</view>
						<view class="bottom">
							每月享30元无门槛会员红包
						</view>
					</view>
					<view class="right">
						<view class="single">
							￥15
						</view>
					</view>
				</view>
			</view>
			<view class="word">
				<view class="f1">
					<view class="wrap">
						<text>
							红包发放时间
						</text>
						<text>
							购买后立即发送
						</text>
					</view>
				</view>
				<view class="f2">
					<view class="wrap">
						<text>
							会员抵扣红包
						</text>
						<text>
							暂无抵用劵可用
						</text>
					</view>
				</view>
				<view class="f3">
					<navigator url="order_child1">
					<view class="wrap">
						<text>会员规则</text>
						<text>会员服务条款</text>
					</view>
					</navigator>
				</view>
			</view>

		</view>
		<view class="foot wrap">
			<navigator url="zhifu">
				<view class="left">
					<text>月卡：</text>
					<text>￥15</text>
				</view>
				<view class="right">
					<text>
						去支付
					</text>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.wrap {
		width: 90%;
		margin: 0 auto;
	}

	.head {
		padding-top: 20px;
		height: 110upx;
		/* border: 1upx solid red; */
		background-color: black;
	}

	.head p {
		height: 100upx;
		line-height: 100upx;
		text-align: center;
		color: white;
		/* border: 1upx solid red; */

	}

	.head .info {
		height: 75upx;
		/* border: 1upx solid red; */
		display: flex;
		justify-content: flex-start;

	}

	.head .info .left {
		width: 69upx;
		height: 69upx;
		/* border: 1upx solid white; */
		border-radius: 50%;
		background-image: url('~@/static/img/logof.png');
		background-position: 0.35px 0;
		background-repeat: no-repeat;
		background-size: 100% 100%;

	}

	.head .info .right {
		/* border: 1upx solid white; */
		width: 500upx;
		margin-left: 40upx;
	}

	.head .info .right .top {
		margin-top: 6upx;
		height: 30upx;
		font-size: 28upx;
		line-height: 30upx;
		text-align: left;
	}

	.head .info .right .bottom {
		height: 25upx;
		font-size: 24upx;
		line-height: 25upx;
		text-align: left;
		color: #808080;
		/* border: 1px solid red; */
		margin-top: 10upx;
	}
	.body{
		height: 1000upx;
		/* border: 1px solid black; */
	}

	.body .card {
		/* border: 1px solid black; */
		height: 160upx;
		width: 100%;
		margin-top: 50upx;
		display: flex;
		justify-content: space-between;
		background: linear-gradient(to bottom right, #FCE5CF, #E6BB98);
		border-radius: 10upx;
	}

	.body .card .left {
		/* border: 1px solid black; */
		height: 160upx;
		width: 70%;


	}

	.body .card .left .top {
		color: black;
		margin-left: 25upx;
		margin-top: 30upx;
		height: 50upx;
		line-height: 50upx;
		/* border: 1px solid black; */
		font-size: 40upx;

	}

	.body .card .left .bottom {
		font-size: 20upx;
		margin-left: 25upx;
		height: 50upx;
		line-height: 50upx;
		/* border: 1px solid black; */
		color: #808080;
	}

	.body .card .right {
		/* border: 1px solid black; */
		height: 160upx;
		width: 30%;
	}

	.body .card .right .single {
		height: 50upx;
		margin-top: 45upx;
		text-align: end;
		margin-right: 30upx;
		font-weight: bold;
		font-size: 45upx;
	}

	.body .word .f1 {
		margin-top: 30upx;
		border-top: 1px solid #e0e0e0;
		border-bottom: 1px solid #e0e0e0;
		height: 100upx;
		line-height: 100upx;
	}

	.body .word .f1 .wrap {
		display: flex;
		justify-content: space-between;
	}

	.body .word .f1 text:last-child {
		/* border: 1px solid red; */
		font-size: 30upx;
		color: #808080;
	}

	.body .word .f1 text:first-child {
		/* border: 1px solid red; */
		font-size: 35upx;
	}

	.body .word .f2 {
		border-bottom: 1px solid #e0e0e0;
		height: 100upx;
		line-height: 100upx;
	}

	.body .word .f2 .wrap {
		display: flex;
		justify-content: space-between;
	}

	.body .word .f2 text:last-child {
		/* border: 1px solid red; */
		font-size: 30upx;
		color: #808080;
	}

	.body .word .f2 text:first-child {
		/* border: 1px solid red; */
		font-size: 35upx;
	}

	.body .word .f3 {
		height: 100upx;
		line-height: 100upx;
		color: #808080;
		font-size: 28upx;
	}

	.body .word .f3 .wrap {
		display: flex;
		justify-content: center;
	}

	.body .word .f3 text:first-child {
		/* border: 1px solid pink; */
		padding: 0 10upx;
		margin-right: 10upx;
	}

	.body .word .f3 text:first-child:after {
		content: '';
		display: inline-block;
		position: relative;
		width: 1px;
		height: 28upx;
		background-color: #808080;
		top: 5upx;
		right: -11upx;
	}
	.foot{
		/* border: 1px solid black; */
		margin-top: 20upx;
		border-radius: 50upx;
		
		
	}
	.foot navigator{
		display: flex;
		justify-content: space-between;
	}
	.foot navigator .left{
		height: 95upx;
		width: 65%;
		border-radius: 50upx 0 0 50upx;
		background-color: black;
		line-height: 95upx;
	}
	.foot navigator .left text:first-child{
		color: #808080;
		margin-left: 40upx;
		font-size: 25upx;
	}
	.foot navigator .left text:last-child{
		color: white;
	}
	.foot navigator .right{
		height: 95upx;
		width: 35%;
		background-color: #E6BB98;
		border-radius: 0 50upx 50upx 0;
		line-height: 95upx;
		text-align: center;
		font-size: 30upx;
	}
</style>
