// 入口js
import Vue from 'vue'
import App from './App.vue' 
import router from './router'
import store from './store'
import { Button } from 'mint-ui'

import './mock/mockServer.js'  //加载mockServer即可

Vue.config.productionTip=false  //阻止启动生产消息，常用作指令

//注册全局组件标签

Vue.component(Button.name,Button)  //<mt-button></mt-button>
//Vue.component(MessageBox.name,MessageBox) 

new Vue({
    el:'#app',
    render: h => h(App),
    router,       //配置路由，多了router的标签，和router属性
    store,
})