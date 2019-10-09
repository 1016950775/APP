<template>
	<view class="wrapper">
		
		<view class="boxList" v-for="item in boxList001">
			<navigator url="../daohang/daohang">
				<view class="top">
					<image :src="item.src001"></image>
					<view class="rightContent">
						<view class="subcontent_top">
							<view class="subTitle" v-html="item.title"></view>
							<button type="primary">进店</button>
						</view>
						<view class="subcontent_medol">
							<view>配送￥{{item.ps}} | 起送￥{{item.qs}} | 配送{{item.time}}分钟</view>
						</view>
						<view class="subcontent_bottom" v-html="item.tipText"></view>
					</view>
				</view>
				<view class="content">
					<view class="content_left">
						<image :src="item.src002" mode=""></image>
						<view class="activetext">
							<span v-html="item.name001" style="display: inline-block;"></span>
							<span v-html="item.jq001" style='color: #FB4E44;display: inline-block;'></span>
						</view>
					</view>
					<view class="content_right">
						<view class="subcontent_right">
							<image :src="item.src003" mode=""></image>
							<view class="activetext">
								<span v-html="item.name002" style="display: inline-block;"></span>
								<span v-html="item.jq002" style='color: #FB4E44;display: inline-block;'></span>
							</view>
						</view>
						<view>
							<image :src="item.src004" mode=""></image>
							<view class="activetext">
								<span v-html="item.name003" style="display: inline-block;"></span>
								<span v-html="item.jq003" style='color: #FB4E44;display: inline-block;'></span>
							</view>
						</view>
					</view>
				</view>
				<view class="bottom">
					<span>顾客说：“</span>
					<span class="subText" v-html="item.pj"></span>
					<span>”</span>
				</view>
				<view class="bottom_last">
					<view class="bottom_last_left">
						<!-- <uni-icon type="star-filled" size="20" style="color: #F0AD4E;"></uni-icon> -->
						o
					</view>
					<view class="bottom_last_right">
						附近热卖商家
					</view>
				</view>
						
			</navigator>
			
		</view>
	</view>
</template>

<script>
	import uniIcon from "../../components/uni-icon/uni-icon.vue"
	export default {
		components: {uniIcon},
		data() {
			return {
				boxList001:[
					{	
						src001:'http://img.zx123.cn/Resources/zx123cn/uploadfile/2015/0527/b62a7cef65d343d456245bec1f322e71.jpg',
						title:'珍珠奶茶店',
						ps:5,
						qs:20,
						time:43,
						tipText:'20减5',
						src002:'http://www.agri35.com/UploadFiles/img_1_1190451575_3004015184_26.jpg',
						name001:"芒果奶茶",
						jq001:"￥13",
						src003:'http://pic6.canyin375.com/uploads/190807/15-1ZPGF959620.jpg',
						name002:"茶 蜂蜜",
						jq002:"￥9.9",
						src004:'http://imgs.hao315.com/upload/20190825062833usta3764.jpg',
						name003:"咖啡奶茶",
						jq003:"￥15",
						pj:'好喝好吃，外卖最后的价格比去店里不、便宜。'
					},{	
						src001:'https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1914337549.jpg',
						title:'浪漫天使',
						ps:5,
						qs:59,
						time:30,
						tipText:'99减15',
						src002:'http://img.21xianhua.com/upload/2017/01/16/333b104c868a5750ba26d5ff699367bd@360',
						name001:"浪漫玫瑰",
						jq001:"￥138",
						src003:'http://img.21xianhua.com/upload/2018/11/26/2ca545073064075014518a2286d9922b',
						name002:"可爱小熊",
						jq002:"￥138",
						src004:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3493461102,424971545&fm=26&gp=0.jpg',
						name003:"花束",
						jq003:"￥118",
						pj:'花的颜色鲜艳，价格优惠'
					},{	
						src001:'http://img3.imgtn.bdimg.com/it/u=3890447950,1851307563&fm=26&gp=0.jpg',
						title:'肯德基',
						ps:6,
						qs:19.9,
						time:19,
						tipText:'29.9减5',
						src002:'http://img2.imgtn.bdimg.com/it/u=153065227,3538403695&fm=26&gp=0.jpg',
						name001:"香辣鸡翅",
						jq001:"￥6.8",
						src003:'http://img0.imgtn.bdimg.com/it/u=1093915715,25592189&fm=214&gp=0.jpg',
						name002:"薯条套餐",
						jq002:"￥8.8",
						src004:'http://qcloud.dpfile.com/pc/O0u7FYvgnB6AfmIB1WUvGviwebd3ygG6FooGIFmJ9mtWniVC1RDTZfxMS7SFPEJDjoJrvItByyS4HHaWdXyO_DrXIaWutJls2xCVbatkhjUNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg',
						name003:"美味",
						jq003:"￥7.9",
						pj:'味道很好，服务也很到位。赞'
					},{	
						src001:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569830357&di=57fa0ee1e301755d0e91b4b1579bb801&imgtype=jpg&er=1&src=http%3A%2F%2Fpic29.nipic.com%2F20121206%2F10414809_215405150127_2.jpg',
						title:'香港奶茶',
						ps:6,
						qs:19.9,
						time:33,
						tipText:'30减9',
						src002:'https://t9.baidu.com/it/u=2173658855,2879223605&fm=191&app=48&size=h300&n=0&g=4n&f=JPEG?sec=1853310920&t=9cf34395444daac466578c56b1d176f8',
						name001:"果肉奶茶",
						jq001:"￥13",
						src003:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569235793976&di=e778cdad1e497fd49ea6f28052812cae&imgtype=0&src=http%3A%2F%2Fwww.jzjx.org.cn%2Fuploads%2Fpicture%2F68417%2F20190816100839_68372.jpg',
						name002:"邂逅",
						jq002:"￥18",
						src004:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569235831386&di=a6a559a4dad0a03a90b0a6897d07ad44&imgtype=0&src=http%3A%2F%2Ffile01.16sucai.com%2Fd%2Ffile%2F2013%2F1023%2F5a72d45ae462b3235587e6c8354173aa.jpg',
						name003:"咖啡",
						jq003:"￥16.8",
						pj:'味道很好，服务也很到位。赞'
					},{	
						src001:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569236447686&di=2a485c4d01f163e9ef0e5ce73b6c909d&imgtype=0&src=http%3A%2F%2Fstatic-xiaoguotu.17house.com%2Fxgt%2Fm%2F14%2F146268818214.jpg',
						title:'苏哥缪斯',
						ps:5,
						qs:20,
						time:43,
						tipText:'100减20',
						src002:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569236504088&di=2a0c925f49c6390c428045745021d7b5&imgtype=0&src=http%3A%2F%2Fpic.qjimage.com%2Fchineseview090%2Fhigh%2Fmhrf-cpmh-51768f10z.jpg',
						name001:"环境优美",
						jq001:"￥138",
						src003:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569236504085&di=6670e1e2a48f112b5b70c736aae4fc5c&imgtype=0&src=http%3A%2F%2Fs9.sinaimg.cn%2Forignal%2F4c54374b9768c2cf2cc58',
						name002:"休息去",
						jq002:"",
						src004:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569236504081&di=9f4e90f6c878a849a67722aad2e0b454&imgtype=0&src=http%3A%2F%2Fimgmall.tg.com.cn%2Fgroup2%2FM00%2F6E%2F94%2FCgooeFmXvGfggEnNAASBE5bq-X4450.jpg',
						name003:"环境干净",
						jq003:"138",
						pj:'服务周到，环境舒适，释放心情的不二之选'
					},{	
						src001:'http://img.zcool.cn/community/01ec93595ddc2fa8012193a364c124.jpg@1280w_1l_2o_100sh.jpg',
						title:'西餐厅',
						ps:5,
						qs:10,
						time:43,
						tipText:'99减19.9',
						src002:'http://pic49.nipic.com/file/20140928/15095631_202724961000_2.jpg',
						name001:"甜点",
						jq001:"￥28.8",
						src003:'http://img0.imgtn.bdimg.com/it/u=2934970015,3408420668&fm=214&gp=0.jpg',
						name002:"牛排",
						jq002:"￥88.8",
						src004:'http://www.tbw-hufu.com/tuhfJDEwLmFsaWNkbi5jb20vaTQvMTA0MjkxNDE5L08xQ04wMTFNTHdUbmxmQ3Y4Yjh3TF8hITEwNDI5MTQxOSQ5.jpg',
						name003:"黑雕牛排",
						jq003:"￥138",
						pj:'味道很好，服务也很到位。赞'
					}
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.wrapper{
		background-color: #F8F8F8;
		height: 100%;
	}
	.wrapper .boxList{
		background-color: #FFFFFF;
		margin:30upx 10upx;
	}
	.wrapper .boxList .top{
		margin: 10upx;
		display: flex;
		border-radius: 10upx;
	}
	.wrapper .boxList .top image{
		width: 200upx;
		height: 150upx;
		border: 10upx;
		border-radius: 10upx;
	}
	.wrapper .boxList .top .rightContent{
		margin-left: 20upx;
		flex: 1;
	}
	.wrapper .boxList .top .rightContent .subcontent_top{
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin: 10upx 0;
	}
	.wrapper .boxList .top .rightContent .subTitle{
		font-size: 36upx;
		font-weight: bold;
		overflow-wrap: break-word;
		overflow: hidden;
		height: 40upx;
		line-height: 40upx;
		
	}
	.wrapper .boxList .top .rightContent button{
		height: 48upx;
		width: 90upx;
		line-height: 48upx;
		font-size: 24upx;
		padding: 0;
		background-color: #F0AD4E;
		margin: 0;
	}
	.wrapper .boxList .top .rightContent .subcontent_medol{
		color: #999999;
		font-size: 20upx;
		margin: 8upx 0;
	}
	.wrapper .boxList .top .rightContent .subcontent_bottom{
		color: #FB4E44;
		font-size: 20upx;
		border: 1upx solid #F0AD4E;
		width: 140upx;
		text-align: center;
		margin: 14upx 0;
	}
	.wrapper .boxList .content{
		display: flex;
		border-radius: 20upx;
		overflow: hidden;
		margin: 10upx;
	}
	.wrapper .boxList .content image{
		width: 100%;
		height: 100%;
	}
	.wrapper .boxList .content .content_left{
		width: 400upx;
		height: 300upx;
		/* background-color: #4CD964; */
		position: relative;
	}
	.wrapper .boxList .content .content_right{
		flex: 1;
		height: 300upx;
		/* background-color: #007AFF; */
		margin-left: 2.5upx;
		flex-direction: column;
	}
	.wrapper .boxList .content .content_right > view{
		height: 150upx;
		/* background-color: #AAAAAA; */
		position: relative;
	}
	.wrapper .boxList .content .content_right .subcontent_right{
		margin-bottom:2.5upx;
	}
	.activetext{
		font-size: 30upx;
		position: absolute;
		left: 0;
		bottom: 0;
		height: 40upx;
		line-height: 40upx;
		text-align: center;
		background-color: #333333;
		opacity: .7;
		z-index: 9;
		color: #FFFFFF;
		padding: 0 18upx;
		border-radius: 0 16upx 0 0;
	}
	
	.bottom{
		margin: 0 10upx;
		font-size: 20upx;
		font-weight: bold;
		/* height: 60upx; */
		line-height: 60upx;
		background-color: #F8F8F8;
	}
	.bottom span{
		display: inline-block;
	}
	.bottom .subText{
		color: #999999;
	}
	
	.bottom_last{
		display: flex;
		height: 60upx;
		margin: 0 10upx;
	}
	.bottom_last .bottom_last_left{
		width: 40upx;
		height: 40upx;
		border-radius: 50%;
		/* overflow: hidden; */
		background-color: #F0AD4E;
		color: #FFFFFF;
		font-size: 40upx;
		line-height: 40upx;
		text-align: center;
		margin: 10upx;
	}
	.bottom_last .bottom_last_right{
		font-size: 20upx;
		color: #999999;
		line-height: 60upx;
	}
</style>
