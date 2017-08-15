<template>
    <section class="photoList">
        <v-title :title="title"></v-title>
        <div class="tab">
            <ul class="mui-table-view tab_cate">
                <li class="mui-table-view-cell" v-for='item in imglist' :key='item.id'>
                    <router-link :to="'/photo/list/'+item.id">
                        <span>{{item.title}}</span>
                    </router-link>
                </li>
    
            </ul>
        </div>
        <ul class="mui-table-view photo_list">
            <li class="mui-table-view-cell mui-media" v-for="k in photolist" :key="k.id">
                <router-link :to="'/photo/detail/'+k.id">
                    <img :src="'http://ofv795nmp.bkt.clouddn.com/' + k.img_url"></img>
                    <div class="info">
                        <h4>{{k.title}}</h4>
                        <p>{{k.zhaiyao}}</p>
                    </div>
                </router-link>
            </li>
        </ul>
        </div>
    </section>
</template>
<script>
import Ctitle from '../common/title.vue';
import config from '../../js/config.js';
export default {
    data() {
        return {
            title: '图片列表',
            imglist: [{
                title: '全部',
                id: 0
            }],
            // cateid: this.$route.params.cateid,
            photolist: []
        }
    },
    components: {
        'v-title': Ctitle
    },
    methods: {
        getphotocategory() {
            let url = config.getphotocategory;
            this.$http.get(url).then(resp => {
                resp.body.status == 0 && (this.imglist.push(...resp.body.message))
            })
        },
        getphotolist() {
            let url = config.getphotolist + this.$route.params.cateid;
            this.$http.get(url).then(resp => {
                if (resp.body.status == 0) {
                    this.photolist = resp.body.message;
                }
            })
        }
    },
    created() {
        this.getphotocategory(this.$route.params.cateid);
        this.getphotolist();
    },
    watch:{
        $route(){
            // console.log(this.$route.params.cateid);
            
            this.getphotolist(this.$route.params.cateid);
        }
    }
}
</script>
<style lang='less'>
.photoList {
    .tab {
        width: 100%;
        overflow: scroll; 
        // scrollbar-face-color:aliceblue;
        // &::-webkit-scrollbar-thumb {
        //     background-color: #f00;
        // }
        .tab_cate {
            width: 242%;
            li {
                background-color: #fff;
                float:left;
                padding: 11px 10px;
                color:aqua;
            }
        }
    }
    .photo_list {
        img {
            width: 100%;
        }
        .info {
            position: absolute;
            bottom:10px;
            width: 100%;
            // overflow: hidden;
            h4 {
                color:#fff;
            }
            p{
                height: 40px;
                color:#fff;
                word-break:break-word;
            }
        }
    }
}
</style>


