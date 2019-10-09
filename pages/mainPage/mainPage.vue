<template>
	<view>
		<top></top>
		<ee></ee>
		<banner></banner>
		<cc></cc>
		<lunbotu></lunbotu>
		<foot></foot>
		<dianpu></dianpu>
	</view>
</template>

<script>
	
	import top from "../../components/mainPage/top/top.vue";
	import ee from "../../components/mainPage/nav/nav.vue";
	import banner from "../../components/mainPage/banner/laowudei.vue"
	import cc from "../../components/mainPage/vip/vip.vue"
	import lunbotu from "../../components/mainPage/lunbotu/lunbotu.vue"
	import foot from "../../components/mainPage/foot/foot.vue"
	import dianpu from "../../components/mainPage/dianpu/heicide.vue"
	export default {
		
		components: {top,ee,banner,cc,lunbotu,foot,dianpu},
		data() {
			return {
				
			}
		},
		
		methods: {
			
		},
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function () {
			   uni.stopPullDownRefresh();
			}, 1000);
		},
		onLoad(){
			
		}
	}
</script>

<style>

</style>
