<template>
    <section>
        <v-title :title="title"></v-title>
        <div class="mui-card">
            <div class="mui-card-header">
                <h3>{{list.title}}</h3>
            </div>
            <p style="padding:0 15px">
                <span>{{list.add_time|formateDate("YYYY-MM-DD")}}</span>
                <span>&nbsp;{{list.click}}次浏览</span>
            </p>
            <div class="mui-card-content">
                <ul class="mui-table-view mui-grid-view">
                    <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="(item,i) in img_list" :key="i">
                        <img class="mui-media-object"  :src="'http://ofv795nmp.bkt.clouddn.com/' + item.src">
                    </li>
                </ul>
            </div>
            <div class="mui-card-footer">{{list.content}}</div>
        </div>
        <v-comment :id='id'></v-comment>
    </section>
</template>
<script>
import Ctitle from '../common/title.vue';
import config from '../../js/config.js';
import Ccomment from '../common/comment.vue';

export default {
    data() {
        return {
            title: '图片详情',
            list: {},
            img_list: [],
            id:this.$route.params.imgid
        }
    },
    components: {
        'v-title': Ctitle,
        'v-comment':Ccomment
    },
    methods: {
        getphotodetail() {
            let url = config.getphotodetail + this.$route.params.imgid;
            this.$http.get(url).then(resp => {
                resp.body.status == 0 && (this.list = resp.body.message[0])

            })
        },
        gethumimages() {
            let url = config.gethumimages + this.$route.params.imgid;
            this.$http.get(url).then(resp => {
                resp.body.status == 0 && (this.img_list = resp.body.message);
            })
        }
    },
    created() {
        this.getphotodetail();
        this.gethumimages();
    }
}
</script>
<style lang="less">

</style>
