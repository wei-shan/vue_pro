<template>
    <section id="goods_list">
        <v-title :title='title'></v-title>
        <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for='item in list' :key='item.id'>
                <router-link :to="'/goods/detail/'+item.id ">
                    <img class="mui-media-object" :src="item.img_url">
                    <div class="mui-media-body goods_body">
                        <h5>{{item.title}}</h5>
                        <div class="info">
                            <p class="price">
                                <span>￥{{item.sell_price}}&nbsp;&nbsp;</span>
                                <del>￥{{item.market_price}}</del>
                            </p>
                            <p>
                                <span class="left">热卖中</span>
                                <span class="right">剩{{item.stock_quantity}}件</span>
                            </p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
        <ul class="mui-pager">
            <li>
                <router-link :to="'/goods/list/'+(pageIndex/1-1)">
                    上一页
                </router-link>
            </li>
            <li>
                <router-link  :to="'/goods/list/'+(pageIndex/1+1)">
                    下一页
                </router-link>
            </li>
        </ul>
    </section>
</template>
<script>
import Ctitle from '../common/title.vue';
import config from '../../js/config.js'
export default {
    data() {
        return {
            title: '商品列表',
            list: [],
            pageIndex:this.$route.params.pageIndex
        }
    },
    components: {
        'v-title': Ctitle
    },
    methods: {
        getgoodslist(pageindex) {
            
            let url = config.getgoodslist + pageindex;
            this.$http.get(url).then(resp => {  
                resp.body.status == 0 && (this.list = resp.body.message);
            })
        },
        getpageIndex(){
            // this.pageIndex=this.pageIndex||0
        }

    },
    created() {
        this.getpageIndex()
        this.getgoodslist(this.pageIndex);
        
    },
    watch: {
        $route() {
            this.getgoodslist(this.$route.params.pageIndex);
            this.pageIndex=this.$route.params.pageIndex
        }
    }
}
</script>
<style lang="less">
#goods_list {
    .goods_body {
        text-align: left;
        height: 100px;
        background-color: #f7efef;
        white-space: normal;
        h5 {
            height: 28px;
            overflow: hidden;
        }
        .price {
            font-size: 20px;
            height: 40px;
            line-height: 40px;
            &:first-of-type {
                color: red;
            }
        }
        .left {
            float: left;
        }
        .right {
            float: right;
        }
    }
}
</style>

