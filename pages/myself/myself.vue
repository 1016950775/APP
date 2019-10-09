<template>
	<view class="content">
		<view  v-show="hasLogin">
			<view class="title-padding"></view>
			<view class="aa">
			    <view class="image-list">
					<view class="image-item" v-for="(item,index) in array" :key="index">
						<view class="image-content">
							<image style="width: 60upx; height: 60upx;margin-top: 10upx; " :mode="item.mode" :src="src" @error="imageError"></image>
						</view>
						<view class="image-title">{{item.text}}</view>
					</view>
			    </view>
				<view>
					<view class="font" v-html="user">
						{{user}}
					</view>
				</view>    
				<view class="fuhao">
					<view class="fu" ><button class="btn" type="default" plain="true"><image src="../../static/img/kf.png" style="width: 40upx;height: 40upx;"></image></button></view>
					<view class="fu" ><button class="btn" type="default" plain="true"><image src="../../static/img/cl.png" style="width: 40upx;height: 40upx;"></image></button></view>
				</view>
				<br>
				<view class="">
					<ul class="tubiao">
						<li>
							<a href="javascript:;">
								<image src="../../static/img/sc.png" style="width: 30upx;height: 30upx;"></image>
								<p style="font-size: 20upx;margin-left: -4upx;">收藏</p>
							</a>
						</li>
						<li>
							<a href="javascript:;">
								<image src="../../static/img/pj.png" style="width: 30upx;height: 30upx;"></image>
								<p style="font-size: 20upx;">评价</p>
							</a>
						</li>
						<li>
							<a href="javascript:;">
								<image src="../../static/img/hb.png" style="width: 30upx;height: 30upx;"></image>
								<p style="font-size: 20upx;margin-left: -10upx;">红包/卡卷</p>
							</a>
						</li>
						<li>
							<a href="javascript:;">
								<image src="../../static/img/xx.png" style="width: 30upx;height: 30upx;"></image>
								<p style="font-size: 20upx;">消息</p>
							</a>
						</li>
					</ul>
				</view>
				<view class="" style="margin-top: 20upx;">
					<view style="border-top: 1px solid #fff;height: 100upx;border-radius: 20upx; background: #fff;">
						<view class="">
							<view class="zuo"  >我的钱包</view>
							<view class="you" style="float: right;">进去钱包 
							  <span style="float:right;display: block;width: 20upx;height: 20upx;">></span>
							   <span style="display: block;width: 10upx;height: 10upx;background-color: #FF0000;border-radius: 10upx;float: right;margin-top: 12upx;margin-left: 20upx;margin-right: 20upx;"></span> 
							</view>
						</view>
						<view style="margin-top: 100upx;">
							<ul class="qianbao">
								<li>
									<a href="javascript:;">
										<p class="center" v-html="jine">{{jine}}</p>
										<p class="center" style="font-size: 26upx;margin-top: 8upx;">美团借钱</p>
										<p style="color: #999999;font-size: 24upx;" class="center">最高额度(元)</p>
									</a>
								</li>
								<li>
									<a href="javascript:;">
										<p class="center" v-html="jine1">{{jine1}}</p>
										<p class="center" style="font-size: 26upx;margin-top: 8upx;" >资产</p>
										<p style="color: #999999;font-size: 24upx;" class="center">持有金额(元)</p>
									</a>
								</li>
								<li>
									<a href="javascript:;" >
										<p class="center" v-html='jine2'>{{jine2}}</p>
										<p class="center" style="font-size: 26upx;margin-top: 10upx;">美食享优惠</p>
										<p style="color: #999999;font-size: 24upx;" class="center">最高随机减</p>
									</a>
								</li>
							</ul>
						</view>
						<view class="user_bottom">
							<view class="uni-padding-wrap">
								<view class="page-section swiper">
									<view class="page-section-spacing">
										<swiper class="swiper" :autoplay="autoplay" :interval="interval" :duration="duration" >
											<swiper-item>
												<view class="swiper-item uni-bg-red"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569313302&di=6ffa0f6e6b93d28dfe3961e80c8dc461&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01046758ddc7eaa801219c779a734f.jpg%402o.jpg" alt=""></view>
											</swiper-item>
											<swiper-item>
												<view class="swiper-item uni-bg-green"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568719263655&di=36a72d4382091535657361b2fb19a154&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201405%2F23%2F20140523194904_iCFWA.jpeg" alt=""></view>
											</swiper-item>
											<swiper-item>
												<view class="swiper-item uni-bg-blue"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568719300893&di=e5e30aecb797e1ce1e6cd7649accc2ec&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F07%2F20151007151747_VLuRm.jpeg" alt=""></view>
											</swiper-item>
										</swiper>
									</view>
								</view>
							</view>
							<view class="nav_three_row">
								<h1>推荐工具</h1>
								<ul>
									<li v-for="item in photolist"><a href=""><img :src="item.src" alt=""><view class="nav_icon_texts">{{item.title}}</view></a></li>
								</ul>
							</view>
						</view>
					</view>
				</view>
			</view>
				
		</view>
		<view class="bottom_content"  v-show="!hasLogin">
			<view class="tipText">登陆后可查看"我的"页面</view>
			<view class="btn-row">
			    <button type="primary" class="primary" @tap="bindLogin">登陆</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	export default {
		computed:mapState(['hasLogin']),
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
								            indicatorDots: true,
								            autoplay: true,
								            interval: 2000,
								            duration: 500,
								photolist:[
									{src:'https://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png',title:'美食美食'},
									{src:'https://p0.meituan.net/jungle/45ff2f098a20a77122bff8385192f0ec10547.png',title:'天猫超市'},
									{src:'https://p1.meituan.net/jungle/12a9834827909fa55f54bce96e67470711250.png',title:'生鲜'},
									{src:'https://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png',title:'美食'},
									{src:'http://img4.imgtn.bdimg.com/it/u=580834441,1171523667&fm=26&gp=0.jpg',title:'美团旅行'},
									{src:'http://img2.imgtn.bdimg.com/it/u=2845311404,3351991810&fm=26&gp=0.jpg',title:'美团打车'},
									{src:'http://img3.imgtn.bdimg.com/it/u=3792155978,79380745&fm=26&gp=0.jpg',title:'美团早餐'},
									{src:'http://img0.imgtn.bdimg.com/it/u=4292554909,1179815967&fm=26&gp=0.jpg',title:'美团小贷'},
									{src:'http://img4.imgtn.bdimg.com/it/u=3451432446,3519428666&fm=26&gp=0.jpg',title:'猫眼电影'},
									{src:'http://img5.imgtn.bdimg.com/it/u=3792223263,812504748&fm=26&gp=0.jpg',title:'袋鼠学院'},
									{src:'http://img4.imgtn.bdimg.com/it/u=2906007022,1229236152&fm=26&gp=0.jpg',title:'美团买菜'},
									{src:'http://img3.imgtn.bdimg.com/it/u=303840771,4283916652&fm=26&gp=0.jpg',title:'美团点评'},
	
								],
				
				// 头部
				jine:'10万',
				jine1:'0.00',
				jine2:'127元',
				user:'TOG140562692',
				array: [{
					mode: 'scaleToFill',
				}],
				src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAQCAYAAAD0xERiAAACnklEQVQ4T41TS0wTURQ9d8pPfqkKyIYI4sqFLUalSowzNMKKOLgwRkNsoy7Y2LphQUxoXJloQrtAwPhpQmKUjUNcKFbpkGCsggE0ujEooUatCVIIQhton3kPhpRQY2f1Pueed849dwgAWs+0HsvJNvWUlxTtW46t/J5fXPb5+rqusfFgZd/TMXv0z3JBODIbuXHH92hlcriz60GwdTWRiL///O1dODI3w2Jw6xNalORDqvXogT3X2xyNjYX5uZwbz0Y+LoU+fFko21FUzs+qK8owFf6F8M+5xZkfc4VtzgZUV5QCDNG7j0eaHg6OXQyGNAcptc1a/81LJduL8+sE0/oXmV3Arp3FqUdp10xiyokLPrNkwneqt6mewV6XmUCu/1amAZiSrEpx+qKUhwZSbKr/nP1gh+N0nQ+gkxkTMjYPCe6s/Yq/3qY6WCIxSrJNrZSAjmQMV1743V9BMGdEyDCdZZWreD0BHtEzXshDIBN5A72u4xkRrYOyLLLoOYszh0jTKOZ2A73u88a+pf0eTtlr0Gyv2RRKS/t9dF89K9LkZPW1qnfojebmoBSyZv15z2UzEVn4xauJKeytKN2SaOD1JxyxVKNgW85ktlWx8gCHQppnExl/IXDbNc1AnRlZJebkzeeOeL+2kCXj8AT8Lt1QxwGLS3H09A+jpcm2oZIxJlTx+7Rksk2VJUB+2e3yrkrQCCTC4GQdt56AT/3aELMBUxIOqlGifCQ4Ziik+Tcp4xtulavjySQmg24GyGCQhW2CToBusiheMQFW1Ux58BoWt5CtAUhjCebWR7WJf/XOmC0GePSQNm3gNtJMLRQKicYRYwNcpXEnHssV9p3GbKXWpSUTNg6rqiTBCib+iN2MME8M0SSDrr/VtHSq/wLcfxwuhX9dlQAAAABJRU5ErkJggg=='
			}
		},
		methods: {
			bindLogin(){
				uni.navigateTo({
					url:'../login/login'
				})
			}
		}
	}
</script>

<style scoped>
.image-list{
		margin-top: 8upx;
		margin-left: 10upx;
		width: 60upx;
		height: 60upx;
		border: 1px solid white;
		border-radius: 15px;
		overflow: hidden;
		float: left;
	}
	
	.aa{
		width: 750upx;
		background-color: #F0AD4E;
		height: 200upx;
	}
	
	.fuhao{
		float: right;
		font-size: 20px;
	}
	.fu{
		float: right;
	}
	.font{
		float: left;
		margin-left: 40upx;
	}
	
	
	/* 按钮设置 */
	.btn{
		height: 100upx;
		font-size: 40upx;
		margin-top: -10upx;
		border: none !important;
		/* border: 1px solid #F0AD4E; */
		/* button:before{border: none;} */
	}
	.title-padding {
	        height: var(--status-bar-height);
	       width: 100%;
		   background-color: #F0AD4E;
	    }
		
		.item{
			display: flex;
		}
		
		/* 图标 */
		.tubiao{
			margin: 0;
			padding: 0;
			list-style: none;
			display: flex;
      	    margin-top: 20px;
		    width: 100%;
			background-color: #F0AD4E;
			justify-content: space-around;
		
		}
		.tubiao li{
			width: 110upx;
			background-color: #F0AD4E;
		}
		.tubiao li a{
			text-align: center;
		}
		 /* 钱包 */
		 .zuo{
			 float: left;
			 margin-left: 20upx;
			 margin-top: 20upx;
			 font-size: 28upx;
		 }
		 .you{
			 float: right;
			 margin-top: 20upx;
			 margin-right: 20upx;
			 font-size: 24upx;
		 }
		 .qianbao{
			 margin: 0;
			 padding: 0;
			 list-style: none;
			 margin-top: 70upx;
			 display: flex;
			 width: 100%ss;
			 justify-content: space-around;
		 }
		  .qianbao li{
			  width: 180upx;
			  
		  }
		  .qianbao li a{
			  font-size: 28upx;
		  }
		  .center{
			  text-align: center;
		  }
		  
		  /* 底部 */
		  li{
		  		list-style: none;
		  	}
		  	a{
		  		text-decoration: none;
		  	}
		  	.user_bottom{
		  		margin: 60upx 40upx;
		  	}
		  	.uni-padding-wrap{
		  		margin: 20upx 0;
		  		border-bottom: 1px solid #E1E1E1;
		  		border-top: 1px solid #E1E1E1;
		  		height: 220upx;
		  	}
		  	.swiper-item{
		  		height: 180upx;
		  		margin: 20upx 0;
		  	}
		  	.swiper-item img{
		  		width: 100%;
		  		height: 100%;
		  		border-radius: 12upx;
		  	}
			.nav_three_row{
				margin-top: 40upx;
			}
		  	.nav_three_row h1{
		  		font-size: 34upx;
		  		list-style: none;
		  		font-weight: bold;
				
		  	}
		  	
		  	
		  	
		  	.nav_three_row ul{
		  		margin: 20upx 10upx;
		  		display: flex;
		  		justify-content: space-between;
		  		flex-wrap: wrap;
		  	}
		  	.nav_three_row ul li{
		  		width: 157upx;
		  		text-align: center;
		  		margin-top: 40upx;
		  	}
		  	.nav_three_row ul li img{
		  		width: 66upx;
		  		height: 66upx;
		  	}
		  	.nav_icon_texts{
		  		width: 157upx;
		  		line-height: 1.4;
		  		white-space: nowrap;
		  		color: #333;
		  		font-size: 28upx;
		  		text-align: center;
		  	}
			
	/* 未登录显示 */
	.bottom_content{
		width: 100%;
		height: 90%;
		/* background-color: #F8F8F8; */
	}
	.bottom_content .tipText{
		font-size: 40upx;
		text-align: center;
		font-weight: bold;
		margin-top: 400upx;
	}
	.bottom_content .btn-row{
		width: 200upx;
		margin: 50upx auto;
		opacity: .5;
	}
	.bottom_content .btn-row > button{
		width: 100upx;
		height: 60upx;
		line-height: 60upx;
		font-size: 30upx;
		padding: 0;
		background: #FFC300;
		border: none;
		outline: none;
	}
</style>
