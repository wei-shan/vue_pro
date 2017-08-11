// 使用第三方包
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

// 启用插件
Vue.use(VueResource);
Vue.use(VueRouter);
// 导入自己的组件
import App from '../component/App.vue';
import router from './router.js'
var vm = new Vue({
    el:'#app',
    render:(c)=>c(App),
    router
})