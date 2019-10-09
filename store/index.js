import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: "",
		openId:"",
		baseURL:'http://192.168.1.23',
		addorderlist:[],
		shopCarList:[],
		
		shopCarList_ture:[]
    },
    mutations: {
        login(state, {openId,nickName}) {
            state.userName = nickName;
        	state.openId = openId;
            state.hasLogin = true;
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        },
		addorderlist(state,item){
			state.addorderlist = item;
		},
		shopCarList(state,item){
			state.shopCarList.push(item);
		},
		
		// 购物车
		shopCarList_ture(state,item){
			state.shopCarList_ture.push(item);
		}
		
    }
})

export default store
