<template>
	<view class="content">
		 <view class="title-padding"></view>
		<view class="aa">
			
		    <!-- <view class="image-list">
		            <view class="image-item" v-for="(item,index) in array" :key="index">
		                <view class="image-content">
		                    <image style="width: 60upx; height: 60upx;margin-top: 10upx; " :mode="item.mode" :src="src"
		                        @error="imageError"></image>
		                </view>
		                <view class="image-title">{{item.text}}</view>
		            </view>
		    </view> -->
			<view>
				<uni-icon type="back" size="10"></uni-icon>
			</view>
		    <view class="uni-form-item uni-column">
				<view class="item">
				    <icon type="search" size="12" style="margin-top: 10upx;"/>
					<input class="uni-input" @input="onKeyInput" placeholder="张三炒饭" />
				</view>
		                
		    </view>
			<view class="fuhao">
				<view class="fu" ><button type="default" plain="true" class="btn">+</button></view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from "../../uni-icon/uni-icon.vue"
	export default {
		components: {uniIcon},
		data() {
			return {
				   iconType: ['search'],
				 title: 'input',
				          focus: false,
				          inputValue: '',
				          changeValue: '',
				array: [{
				          mode: 'scaleToFill',
				               
			 }],
			 src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAQCAYAAAD0xERiAAACnklEQVQ4T41TS0wTURQ9d8pPfqkKyIYI4sqFLUalSowzNMKKOLgwRkNsoy7Y2LphQUxoXJloQrtAwPhpQmKUjUNcKFbpkGCsggE0ujEooUatCVIIQhton3kPhpRQY2f1Pueed849dwgAWs+0HsvJNvWUlxTtW46t/J5fXPb5+rqusfFgZd/TMXv0z3JBODIbuXHH92hlcriz60GwdTWRiL///O1dODI3w2Jw6xNalORDqvXogT3X2xyNjYX5uZwbz0Y+LoU+fFko21FUzs+qK8owFf6F8M+5xZkfc4VtzgZUV5QCDNG7j0eaHg6OXQyGNAcptc1a/81LJduL8+sE0/oXmV3Arp3FqUdp10xiyokLPrNkwneqt6mewV6XmUCu/1amAZiSrEpx+qKUhwZSbKr/nP1gh+N0nQ+gkxkTMjYPCe6s/Yq/3qY6WCIxSrJNrZSAjmQMV1743V9BMGdEyDCdZZWreD0BHtEzXshDIBN5A72u4xkRrYOyLLLoOYszh0jTKOZ2A73u88a+pf0eTtlr0Gyv2RRKS/t9dF89K9LkZPW1qnfojebmoBSyZv15z2UzEVn4xauJKeytKN2SaOD1JxyxVKNgW85ktlWx8gCHQppnExl/IXDbNc1AnRlZJebkzeeOeL+2kCXj8AT8Lt1QxwGLS3H09A+jpcm2oZIxJlTx+7Rksk2VJUB+2e3yrkrQCCTC4GQdt56AT/3aELMBUxIOqlGifCQ4Ziik+Tcp4xtulavjySQmg24GyGCQhW2CToBusiheMQFW1Ux58BoWt5CtAUhjCebWR7WJf/XOmC0GePSQNm3gNtJMLRQKicYRYwNcpXEnHssV9p3GbKXWpSUTNg6rqiTBCib+iN2MME8M0SSDrr/VtHSq/wLcfxwuhX9dlQAAAABJRU5ErkJggg=='
				
			}
			
		},
		methods: {
			        onKeyInput: function(event) {
			            this.inputValue = event.target.value
			        }
		}
	}
</script>

<style scoped>
	/* 图片 */
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
		display: flex;
		background-color: #F0AD4E;
	}
	.uni-input{
		margin-left: 20upx;
		margin-top: -6upx;
	}
	.font{
		width: 80upx;
		margin-top: 10upx;
		margin-left: 10upx;
		font-size: 24upx;
		margin-right: 60upx;
	}
	.font1{
		margin-left: 10upx;
		font-size: 20upx;
	}
	.uni-column{
		height: 20px;
		float: left;
		width: 400upx;
		border: 1px solid white;
		background-color: white;
		font-size: 14px;
		margin-top: 20upx;
		border-radius: 8upx;
		
	}
	
	.fuhao{
		float: right;
		margin-left: 80upx;
		font-size: 20px;
	}
	
	/* 箭头 */
	.tp{
		width: 20upx;
		height: 20upx;
		margin-left: 10upx;
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
		.clearfixed:after{
		        content: "clearfixed";
		        display: block;
		        clear: both;
		        height: 0;
		        overflow: hidden;
		    }
			
			/* 悬浮 */
			.content{
				position: fixed;
				z-index: 999;
				top: 0;
			}
</style>
