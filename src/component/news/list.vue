<template>
    <section>
        <v-title :title="title"></v-title>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
					<router-link :to="'/news/detail/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<p class="mui-ellipsis">{{item.title}}</p>
                            <p class="mui-ellipsis info_time">
                                <span>发表时间：{{item.add_time|formateDate("YYYY-MM-DD")}}</span>
                                <span>点击：{{item.click}}</span>
                            </p>
						</div>
					</router-link>
				</li>
		</ul>
    </section>
</template>
<script>
    import Ctitle from '../common/title.vue';
    import config from '../../js/config.js';
    let url=config.getnewslist;    
    export default {
        data(){
            return {
                title:"新闻资讯",
                list:[]
            }
        },
        methods:{
            getNewsList(){
                this.$http.get(url).then(resp =>{
                    this.list=resp.body.message;
                })
            }
        },
        components:{
            'v-title':Ctitle,
        },
        created(){
            this.getNewsList();
        }
    }
    
</script>
<style lang="less">
    .info_time {
        color:skyblue;
        span:nth-of-type(1){
            float:left;
        } 
        span:nth-of-type(2){
            float:right;
        } 
    }
</style>