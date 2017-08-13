import VueRouter from 'vue-router';
import Cindex from '../component/index/index.vue';
import Cnewslist from '../component/news/list.vue';
import Cnewsdetail from '../component/news/detail.vue'
export default new VueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:Cindex},
        {path:'/news/list',component:Cnewslist},
        {path:'/news/detail/:newid',component:Cnewsdetail}
    ]
})