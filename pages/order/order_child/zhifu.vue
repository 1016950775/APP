<template>
	<view>
		<view class="box">
			<view class="head">
				<view class="a1 tm">
					支付剩余时间&nbsp;
					  <min-countdown :targetTime="time1" @callback="callback"></min-countdown>
				</view>
				<view class="cmoney">
					￥<text>{{num}}</text>
				</view>
				<view class="money" v-show="!active">
					￥15.00
				</view>
				<view class="a1">
					美团会员-261481831949786557
				</view>
			</view>
			
			<view class="wrap">
				<view class="mt">
					<view class="mtzf">
						美团支付
					</view>
					<view class="card">
						<view class="li1">
							使用新卡支付
							<text>立减5.2元</text>
							<text>赠百万账户安全险</text>
						</view>
						<view class="li2">
							邮储借记卡立减5元
							 <text class="dyh" @click="openPopup">＞</text>
							<view>
							   
							    <uni-popup :custom=true ref="popup" type="center">
									<view class="pop">
										<view class="title">
											选择支付方式
											<text @click="closePopup">×</text>
										</view>
										<view class="gg">
											银行卡支付享“赠百万账户安全险
										</view>
										<view class="scroll">
											<view class="wrap">
												<view class="model">
													<view class="topzs">
														招商银行信用卡
													</view>
													<view class="bottom">
														随机立减2-99元
													</view>
												</view>
												<view class="model">
													<view class="top1">
														中国光大银行信用卡
													</view>
													<view class="bottom1">
														立减10元
													</view>
												</view>
												<view class="model">
													<view class="topjh">
														交通银行信用卡
													</view>
													<view class="bottom2">
														立减4-8元
													</view>
												</view>
												<view class="model">
													<view class="top3">
														中国邮政储蓄银行储蓄卡
													</view>
													<view class="bottom3">
														随立减5元
													</view>
												</view>
												<view class="model_title" v-show="bands" @click="bandc">
													展开更多优惠银行
												</view>
												<view class="model_zgyh" v-show="!bands">
													<view class="top">
														中国银行信用卡
													</view>
													<view class="bottom"  v-show="!bands">
														随立减7.20元
													</view>
												</view>
												<view class="model"  v-show="!bands">
													<view class="top3">
														中国邮政储蓄银行信用卡
													</view>
													<view class="bottom3">
														随立减5元
													</view>
												</view>
												<view class="model_sj"  v-show="!bands">
													<view class="top">
														盛京银行信用卡
													</view>
													<view class="bottom">
														随立减9元
													</view>
												</view>
												<view class="model_jx"  v-show="!bands">
													<view class="top">
														江西银行储蓄卡
													</view>
													<view class="bottom">
														随立减8-18元
													</view>
												</view>
												<view class="model_ye">
													<view class="top">
														余额（剩余￥0.00）
													</view>
													<view class="bottom">
														余额不足
													</view>
												</view>
											</view>
										</view>
										<view class="wrap">
											<view class="models">
												<view class="top">
													使用新卡支付
												</view>
												<view class="bottom">
													立减5.2元
												</view>
											</view>
										</view>
									</view>
							    </uni-popup>
							</view>
						</view>
						<view class="li3">
							交行信用卡首绑立减4-8元
						</view>
					</view>
					<view class="wx">
						微信支付
					</view>
					<view class="other" v-show="use" @tap="change">
						展开更多支付方式
					</view>
					<view class="zfb" v-show="!use">
						支付宝
					</view>
				</view>
			</view>
		</view>
		<view class="bag">
			<view v-for="(item,index) in items" :class="{class_active:active==index,bagActive:index==2&&use}" @touchend="c(index)" @click="aa()">
				{{item}}
			</view>
		</view>
		<view class="btn">
			开始支付
		</view>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import minCountdown from '@/components/min-countdown/min-countdown.vue'
	
	export default {
		
		data() {
			return {
				use:true,
				items:["","",""],
				active:0,
				num:"9.80",
				bands:true,
				 time1: new Date().getTime() + 900000,
			};
		},
		methods: {
			change() {
				if(this.use){
					return this.use= false
				}else{
					return this.use= true
				}
			},
			 openPopup(){
			       this.$refs.popup.open()
			},
			closePopup(){
			      this.$refs.popup.close()
			},
			c(index){
				return this.active=index;
			},
			aa(){
				if(this.active!=0){
					this.num='15.00'
				}else{
					this.num='9.80'
				}
			},
			bandc(){
				if(this.bands){
					return this.bands=false;
				}else{
					return this.bands=true;
				}
			},
			callback () {
			    console.log('倒计时结束')
				 uni.navigateTo({
				                    url: 'order_child',
				                    success: res => {},
				                    fail: () => {},
				                    complete: () => {}
				                });
			}
			
		},
		components:{
			uniPopup,
			minCountdown
		}
	}
</script>

<style >
	.red {
	  color: red;
	  font-size: 40rpx;
	}
	.head{
		border: 1px solid white;
		height: 280upx;
	}
	.class_active{
		background-image: url(~@/static/img/class_active.png);
		background-repeat: no-repeat;
		background-size: 53upx 53upx;
		background-position: -7upx -10upx;
	}
	.wrap{
		width: 87%;
		margin-left: 13%;
	}
	.box{
		/* border: 1px solid red; */
		height: 1170upx;
	}
	.tm{
		margin-top: 50upx;
	}
	.a1{
		font-size: 30upx;
		color: #808080;
		text-align: center;
	}
	.cmoney{
		text-align: center;
		font-size: 30upx;
		height: 100upx;
		line-height: 100upx;
		font-weight: bold;
		/* border: 1px solid red; */
	}
	.cmoney text{
		font-size: 80upx;
	}
	.money{
		text-align: center;
		font-size: 30upx;
		text-decoration: line-through;
	}
	.mt{
		height: 100upx;
		/* border: 1px solid red; */
		margin-top: 40upx;
		font-weight: bold;
		font-size: 40upx;
		line-height: 100upx;
	}
	.mtzf{
		position: relative;
	}
	.mtzf:after{
		content: '推荐';
		display: inline-block;
		width: 55upx;
		height: 40upx;
		/* border: 1px solid black; */
		position: relative;
		top: -5upx;
		left: 10upx;
		font-size: 22upx;
		line-height: 40upx;
		background-color:#FFA020;
		border-radius: 30upx 50upx 50upx 1upx;
		color: white;
		text-align: center;
		font-weight: normal;
		
		
	}
	.mtzf:before{
		content: '';
		display: inline-block;
		width: 55upx;
		height: 55upx;
		/* border: 1px solid black; */
		position: absolute;
		left: -75upx;
		top: 23upx;
		background-image: url(~@/static/img/zs.png);
		background-repeat: no-repeat;
		background-position: -9upx -12upx;
		background-size: 55upx 55upx;
	}
	.bag{
		position: relative;
	}
	
	.bag > view{
		width: 40upx;
		height: 40upx;
		border: 1px solid black;
		border-radius: 50%;
	}
	.bag >view:first-child{
		position: absolute;
		top: -815upx;
		right: 90upx;
		
		
	}
	.bag >view:nth-child(2){
		position: absolute;
		/* top: 290upx; */
		right: 90upx;
		top: -555upx;
	}
	.bag >view:nth-child(3){
		position: absolute;
		right: 90upx;
		top: -460upx;
		
	}
	.bagActive{
		display: none;
	}
	
	.card{
		border-bottom: 1px solid #e0e0e0;
		height: 160upx;
	}
	.card .li1{
		font-size: 30upx;
		/* border: 1px solid red; */
		height: 60upx;
		line-height: 60upx;
		
		
		
	}
	.card .li1 text{
		font-size: 20upx;
		display: inline-block;
		height: 30upx;
		border: 1px solid orange;
		position: relative;
		line-height: 30upx;
		color: orange;
	}
	.card .li1 text:first-child{
		margin: 0 10upx 0 20upx;
	}
	.card .li2{
		font-size: 25upx;
		font-weight: normal;
		height: 35upx;
		/* border: 1px solid red; */
		line-height: 35upx;
	}
	.card .li2:before{
		content: '';
		display: inline-block;
		width: 30upx;
		height: 30upx;
		/* border: 1px solid black; */
		background-image: url(~@/static/img/xyh.png);
		background-repeat: no-repeat;
		background-size: 40upx 40upx;
		background-position: -10upx -6upx;
	}
  .dyh{
	  display: inline-block;
		height: 30upx;
		width: 30upx;
		background-color: white;
		line-height: 30upx;
		text-align: center;
		position: relative;
		top: -5upx;
		left: 280upx;
		font-size: 30upx;	
	}
	.pop{
		background-color: white;
		height: 1100upx;
		padding-top: 20upx;
		border-radius: 15upx;
	}
	.title{
		/* border: 1px solid red; */
		text-align: center;
		font-size: 40upx;
		height: 70upx;
		line-height: 70upx;
		margin-bottom: 20upx;
	}
	.title text{
		display: inline-block;
		position: relative;
		left: 130upx;
		font-size: 50upx;
		color: #E0E0E0;
		font-weight: 100;
	}
	.gg{
		background-color: #F4D2AC;
		 color: #FFA020;
		 width: 600upx;
		 height: 80upx;
		 line-height: 80upx;
		 text-align: center;
		
	}
	.scroll{
		height: 790upx;
		/* border: 1px solid black; */
		overflow: scroll;
	}
	 .scroll .wrap .model_zgyh{
		border-bottom: 1px solid #E0E0E0;
		height: 120upx;
	}
	 .scroll .wrap .model_sj{
		 border-bottom: 1px solid #E0E0E0;
		 height: 120upx;
	 }
	  .scroll .wrap .model_jx{
		  border-bottom: 1px solid #E0E0E0;
		  height: 120upx;
	  }
	 .scroll .wrap .model_zgyh:after{
		content: '+';
		display: inline-block;
		width: 35upx;
		height: 35upx;
		/* border: 1px solid black; */
		font-size: 50upx;
		position: relative;
		top: -60upx;
		left:450upx;
		color: #C0C0C0;
	}
	 .scroll .wrap .model_jx:after{
		 content: '+';
		 		display: inline-block;
		 		width: 35upx;
		 		height: 35upx;
		 		/* border: 1px solid black; */
		 		font-size: 50upx;
		 		position: relative;
		 		top: -60upx;
		 		left:450upx;
		 		color: #C0C0C0;
	 }
	 .scroll .wrap .model_sj:after{
		 content: '+';
		 display: inline-block;
		 width: 35upx;
		 height: 35upx;
		 /* border: 1px solid black; */
		 font-size: 50upx;
		 position: relative;
		 top: -60upx;
		 left:450upx;
		 color: #C0C0C0;
	 }
	.scroll .wrap .model_zgyh .top{
		width: 60%;
		height: 50upx;
		font-size: 35upx;
		line-height: 50upx;
		margin-top: 20upx;
		margin-bottom: 10upx;
		/* color: #C0C0C0; */
		position: relative;
	}
	 .scroll .wrap .model_jx .top{
		 width: 60%;
		 height: 50upx;
		 font-size: 35upx;
		 line-height: 50upx;
		 margin-top: 20upx;
		 margin-bottom: 10upx;
		 /* color: #C0C0C0; */
		 position: relative;
	 }
	 .scroll .wrap .model_sj .top{
		 width: 60%;
		 height: 50upx;
		 font-size: 35upx;
		 line-height: 50upx;
		 margin-top: 20upx;
		 margin-bottom: 10upx;
		 /* color: #C0C0C0; */
		 position: relative;
	 }
	.scroll .wrap .model_zgyh .top:before{
		content: '';
		display: inline-block;
		width: 40upx;
		height: 40upx;
		/* border: 1px solid !important; */
		position: absolute;
		left: -60upx;
		top: 7upx;
		background-image: url(~@/static/img/zgyh.png);
		background-size: 40upx 40upx;
		background-repeat: no-repeat;
	}
	 .scroll .wrap .model_jx .top:before{
		 content: '';
		 display: inline-block;
		 width: 40upx;
		 height: 40upx;
		 /* border: 1px solid !important; */
		 position: absolute;
		 left: -60upx;
		 top: 7upx;
		 background-image: url(~@/static/img/jxyh.png);
		 background-size: 40upx 40upx;
		 background-repeat: no-repeat;
	 }
	 .scroll .wrap .model_sj .top:before{
		 content: '';
		 display: inline-block;
		 width: 40upx;
		 height: 40upx;
		 /* border: 1px solid !important; */
		 position: absolute;
		 left: -60upx;
		 top: 7upx;
		 background-image: url(~@/static/img/sjyh.png);
		 background-size: 40upx 40upx;
		 background-repeat: no-repeat;
	 }
	.scroll .wrap .model_zgyh .bottom{
		border: 1px solid #FFA020;
		width: 30%;
		color: #FFA020;
		text-align: center;
	}
	 .scroll .wrap .model_jx .bottom{
		 border: 1px solid #FFA020;
		 width: 30%;
		 color: #FFA020;
		 text-align: center;
	 }
	 .scroll .wrap .model_sj .bottom{
		 border: 1px solid #FFA020;
		 width: 22%;
		 color: #FFA020;
		 text-align: center;
	 }
	.scroll .wrap .model{
		border-bottom: 1px solid #E0E0E0;
		height: 120upx;
	}
	.scroll .wrap .model_ye{
		border-bottom: 1px solid #E0E0E0;
		height: 120upx;
	}
	.scroll .wrap .model_ye .top{
		/* border: 1px solid black; */
		width: 60%;
		height: 50upx;
		font-size: 35upx;
		line-height: 50upx;
		margin-top: 20upx;
		margin-bottom: 10upx;
		color: #C0C0C0;
		font-weight: 100;
		position: relative;
	}
	.scroll .wrap .model_ye .top:before{
		content: '';
		display: inline-block;
		width: 40upx;
		height: 40upx;
		/* border: 1px solid !important; */
		position: absolute;
		left: -60upx;
		top: 7upx;
		background-image: url(~@/static/img/ye.png);
		background-size: 40upx 40upx;
		background-repeat: no-repeat;
		
	}
	.scroll .wrap .model_ye .bottom{
		/* border: 1px solid #FFA020; */
		width: 35%;
		color: #C0C0C0;
		
	}
	.wrap .models{
		border-top: 1px solid #E0E0E0;
		height: 110upx;
	}
	.wrap .model_title{
		height: 120upx;
		border-bottom: 1px solid #E0E0E0;
		line-height: 120upx;
		color: #C0C0C0;
	}
	.wrap .model_title:after{
		content: '';
		display: inline-block;
		width: 15upx;
		height: 15upx;
		border: 1px solid black;
		border-color: white white #C0C0C0 #C0C0C0; 
		transform: rotate(-45deg);
		position: relative;
		left: 20upx;
		top: -7upx;
	}
	.wrap .models:after{
		content: '+';
		display: inline-block;
		width: 35upx;
		height: 35upx;
		/* border: 1px solid black; */
		font-size: 50upx;
		position: relative;
		top: -60upx;
		left:450upx;
		color: #C0C0C0;
	}
	.wrap .models .top{
		/* border: 1px solid black; */
		width: 40%;
		height: 50upx;
		font-size: 35upx;
		line-height: 50upx;
		margin-top: 20upx;
		margin-bottom: 10upx;
		position: relative;
	}
	.wrap .models .top:before{
		content: '';
		display: inline-block;
		width: 50upx;
		height: 40upx;
		/* border: 1px solid !important; */
		position: absolute;
		left: -60upx;
		top: 7upx;
		background-image: url(~@/static/img/xk.png);
		background-size: 50upx 40upx;
		background-repeat: no-repeat;
	}
	.wrap .models .bottom{
		border: 1px solid #FFA020;
		width: 23%;
		color: #FFA020;
		text-align: center;
	}
	.scroll .wrap .model:after{
		content: '+';
		display: inline-block;
		width: 35upx;
		height: 35upx;
		/* border: 1px solid black; */
		font-size: 50upx;
		position: relative;
		top: -60upx;
		left:450upx;
		color: #C0C0C0;
	}
	.scroll .wrap .model .top{
		border: 1px solid black;
		width: 50%;
		height: 50upx;
		font-size: 35upx;
		line-height: 50upx;
		margin-top: 20upx;
		margin-bottom: 10upx;
	}
	.scroll .wrap .model .topjh{
		/* border: 1px solid black; */
		width: 50%;
		height: 50upx;
		font-size: 35upx;
		line-height: 50upx;
		margin-top: 20upx;
		margin-bottom: 10upx;
		position: relative;
	}
	.scroll .wrap .model .topjh:before{
		content: '';
		display: inline-block;
		width: 40upx;
		height: 40upx;
		/* border: 1px solid !important; */
		position: absolute;
		left: -60upx;
		top: 7upx;
		background-image: url(~@/static/img/jh.png);
		background-size: 40upx 40upx;
		background-repeat: no-repeat;
	}
	.scroll .wrap .model .topzs{
		/* border: 1px solid black; */
		width: 50%;
		height: 50upx;
		font-size: 35upx;
		line-height: 50upx;
		margin-top: 20upx;
		margin-bottom: 10upx;
		position: relative;
	}
	.scroll .wrap .model .topzs:before{
		content: '';
		display: inline-block;
		width: 40upx;
		height: 40upx;
		/* border: 1px solid !important; */
		position: absolute;
		left: -60upx;
		top: 7upx;
		background-image: url(~@/static/img/zsyh.png);
		background-size: 40upx 40upx;
		background-repeat: no-repeat;
	}
	.scroll .wrap .model .top1{
		/* border: 1px solid black; */
		width: 60%;
		height: 50upx;
		font-size: 35upx;
		line-height: 50upx;
		margin-top: 20upx;
		margin-bottom: 10upx;
		position: relative;
	}
	.scroll .wrap .model .top1:before{
		content: '';
		display: inline-block;
		width: 40upx;
		height: 40upx;
		/* border: 1px solid !important; */
		position: absolute;
		left: -60upx;
		top: 7upx;
		background-image: url(~@/static/img/gdyh.png);
		background-size: 40upx 40upx;
		background-repeat: no-repeat;
	}
	.scroll .wrap .model .top3{
		/* border: 1px solid black; */
		width: 75%;
		height: 50upx;
		font-size: 35upx;
		line-height: 50upx;
		margin-top: 20upx;
		margin-bottom: 10upx;
		position: relative;
	}
	.scroll .wrap .model .top3:before{
		content: '';
		display: inline-block;
		width: 40upx;
		height: 40upx;
		/* border: 1px solid !important; */
		position: absolute;
		left: -60upx;
		top: 7upx;
		background-image: url(~@/static/img/xyh.png);
		background-size: 40upx 40upx;
		background-repeat: no-repeat;
	}
	.scroll .wrap .model .bottom{
		border: 1px solid #FFA020;
		width: 35%;
		color: #FFA020;
		text-align: center;
	}
	.scroll .wrap .model .bottom1{
		border: 1px solid #FFA020;
		width: 20%;
		color: #FFA020;
		text-align: center;
	}
	.scroll .wrap .model .bottom2{
		border: 1px solid #FFA020;
		width: 23%;
		color: #FFA020;
		text-align: center;
	}
	.scroll .wrap .model .bottom3{
		border: 1px solid #FFA020;
		width: 23%;
		color: #FFA020;
		text-align: center;
	}
	.card .li3{
		font-size: 25upx;
		font-weight: normal;
		height: 35upx;
		/* border: 1px solid red; */
		line-height: 35upx;
		
	}
	.card .li3:before{
		content: '';
		display: inline-block;
		width: 30upx;
		height: 30upx;
		/* border: 1px solid black; */
		background-image: url(~@/static/img/jh.png);
		background-repeat: no-repeat;
		background-size: 30upx 30upx;
		background-position: -5upx 5upx;
	}
	.wx{
		border-bottom: 1px solid #E0E0E0;
		font-size: 30upx;
		font-weight: normal;
		position: relative;
	}
	.wx:before{
		content: '';
		display: inline-block;
		width: 50upx;
		height: 50upx;
		/* border: 1px solid black; */
		position: absolute;
		left: -75upx;
		top: 17upx;
		background-image: url(~@/static/img/wx.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.other{
		font-size: 20upx;
		color: #C0C0C0;
		font-weight: normal;
		height: 50upx;
		line-height: 50upx;
	}
	.other:after{
		content: '';
		display: inline-block;
		width: 15upx;
		height: 15upx;
		border: 1px solid;
		border-color: white #C0C0C0 #C0C0C0 white;
		transform:rotate(45deg);
		position: relative;
		left: 15upx;
	}
	.zfb{
		border-bottom: 1px solid #E0E0E0;
		font-size: 30upx;
		font-weight: normal;
	}
	.btn{
		/* border: 1px solid red; */
		text-align: center;
		width: 90%;
		margin: 60upx auto;
		height: 90upx;
		line-height: 90upx;
		 background: linear-gradient(to right, #FFD101 , #FFBE00);
		
	}
		
	
</style>
