import VueRouter from 'vue-router';
import Cindex from '../component/index/index.vue';
import Cnewslist from '../component/news/list.vue';
import Cnewsdetail from '../component/news/detail.vue';
import Cphotolist from '../component/photo/list.vue';
import Cphotodetail from '../component/photo/detail.vue';
import Cgoodslist from '../component/goods/list.vue';
import Cgoodsdetail from '../component/goods/detail.vue';
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
        // {path:''}
    ]
})