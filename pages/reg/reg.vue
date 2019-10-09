<template>
    <view class="content">
		<view class="box">
			<view class="bigtitle">
				欢迎注册美团
			</view>
			<view class="input-group">
			    <view class="input-row border">
			        <text class="title">账号：</text>
			        <m-input type="text" focus clearable v-model="account" placeholder="请输入账号"></m-input>
			    </view>
			    <view class="input-row border">
			        <text class="title">密码：</text>
			        <m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
			    </view>
			    <view class="input-row">
			        <text class="title">确认密码：</text>
			        <m-input type="password" displayable v-model="repassword" placeholder="请再次输入密码"></m-input>
			    </view>
			</view>
			<view class="btn-row">
			    <button type="primary" class="primary" @tap="register">注册</button>
			</view>
		</view>
    </view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
    import service from '../../service.js';
    import mInput from '../../components/m-input.vue';

    export default {
        components: {
            mInput
        },
		computed:mapState(["baseURL"]),
        data() {
            return {
                account: '',
                password: '',
                repassword: ''
            }
        },
        methods: {
            register() {
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
                if (this.account.length < 5) {
                    uni.showToast({
                        icon: 'none',
                        title: '账号最短为 5 个字符'
                    });
                    return;
                }
                if (this.password.length < 6) {
                    uni.showToast({
                        icon: 'none',
                        title: '密码最短为 6 个字符'
                    });
                    return;
                }
				if (this.repassword.length < 6) {
				    uni.showToast({
				        icon: 'none',
				        title: '密码不一致'
				    });
				    return;
				}
                // if (this.email.length < 3 || !~this.email.indexOf('@')) {
                //     uni.showToast({
                //         icon: 'none',
                //         title: '邮箱地址不合法'
                //     });
                //     return;
                // }

                // const data = {
                //     account: this.account,
                //     password: this.password,
                //     email: this.email
                // }
                // service.addUser(data);
                
				uni.request({
					url:this.baseURL+'/api/zhuce',
					method:'POST',
					data:{
						uid: this.account,
						pwd: this.password
						// repassword: this.repassword
					},
					success(result) {
						if(result.data.flag){
							uni.showToast({
							    title: '注册成功'
							});
							uni.navigateBack({
								delta:1
							});
						}else{
							uni.showToast({
							    title: '注册失败'
							});
						}
						
					},
					fail() {
						_this.err = 2;
					},
					complete() {
						uni.stopPullDownRefresh();
					}
				})
                
            }
        }
    }
</script>

<style>
	.content{
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: #F8F8F8;
	}
	.content .box{
		width: 700upx;
		height: 90%;
		background: #FFFFFF;
		margin: auto;
		padding: 50upx 0;
	}
	.bigtitle{
		font-size: 50upx;
		/* font-weight: bold; */
		margin: 100upx 0;
	}
	.input-row{
		display: flex;
		margin: 20upx;
		justify-content: space-between;
	}
	.btn-row{
		width: 90%;
		margin: 0 auto;
		opacity: .5;
	}
	.btn-row > button{
		background: #FFC300;
		border: none;
		outline: none;
	}
</style>
