import Vue from 'vue'
import App from './App'
// import cuCustom from './colorui/components/cu-custom.vue'
// Vue.component('cu-custom',cuCustom)
import store from './store'
Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$store = store;
const app = new Vue({
	store,
    ...App
})
app.$mount()
