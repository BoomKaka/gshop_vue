// 入口js
import Vue from 'vue'
import App from './App.vue' 
import router from './router'

//Vue.config.productionTip=false



new Vue({
    el:'#app',
    render: h => h(App),
    router       //配置路由，多了router的标签，和router属性
})