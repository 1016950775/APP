<template>
	<view class="nav">
		<view class="nav_text">
			<ul>
				<li class="first"><a href="">面条</a></li>
				<li><a href="">螺蛳粉</a></li>
				<li><a href="">炒菜</a></li>
				<li><a href="">冒菜</a></li>
				<li><a href="">水盆羊肉</a></li>
				<li><a href="">张亮麻辣烫</a></li>
			</ul>
		</view>
		<view class="nav_five">
			<ul>
				<li v-for="item in photolist_one">
					<a href=""><img :src="item.src" alt=""><view class="nav_icon_text">{{item.title}}</view></a>
				</li>
			</ul>
		</view>
		<view class="nav_ten">
			<ul>
				<li v-for="item in photolist_five">
					<a href=""><img :src="item.src" alt=""><view class="nav_icon_text">{{item.title}}</view></a>
				</li>
			</ul>
		</view>
		<view class="nav_ten">
			<ul>
				<li v-for="item in photolist_ten">
					<a href=""><img :src="item.src" alt=""><view class="nav_icon_text">{{item.title}}</view></a>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				photolist_one:[
					{src:'https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',title:'美食'},
					{src:'https://cube.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',title:'大牌惠吃'},
					{src:'https://cube.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',title:'商超便利'},
					{src:'https://cube.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',title:'水果'},
					{src:'https://cube.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',title:'医药健康'},
				],
				photolist_five:[
					{src:'https://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png',title:'美食'},
					{src:'https://p0.meituan.net/jungle/45ff2f098a20a77122bff8385192f0ec10547.png',title:'美团超市'},
					{src:'https://p1.meituan.net/jungle/12a9834827909fa55f54bce96e67470711250.png',title:'生鲜果蔬'},
					{src:'https://p1.meituan.net/jungle/da9181f93dd2e11c5d74cf685470408f10016.png',title:'美团专送'},
					{src:'https://p1.meituan.net/jungle/83bfbcf07221cb1ccbcd9114e81ec7ac9209.png',title:'快食简餐'},
				],
				photolist_ten:[
					{src:'https://p1.meituan.net/jungle/c1048e334022a93221b0e63bbfb998b18861.png',title:'午餐优选'},
					{src:'https://p1.meituan.net/jungle/e54f1fe77b0588d2dfe82a12e424108a9450.png',title:'甜点饮品'},
					{src:'https://p0.meituan.net/jungle/2eee7747fd143249b100b9fa5ee5e31d9873.png',title:'家常菜'},
					{src:'https://p0.meituan.net/jungle/2ec76f8f4f21a4ec163adc7fccfa1a399428.png',title:'小吃馆'},
					{src:'https://p1.meituan.net/jungle/dfd03fd91f640682c16179ba85837f739679.png',title:'鲜花蛋糕'},
				],
			}
		},
		methods:{},
	}
</script>

<style scoped>
	ul{
		margin: 0;
		padding: 0;
	}
	li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	.nav{
		width: 750upx;
		margin-top: 150upx;
	}
	.nav_text{
		margin: 20upx;
	}
	.nav_text ul{
		margin: 0 20upx;
		height: 49.6upx;
		display: flex;
		justify-content: space-between;
	}
	.nav_text ul li{
		position: relative;
	}
	.nav_text ul li a:before{
		content: ".";
		    width: 0;
		    height: 20upx;
		    overflow: hidden;
		    border-left: 1px solid #e1e1e1;
		    position: absolute;
		    left: -20upx;
		    top: 5upx;
	}
	.first a:before{
		border: none!important;
	}
	.nav_text ul li a{
		font-size: 22upx;
		color:#808080;
	}
	
	
	.nav_five{
		margin: 20upx 40upx;
	}
	.nav_five ul{
		display: flex;
		justify-content: space-between;
	}
	.nav_five ul li img{
		width: 88upx;
		height: 88upx;
	}
	.nav_icon_text{
		width: 88upx;
		line-height: 1.4;
		white-space: nowrap;
		color: #333;
		font-size: 28upx;
		text-align: center;
	}
	
	
	.nav_ten{
		margin: 30upx 40upx;
	}
	.nav_ten ul{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.nav_ten ul li{
		text-align: center;
	}
	.nav_ten ul li view{
		text-align: center;
	}
	.nav_ten ul li img{
		width: 44upx;
		height: 44upx;
	}

</style>