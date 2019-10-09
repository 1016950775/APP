<template>
	<view class="" style="background-color: #F0F0F0;height: 2000upx;">
		<view style=" background: linear-gradient(#FED060, #f3f5f7);height: 300upx;">
			<view  >
			<view class="zong clearfixed">
				<view class="zuo ">
					<span style='text-align: center;display: block;font-size: 24upx;background-color: #fff;'>外卖配送</span>
				</view>
				<view class="you ">
					<span style='text-align: center;display: block;font-size: 24upx;background-color: #F0CCB2;'>到店自取</span>
				</view>
				<view class="" style="background-color: #fff;border-bottom: 1px solid #555555;">
					<span style='width: 500upx;margin-left: 30upx;display: block;' ><span style='font-size:20upx;border: 1px solid #F4F4F4;background-color: #fff;color: #;'>公司</span>华旗国际购物中心3楼</span>
					<span style='font-size: 24upx;margin-left: 28upx;'>xx(先生) 157xxxxxxxx</span>
					<span style="display:block;float:right;margin-top:-28upx;color:#999999">></span>
				</view>
				<view class="" style="height: 70upx; line-height: 70upx; background-color: #fff;">
					<span style='display: block;float: left;font-size: 32upx;margin-left: 20upx;'>立即送出</span>
					<span style='display: block;float: right; font-size: 28upx;color: #0081FF;'>大约15：19送达<span style="color: #999999;">></span></span>
				</view>
			</view>
			<!-- 导入插件 -->
			<submit></submit>
			
			
			
			<view class="" style=" margin-top: 50upx;">
				<view class="huiyuan clearfixed" style="margin-top: 30upx;">
							<view class="" style="height: 60upx;">
								<view class=" tubiao">
									<image src="../../static/img/hy.png" style="width: 40upx;height: 40upx;float: left;"></image>
									<span style='display: block;font-size: 24upx;float: left;'>美团会员</span>
								</view>
								<view class="kaitong">
									<span style='text-align: center;display: block;'>勾选开通</span>
								</view>
							</view>
							<view class="">
								<view style="margin-top: 60upx;">
									<span style='font-size: 26upx;display: block;width: 612upx;float: left;'>开通后得<span style='color: #F01414;'>30</span>元红包，本单可用5元</span>
									<span style='text-decoration: line-through;color: #999999;font-size: 26upx;float: left;margin-left: -70upx;'>￥30 </span>
									<span style='font-size: 26upx;float: left;'>￥15</span>
									 <view >
									  <checkbox-group style="transform:scale(0.7);margin-left: 680upx;
				    margin-top: -60upx;
				}">
									  <label>
								      <checkbox value="cb" />
									   </label>
									  </checkbox-group>
									  </view>
									  <span style='font-size: 24upx;display: block;'>红包无门槛 可与满减·折扣同享 <image src="../../static/img/wh.png" style="width: 30upx;height: 30upx;"></image></span>
								</view>
							</view>
							
						</view>
						<view class=" zhunshi" style="margin-top: 20upx;">
							<view class="zs"  style="border-bottom: 1px solid #999999;margin-bottom: 20upx;">
								<image src="../../static/img/zs1.png" style="width: 30upx;height: 30upx;"></image>
								<span style='font-size: 30upx;margin-left: 20upx;margin-right: 20upx;'>准时宝</span>
								<image src="../../static/img/wh.png" style="width: 30upx;height: 30upx;"></image>
								<view class="" style="float: right;">
									<view class="uni-padding-wrap uni-common-mt" style="float: right;">
									            <view>
												
									                <switch  @change="switch1Change" color="#FED060" style="transform:scale(0.7);margin-right: -20upx;"/>
									            </view>
									</view>
									<span style='display: block;float: right;'>￥0.24</span>
								</view>
								<view class="">
									<span style='font-size: 28upx;margin-top: 20upx;display: block;margin-left: 10upx;'>延误10分钟赔<span class='yanse'>16.11元</span>延误20分钟赔<span class='yanse'>18.8元</span>延误30分钟赔<span class='yanse'>32.22元</span></span>
								</view>
							</view>
							<view class="zs">
								<image src="../../static/img/hm2.png" style="width: 50upx;height: 50upx;float: left;"></image>
								<span style='font-size: 30upx;margin-left: 20upx;margin-right: 20upx;display: block;float: left;height: 48upx;line-height:54upx;'>号码保护</span>
								<image src="../../static/img/wh.png" style="width: 30upx;height: 30upx;"></image>
								<view class="" style="float: right;">
									<view class="uni-padding-wrap uni-common-mt" style="float: right;">
									            <view>
												
									                <switch checked @change="switch1Change" color="#FED060" style="transform:scale(0.7);margin-right: -20upx;"/>
									            </view>
									</view>
								</view>
								<view class="">
									<span style='font-size: 28upx;margin-top: 20upx;display: block;margin-left: 10upx;'>对商家·骑手隐藏您的真实手机号，保护您的隐私</span>
								</view>
							</view>
						</view>
						<view class="fot">
							<view class="foot">
								<span style='font-size: 28upx;margin-left: 10upx;'>备注</span>
								<span style='color: #999999;font-size: 28upx'>口味、偏好等要求&nbsp;&nbsp;></span>
							</view>
							<view class="foot">
								<span style='font-size: 28upx;margin-left: 10upx;'>餐具数量</span>
								<span style='color: #999999;font-size: 28upx'>未选择&nbsp;&nbsp;></span>
							</view>
							<view class="foot">
								<span style='font-size: 28upx;margin-left: 10upx;'>发票</span>
								<span style='color: #999999;font-size: 28upx'>该店不支持线上开票,请联系商户&nbsp;&nbsp;></span>
							</view>
							<view class="foot">
								<span style='font-size: 28upx;margin-left: 10upx;'>支付方式</span>
								<span style='font-size: 28upx;margin-right: 40upx;'>在线支付</span>
							</view>
							
						</view>
				    </view>
			</view>
			
			
		</view>
	</view>
	
</template>

<script>
	import submit  from "../../components/subdaohang/submit.vue"
	export default {
		components: {submit},
		data() {
				return {
					
				}
			},
			methods: {
				
			}
		}
</script>

<style >
.zong{
	margin: 0 auto;
	width: 720upx;
	
	
}
.zong .zuo{
	float: left;
	width: 355upx;
	height: 70upx;
	line-height: 70upx;
	
	
}
.zong .you{
	float: left;
	width: 366upx;
	height: 70upx;
	line-height: 70upx;
	
}
.clearfixed:after{
		        content: "clearfixed";
		        display: block;
		        clear: both;
		        height: 0;
		        overflow: hidden;
		    }
	.huiyuan{
		width: 725upx;
		border: 1px solid #fff;
		background-color: #fff;
		border-radius: 20upx;
		margin: 0 auto;
	}
	.tubiao{
		float: left;
		width: 170upx;
		border-bottom-right-radius:20upx;
		
		background-color: #F2E1CC;
	}
	.kaitong{
		float: right;
		font-size: 26upx;
		width: 160upx;
		border-radius: 30upx;
		background-color: #FED060;
	}
	.zs{
		width: 725upx;
		margin: 0 auto;
		
	}
	
	
	.yanse{
		color: #F01414;
	}
	
	.fot{
		width: 725upx;
		margin: 0 auto;
		border: 1px solid #fff;
		background-color: #fff;
		border-radius: 20upx;
		margin-top: 20upx;
	}
	
	.foot{
		height: 60upx;
		display: flex;
		justify-content: space-between;
		margin-top: 10upx;
	}
	.zhunshi{
			border: 1px solid #fff;
			background-color: #fff;
			border-radius: 20upx;
			width: 725upx;
			margin: 0 auto;
	}
</style>
