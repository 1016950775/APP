<template>
	<view class="page">
		<view>
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
				<view class="image-list">
					<view  class="scroll-view-item_H" v-for="(item,index) in array" :key="index">
						<view>
							<view class="image-content">
								<image style="width: 100px; height: 100px; background-color: white;" :mode="item.mode" :src="item.src"
									@error="imageError"></image>
							</view>
						</view>
						<view class="image-cont">
							<view class="image-aa">
								<view class="image-title">{{item.text}}</view>
								<view class="image-bb">
									<view class="image-mi">{{item.mi}}</view>
									<view class="image-qian">{{item.qian}}</view>
								</view>
							</view>
							<view class="image-cc">
								<view class="image-dd">减</view>
								<view class="image-ee">折</view>
								<view class="image-ff">返</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	        
	</view>
</template>

<script>
	export default {
		data() {
			return{
				array: [ {
				                mode: 'aspectFit',
				                text: '虾小士·小龙虾轻食',
								mi:'566米',
								qian:'省￥3配送费',
								src:'https://img.meituan.net/600.600/msmerchant/d3afb3307c438fea006b3635028cb8f9181875.jpg@220w_125h_1e_1c',
				            },
							{
							    mode: 'aspectFit',
							    text: '瓷  氏  牛  排 ',
								mi:'899米',
								qian:'省￥300配送费',
								src:'http://img4.imgtn.bdimg.com/it/u=1534422690,1120432942&fm=26&gp=0.jpg'
							},
							{
							    mode: 'aspectFit',
							    text: '甜  甜  蛋  糕 ',
								mi:'233米',
								qian:'省￥10配送费',
								src:'http://img4.imgtn.bdimg.com/it/u=1783235894,1977462704&fm=26&gp=0.jpg'
							},
							{
							    mode: 'aspectFit',
							    text: '瓷  氏  海  鲜 ',
								mi:'2333米',
								qian:'省￥1000配送费',
								src:'http://img5.imgtn.bdimg.com/it/u=1438042393,2826460726&fm=26&gp=0.jpg'
							},
							{
							    mode: 'aspectFit',
							    text: '瓷  氏  火  锅 ',
								mi:'1000米',
								qian:'省￥999配送费',
								src:'http://img4.imgtn.bdimg.com/it/u=843570789,271044325&fm=11&gp=0.jpg'
							},
						],
						 scrollTop: 0,
						            old: {
						                scrollTop: 0
						            }
					}
				},
				    methods: {
				        imageError: function(e) {
				            console.error('image发生error事件，携带值为' + e.detail.errMsg)
				        },
						upper: function(e) {
						            console.log(e)
						        },
						        lower: function(e) {
						            console.log(e)
						        },
						        scroll: function(e) {
						            console.log(e)
						            this.old.scrollTop = e.detail.scrollTop
						        },
						        goTop: function(e) {
						            this.scrollTop = this.old.scrollTop
						            this.$nextTick(function() {
						                this.scrollTop = 0
						            });
						            uni.showToast({
						                icon:"none"
						            })
									}
				    }
	}
</script>

<style scoped>
	.scroll-view_H{
		/* background-color: #007AFF; */
	}
.image-list{
	display: flex;
	flex-direction:row;
	height: 100%;
	/* background-color: yellow; */
	width: 300%;
}
.image-item{
	float: left;
}
.image-content{
	border: #f4f4f4 solid 1px;
}
/* .image-title{
	float: left;
} */
.image-aa{
	float: left;
}
.image-mi{
	font-size: 8px;
	border-radius: 5px;
	
	line-height: 13px;
	text-align: center;
	background-color: #F0AD4E;
	margin-top: 10px;
}
.image-qian{
	text-align: center;
	font-size: 5px;
	background-color: #F0AD4E;
	margin-top: 10px;
}
.image-dd{
	float: left;
	background-color: #DD524D;
	border-radius: 3px;
	margin-left: 10px;
	margin-top: 5px;
}
.image-ee{
	float: left;
	background-color: #4CD964;
	border-radius: 3px;
	margin-left: 10px;
	margin-top: 5px;
}
.image-ff{
	float: left;
	background-color: #DD524D;
	border-radius: 3px;
	margin-left: 10px;
	margin-top: 5px;
}
.scroll-view_H{
	width: 100%;
	white-space: nowrap;
}
.scroll-view-item_H{
	/* display: inline-block; */
	width: 750upx;
	height: 100px;
	display: flex;
}
.image-cont{
	
}

</style>
