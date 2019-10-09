<template>
	<view class="goodsList">
		<view class="row clear" v-for="(goodsList,index) in goodsLists" :key="index">
			<view class="head clear">
				<view class="checkbox-box" @tap="allSelect">
					<view class="checkbox">
						<view :class="[isAllselected?'on':'']"></view>
					</view>
				</view>
					<view class="head1 clear">
						<view class="title">{{goodsList.title}}></view>
						<view class="discount">
							<span class="badge" v-for="badge in goodsList.badges">{{badge}}</span>
						</view>
					</view>	
			</view>
			<!-- 商品信息 -->
			<view class="main clear" v-for="(list,index) in lists" :key="index">
				<view class="checkbox-box" @tap="selected(index)">
					<view class="checkbox">
						<view :class="[list.selected?'on':'']"></view>
					</view>
				</view>
				<view>
					<image :src="list.img"></image>
					<view class="info">
						<view class="name">{{list.name}}</view>
						<view class="info1">
							<view class="num">X{{list.num}}</view>
							<view class="money">￥{{list.money}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="main1">
				<view class="delivery">配送费</view>
				<view class="delivery_money">￥{{goodsList.delivery_money}}</view>
			</view>
			<view class="foot">
				<button class="price" size="mini">￥{{sumPrice}}</button>
				<button class="settlement" size="mini" @click="goOrder">去结算</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				sumPrice:'0.00',
				selectedList:[],
				isAllselected:false,
				goodsLists:[{
					title:'购物车列表',
					badges:['商城大促销减免活动','20减10','20减10','20减10','20减10','20减10'],
					lists:[{
						id:1,
						img:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/uni-android.png',
						name:'大盘鸡',
						num:1,
						money:'11',
					},{
						id:2,
						img:'https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/uni-android.png',
						name:'大盘鸡',
						num:1,
						money:'11',
					}],
					delivery_money:'0',
				}],
				reorderList:[]
			}
		},
		methods: {
			// addorderlist:this.$store.mutations.addorderlist,
			// 选中商品
			selected(index){
				this.lists[index].selected = this.lists[index].selected?false:true;
				let i = this.selectedList.indexOf(this.lists[index].id);
				i>-1?this.selectedList.splice(i, 1):this.selectedList.push(this.lists[index].id);
				this.isAllselected = this.selectedList.length == this.lists.length;
				this.sum();
			},
			//全选
			allSelect(){
				let len = this.lists.length;
				let arr = [];
				for(let i=0;i<len;i++){
					this.lists[i].selected = this.isAllselected? false : true;
					arr.push(this.lists[i].id);
				}
				this.selectedList = this.isAllselected?[]:arr;
				this.isAllselected = this.isAllselected||this.lists.length==0?false : true;
				this.sum();
			},
			// 合计
			sum(e,index){
				this.sumPrice=0;
				let len = this.lists.length;
				for(let i=0;i<len;i++){
					if(this.lists[i].selected) {
						if(e && i==index){
							this.sumPrice = this.sumPrice + (e.detail.value*this.lists[i].price);
						}else{
							this.sumPrice = this.sumPrice + (this.lists[i].number*this.lists[i].price);
						}
					}
				}
				this.sumPrice = this.sumPrice.toFixed(2);
			},
			
			// 结算
			goOrder(){
				const _this = this;
				for(let i=0;i<_this.lists.length;i++){
					_this.reorderList.push({
						src:_this.lists[i].img,
						content:_this.lists[i].name,
						num:_this.lists[i].num,
						nowmoney:_this.lists[i].money,
						oldmoney:(_this.lists[i].money/0.8).toFixed(2)
					})
				};
				_this.$store.commit("addorderlist",[{
					titles:'加入购物车',
					childcommoditylist:_this.reorderList
				}]);
				uni.navigateTo({
					url:'../gouwu/gouwu'
				})
			}
		},
		computed:{
			lists(){
				return this.$store.state.shopCarList_ture;
			},
		}
	
	}
</script>

<style scoped>
	.clear:after{
	  content:"";
	  display: block;
	  clear:both;
	}
	
.goodsList{
	width: 720upx;
	margin: 0 auto;
	border: 2upx solid #555555;
	border-radius: 10upx;
}
.row{
	padding: 20upx;
}
.head,.main{
	display: flex;
	flex-direction: row;
	justify-content:flex-start;
}
.head .head1{
	float: left;
}
.head .head1 .discount{
	overflow: hidden;
	/* white-space: nowrap; */
	display: flex;
	flex-wrap: wrap;
	width: 620upx;
}
.head .head1 .discount span{
	border: 2upx solid #D1372C;
	margin-right: 10upx;
	font-size: 20upx;
}
.main{
	margin: 20upx 0 20upx 0;
}
.main image{
	width: 150upx;
	height: 150upx;
	float: left;
	margin-right: 20upx;
}
.main .info{
	height: 150upx;
	width: 402upx;
	display: flex;
	flex-direction:column;
	justify-content:space-around;
}
.main .info .info1 .num{
	float: left;
	display: inline-block;
	font-size: 20upx;
}
.main .info .info1 .money{
	float: right;
	display: inline-block;
	font-size: 30upx;
}

.main1{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 0 55upx 20upx 55upx;
}
.main1 .delivery_money{
	font-size: 30upx;
}



.foot{
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	margin-top: 20upx;
}
.foot button{
	margin: 0;
}
button::after{
	border: none;
	} 
.foot .price{
	border-radius: 50upx 0upx 0upx 50upx;
	color: #D1372C;
	background-color: #FCE97F;
	border: none;
}
.foot .settlement{
	border-radius: 0upx 50upx 50upx 0upx;
	background-color: #fed060;
}


.checkbox-box{
		margin-right: 20upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.checkbox-box .checkbox{
		width: 35upx;
		height: 35upx;
		border-radius: 100%;
		border: solid 2upx #f06c7a;
		
	}
	.checkbox-box .checkbox .on{
		width: 25upx;
		height: 25upx;
		border-radius: 100%;
		background-color: #f06c7a;
	}
</style>
