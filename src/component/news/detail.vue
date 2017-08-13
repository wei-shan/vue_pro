<template>
<section>
    <v-title :title="title"></v-title>
    <div class="mui-card info-details">
		<div class="mui-card-header info-header">{{list.title}}</div>
		<div class="mui-card-footer info-footer">
            <span>发表时间：{{list.add_time|formateDate('YYYY-MM-DD')}}</span>
            <span>点击数：{{list.click}}</span>
        </div>
		<div class="mui-card-content">
		    <div class="mui-card-content-inner" v-html='list.content'>
				
			</div>
		</div>
	</div>
</section>
</template>
<script>
import Ctitle from '../common/title.vue';
import config from '../../js/config.js';
    export default {
        data(){
            return {
                title:'新闻详情',
                list:{}
            }
        },
        components:{
            'v-title':Ctitle
        },
        methods:{
            getnewsdetails(){
                console.log(this.$route)
                let url = config.getnewsdetail+this.$route.params.newid;
                this.$http.get(url).then(resp =>{
                    resp.body.status==0 && (this.list=resp.body.message[0]);
                })
            }
        },
        created(){
            this.getnewsdetails();
        }
    }
</script>
<style lang="less">
    .info-details {
        margin:0;
        .info-header {
            border:none;
        }
        .info-footer {
            border-top:none;
            color:skyblue;
        }
    }
</style>