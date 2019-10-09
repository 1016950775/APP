<template>
	<view>
		<uni-card
		    :title="title" 
		    mode="title" 
		    :is-shadow="false" 
		    thumbnail="https://cube.elemecdn.com/2/2c/c011a3ddd95b620f4ef76b8b6a9b2png.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed" 
		    extra="月售6666单" 
		>
		<view class="three">
			<view>
				<a href="">
					<image src="../../static/img/zhou1.webp"></image>
					<p class="name">️️❤皮蛋瘦肉粥（经典）</p>
					<p class="qian">￥16.8</p>
				</a>
			</view>
			<view>
				<a href="">
					<image src="../../static/img/zhou2.webp"></image>
					<p class="name">南瓜粥</p>
					<p class="qian">￥13.8</p>
				</a>
			</view>
			<view>
				<a href="">
					<image src="../../static/img/zhou3.webp"></image>
					<p class="name">大枣山药粥</p>
					<p class="qian">￥9.9</p>
				</a>
			</view>
		</view>
		</uni-card>
	</view>
</template>

<script>
	import uniCard from "@/components/uni-card/uni-card";
	export default {
		components: {uniCard},
		data() {
			return {
				title:'粥店',
				homeSlide:[
					
				],
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.three{
		display: flex;
		flex-direction: row;
		justify-content:space-between;
	}
	.three view{
		width: 100px;
	}
	.three view image{
		width: 100px;
		height: 85px;
	}
	.three view a{
		text-decoration: none;
	}
	.three view .name{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		color: #2C405A;
		font-size: 12px;
	}
	.three view .qian{
		color: #fb4e44;
		font-size: 12px;
	}
</style>
