<template>
	<view class="submit">
		<view class="shangpinxinxi" v-for="item in addorderlist">
			<view class="dianpuming">
				{{item.titles}}
				<span class="zhuansong">美团专送</span>
			</view>
			<view class="shpolist">
				<ul>
					<li v-for="items in (item.childcommoditylist)" class="after">
						<img :src="items.src" alt="">
						<view class="commcontent">
							<view class="dazhe">
								<span class="zhe">折</span>
								<span class="geshu">x{{items.num}}</span>
							</view>
							<span class="canming">{{items.content}}</span>
							<span class="yuanjia">￥{{items.oldmoney}}</span>
							<span class="xianjia">￥{{items.nowmoney}}</span>
						</view>
					</li>
				</ul>
			</view>
		</view>
		<view>
			<view class="baozhuangfei" style="margin-top: 60upx;">
				<span>包装费</span>
				<span>￥6</span>
			</view>
			<view class="baozhuangfei">
				<span>配送费</span>
				<span>￥0</span>
			</view>
			<view class="baozhuangfei" style="margin-top: 60upx;">
				<view>
					首单立减<span class="xinke">您不是新客，您已下过单</span>
				</view>
				<view>不可用</view>
			</view>
			<view class="baozhuangfei">
				<span>抵用券</span>
				<span class="diyong">暂无可用，开通会员可享大红包></span>
			</view>
			<view class="baozhuangfei">
				<view>
					首单立减<span class="xinke">满减券和商品券可同享</span>
				</view>
				<view class="quankeyong">2张可用></view>
			</view>
			<view class="jiesuan" style="margin-top: 40upx;">
				<view class="yiyouhui">
					已优惠<span>￥45.12</span>
				</view>
				<view class="xiaoji">
					小计<sapn class="heji">￥{{count}}</sapn>
				</view>
			</view>
		</view>
		<view class="submitdd">
			<view class="tijiaotwo">
				<view class="yiyouhuis">
					已优惠￥45.12
				</view>
				<view class="hejis">
					合计
					<span class="allmoney">￥{{count}}</span>
				</view>
			</view>
			<view class="title_3">
				<button class="titleText" @click="enter">提交订单</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex';
	export default {
		
		data() {
			return {
				// commoditylist:[
				// 	// {titles:'一纸鸡锡纸烧肉饭（小寨店）',
				// 	// childcommoditylist:[
				// 	// 	{src:'http://img2.imgtn.bdimg.com/it/u=4221985644,2767818642&fm=26&gp=0.jpg',num:'1',content:'招牌口水鸡+东北米饭+好好吃',oldmoney:'23',nowmoney:32},
				// 	// 	{src:'http://img2.imgtn.bdimg.com/it/u=4221985644,2767818642&fm=26&gp=0.jpg',num:'1',content:'招牌口水鸡+东北米饭+好好吃',oldmoney:'23',nowmoney:32},
				// 	// 	{src:'http://img2.imgtn.bdimg.com/it/u=4221985644,2767818642&fm=26&gp=0.jpg',num:'1',content:'招牌口水鸡+东北米饭+好好吃',oldmoney:'23',nowmoney:32.6}
				// 	// ]}
				// ],
				shop_relist0002:[]
			}
		},
		methods: {
			...mapMutations(['shopCarList']),
			enter(){
				const _this = this;
				for (let i=0;i<_this.addorderlist.length;i++) {
					for(let j=0;j<_this.addorderlist[i].childcommoditylist.length;j++){
						_this.shop_relist0002.push(
							{
								img:_this.addorderlist[i].childcommoditylist[j].src,
								name:_this.addorderlist[i].childcommoditylist[j].content,
								nowmoney:_this.addorderlist[i].childcommoditylist[j].nowmoney
							}
						)
					}
				}
				_this.shopCarList(
					{
						tp1:'https://cube.elemecdn.com/1/7d/65861fbd5153897019d3c8997412cpng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed',
						jt:'购物车列表',
						xiaobiaos:['20减10','20减10','20减10','20减10','20减10'],
						wancheng:'已完成',
						num:_this.shop_relist0002.length,
						z_money:_this.z_num,
						huadongs:_this.shop_relist0002
					}
					
				)
				
				
				
				uni.switchTab({
					url:'../../pages/more/more'
				})
				this.addorderlist = [];
			}
		},
		computed:{
			count(){
				const _this = this;
				let count_z =0;
				for(let i=0;i<_this.addorderlist.length;i++){
					for(let j=0;j<_this.addorderlist[i].childcommoditylist.length;j++){
						count_z += _this.addorderlist[i].childcommoditylist[j].nowmoney;
					}
				}
				
				return count_z;
			},
			addorderlist(){
				return this.$store.state.addorderlist;
			},
			z_num(){
				let num = 0;
				const _this = this;
				for (let i=0;i<_this.addorderlist.length;i++) {
					for(let j=0;j<_this.addorderlist[i].childcommoditylist.length;j++){
						num += _this.addorderlist[i].childcommoditylist[j].nowmoney
					}
				}
				return num;
			}
		},
		watch:{
			// addorderlist(){
			// 	deep:true
			// 	this.commoditylist = this.addorderlist;
				
			// },
			// 'addorderlist':{
			// 		handler:function(newValue,oldValue){
			// 		   this.commoditylist = this.addorderlist;
			// 		},
			// 		deep:true,
			// 	}
			 
		},
		
		// onLoad() {
		// 	this.commoditylist = this.addorderlist;
		// }
	}
</script>

<style>
	ul{
		margin: 0;
		padding: 0;
	}
	li{
		list-style: none;
	}
	.submit{
		width: 720upx;
		margin: 20upx auto;
		background: #fff;
		border: 1upx solid #fff;
		border-radius: 8px;
	}
	.shangpinxinxi{
		width: 100%;
		
	}
	.dianpuming{
		font-size: 24upx;
		display: flex;
		justify-content: space-between;
		margin: 0 15upx;
		color:#808080;
		text-align: center;
	}
	.zhuansong{
		background: #FED060;
		display: inline-block;
		width: 11%;
		height: 22upx;
		line-height: 22upx;
		font-size: 18upx !important;
		border-radius: 8upx 0 8upx 0;
	}
	.shpolist{
		font-size: 12px;
		margin-top: 40upx;
	}
	.shpolist li{
		width: 660upx;
		height: 80upx;
		margin: 15upx;
		display: flex;
		justify-content: space-between;
	}
	.shpolist li img{
		width: 86upx;
		height: 86upx;
	}
	.commcontent{
		width: 86%;
		height: 100%;
		display: flex;
		justify-content: space-between;
	}
	.dazhe{
		width: ;
	}
	.dazhe{
		width: 30upx;
		height: 100%;
		font-size: 0;
	}
	.dazhe .geshu{
		display: inline-block;
		width: 32upx;
		height: 44upx;
		padding-top: 26upx;
		text-align: center;
		font-size: 26upx;
		overflow: hidden;
		color:#808080;
	}
	.dazhe .zhe{
		display: inline-block;
		width: 32upx;
		height: 32upx;
		background-color: purple;
		font-size: 24upx;
		text-align: center;
		line-height: 32upx;
		color: #fff;
	}
	.canming{
		width: 260upx;
		font-size: 24upx;
		display: inline-block;
		color: #333 !important;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.yuanjia{
		text-decoration: line-through;
		font-size: 22upx;
		color: #808080;
		font-family: Arial;
	}
	.xianjia{
		font-size: 24upx;
		margin-right: -32upx;
	}
	.baozhuangfei{
		display: flex;
		justify-content: space-between;
		font-size: 26upx;
		margin: 20upx 15upx;
	}
	.baozhuangfei .xinke{
		display: block;
		font-size: 22upx;
		color: #808080;
	}
	.diyong{
		color: #808080;
	}
	.quankeyong{
		color: red;
	}
	.jiesuan{
		padding-left: 340upx;
		display: flex;
		justify-content: space-between;
	}
	.yiyouhui{
		font-size: 26upx;
		height: 50upx;
		line-height: 60upx;
	}
	.yiyouhui span{
		color: red;
	}
	.yiyouhuis{
		font-size: 26upx;
		height: 70upx;
		line-height: 76upx;
	}
	.xiaoji{
		font-size: 26upx;
	}
	.xiaoji .heji{
		font-size: 38upx;
	}
	.hejis{
		font-size: 26upx;
	}
	.hejis .allmoney{
		font-size: 38upx;
		
	}
	.submitdd{
		width: 700upx;
		height: 100upx;
		border-radius: 50upx;
		background-color: #000000;
		margin: 25upx;
		position: fixed;
		bottom:10upx;
		left: 0;
		display: flex;
		justify-content: space-between;
		overflow: hidden;
		z-index: 9999;
	}
	.tijiaotwo{
		width: 400upx;
		height: 70upx;
		line-height: 70upx;
		display: flex;
		justify-content: space-between;
		color: #fff;
		padding: 14upx 0 0 30upx;
	}
	.title_3{
		display: inline-block;
		height: 100%;
		line-height: 100upx;
		text-align: center;
		width: 220upx;
		font-size: 30upx;
		background-color: #F0AD4E;
		margin: 0;
		padding: 0;
	}
	.title_3 .titleText{
		height: 100%;
		line-height: 100upx;
		text-align: center;
		width: 220upx;
		font-size: 30upx;
		background-color: #F0AD4E;
		margin: 0;
		padding: 0;
	}

</style>
