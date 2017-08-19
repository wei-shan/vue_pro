import VueRouter from 'vue-router';
import Cindex from '../component/index/index.vue';
import Cnewslist from '../component/news/list.vue';
import Cnewsdetail from '../component/news/detail.vue';
import Cphotolist from '../component/photo/list.vue';
import Cphotodetail from '../component/photo/detail.vue';
import Cgoodslist from '../component/goods/list.vue';
import Cgoodsdetail from '../component/goods/detail.vue';
import Cshopcartlist from '../component/shopcart/list.vue';
import Cshopcartorder from '../component/shopcart/order.vue';
import Clogin from '../component/user/login.vue';
export default new VueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:Cindex},
        {path:'/news/list',component:Cnewslist},
        {path:'/news/detail/:newid',component:Cnewsdetail},
        {path:'/photo/list/:cateid',component:Cphotolist},
        {path:'/photo/detail/:imgid',component:Cphotodetail},
        {path:'/goods/list/:pageIndex',component:Cgoodslist},
        {path:'/goods/detail/:id',component:Cgoodsdetail ,name:'GoodsD'},
        {path:'/shopcart/list',component:Cshopcartlist,name:'ShopcartL'},
        {path:'/shopcart/order',component:Cshopcartorder,name:'ShopO'},
        {path:'/user/login',component:Clogin,name:'login'}
    ]
})