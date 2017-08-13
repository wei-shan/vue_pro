// 使用第三方包
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import mintui from 'mint-ui';
import 'mint-ui/lib/style.min.css';
import 'mui/dist/css/mui.css';
import 'mui/examples/hello-mui/css/icons-extra.css';

// 启用插件
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(mintui);
// 导入自己的组件
import App from '../component/App.vue';
import router from './router.js';
import './filter.js';

var vm = new Vue({
    el:'#app',
    render:(c)=>c(App),
    router
})