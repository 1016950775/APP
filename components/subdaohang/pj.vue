<template>
	<view class="">
		<view v-for="item in aa">
			<view class="user1">
				<view class="icon">
					<img :src="item.icon" alt="图片错误">
				</view>
				<view class="date">
					<view>{{item.user}}</view>
				</view>
				<view class="abc">{{item.date}}</view>
			</view>
			<view class="content">{{item.content}}</view>
			<view class="imgs">
				<img :src="item.image" alt="">
			</view>
			<view class="icon1">
				<uni-icon type="compose" size="30"></uni-icon>
				<view class="name">{{item.name}}</view>
			</view>
			<view class="divs"></view>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	export default {
		components: {uniIcon},
		data() {
			return {
				aa:[
					{
						icon:"http://st4.pixhey.com/thumbs/11486624/image/20186/201865488/api_thumb_450.jpg",
						user:"user123123",
						date:"2018.09.18",
						content:" 我最好奇的是未来的自己是什么样，过着什么样的生活？未来的世界会变成什么样，是否会更好，是否自己会更加适应世界？如果自己是对的，那么同路人是否会更多？",
						image:"http://pic101.huitu.com/pic/20171103/35432_20171103214852377012_0.jpg",
						name:"澄阳湖大闸蟹"
					},
					{
						icon:"http://st2.pixhey.com/thumbs/1637793/image/11088/110882300/api_thumb_450.jpg",
						user:"陈先生",
						date:"2018.09.08",
						content:"人生的终生伴侣其实只能是自己。芸芸众生，能碰到自己的同路人是幸运的，也是小概率的事情。而这个同路也只是人生中的一个阶段而已，有长有短，也不必过于执着。",
						image:"https://cdn.huaduocai.net/Storage/Shop/3/Products/6853/40142205406123.jpg",
						name:"元气满分双人套餐"
					},
					{
						icon:"http://st.pixhey.com/thumbs/2582691/image/3637/36370833/api_thumb_450.jpg",
						user:"小兄弟",
						date:"2018.09.18",
						content:" 有跨越大山的精神，必然有横渡海洋的气概，有蓝天般纯净存在，必然有爱惜生命的存在。",
						image:"http://img1.imgtn.bdimg.com/it/u=3635210143,289119720&fm=26&gp=0.jpg",
						name:"巨无霸薯条四件套"
					},
					{
						icon:"http://st.pixhey.com/thumbs/2923727/image/3665/36657307/api_thumb_450.jpg",
						user:"46521",
						date:"2018.09.18",
						content:" 这辈子注定只能远远地看着，你尘世的一切与我无关。我只把你幻化的精灵锁在我心中最柔软的地方，然后把钥匙丢弃在我自己也不知道的地方。",
						image:"http://i1.hdslb.com/bfs/archive/073b67e952ab3c2444433b0211aef5f899d1b0a1.png",
						name:"早晨开心乐园餐"
					},
					{
						icon:"http://st3.pixhey.com/thumbs/1898627/image/14726/147262665/api_thumb_450.jpg",
						user:"vip",
						date:"2018.09.18",
						content:" 你早已不是我初见的你，我也不是你初见的我。过往的柔情蜿蜒成重逢的惊喜，又教人如何割舍的下?纵使君不如初，卿非昔比，情缘难逝。那么这一场的重逢，又何尝不是下一个初见?",
						image:"http://cdn4.orstatic.com.cn/userphoto/photo/4/3DS/00O2000D95344868AA17BAl.jpg",
						name:"麦乐送皮蛋粥专享套餐"
					},
					{
						icon:"http://st.pixhey.com/thumbs/2582691/image/3637/36370833/api_thumb_450.jpg",
						user:"小兄弟",
						date:"2018.09.18",
						content:" 有跨越大山的精神，必然有横渡海洋的气概，有蓝天般纯净存在，必然有爱惜生命的存在。",
						image:"http://pic0.huitu.com/res/20160907/200604_20160907184919787111_1.jpg",
						name:"巨无霸薯条四件套"
					},
					{
						icon:"http://st2.pixhey.com/thumbs/1637793/image/11088/110882300/api_thumb_450.jpg",
						user:"陈先生",
						date:"2018.09.08",
						content:"人生的终生伴侣其实只能是自己。芸芸众生，能碰到自己的同路人是幸运的，也是小概率的事情。而这个同路也只是人生中的一个阶段而已，有长有短，也不必过于执着。",
						image:"http://img2.imgtn.bdimg.com/it/u=2299853507,2034630409&fm=214&gp=0.jpg",
						name:"元气满分双人套餐"
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.user1{
	margin-left: 20upx;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
}
.date{
	margin-left: 14upx;
	line-height: 100upx;
	height: 120upx;
	width: 380upx;
	flex-wrap: nowrap;
	justify-content: space-between;
}
.icon img{
	height: 100upx;
	width: 100upx;
	border-radius: 50upx;
}
.content{
	font-size: 32upx;
	margin-left: 120upx;
	width: 560upx;
	/* border: 2upx solid #007AFF; */
	margin-bottom: 30upx;
}
.abc{
	color: #AAAAAA;
	font-size: 28upx;
}
.imgs{
	margin-left: 120upx;
	/* border: 2upx solid #FB4E44; */
	height: 350upx;
	width: 350upx;
	border-radius: 14upx;
}
.imgs img{
	height: 350upx;
	width: 350upx;
	border: 10upx;
	border-radius: 14upx;
}
.icon1{
	font-size: 28upx;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	margin-top: 10upx;
	margin-left: 120upx;
}
.icon1 view{
	color: #AAAAAA;
	height: 60upx;
	line-height: 60upx;
	/* border: 2upx solid #333333; */
}
.divs{
	margin: 35upx 0 30upx 50upx;
	margin-left: 120upx;
	width: 629upx;
	border: 1upx solid #E1E1E1;
}
</style>
