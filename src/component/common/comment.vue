<template>
    <section class="comment">
        <div class="mui-card">
            <div class="mui-card-header">
                <h3>发表评论</h3>
            </div>
            <div class="mui-card-content">
                <textarea v-model='content' id="textarea" rows="5" placeholder="请输入您的看法"></textarea>
            </div>
            <button type="button" @click="submitcomment" class="mui-btn mui-btn-success mui-btn-block">发表</button>
        </div>
        <div class="title">
            <h3>评论区</h3>
        </div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell" v-for='(item,i) in list' :key="i">
                <div>
                    <span>第{{i+1}}楼</span>
                    <span>用户：{{item.user_name}}</span>
                    <span>发表时间：{{item.add_time|formateDate('YYYY-MM-DD')}}</span>
                </div>
                <div>{{item.content||" &nbsp;"}} </div>
            </li>
        </ul>
        <button type="button" @click="getcomment" ref="loadMore" class="mui-btn mui-btn-primary mui-btn-block mui-btn-outlined ">加载更多</button>
        </div>
    </section>
</template>
<script>
import config from '../../js/config.js';
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            content: '',
            pageindex: 1,
            list: []
        }
    },
    props: ['id'],
    methods: {
        submitcomment() {
            let url = config.postcomment + this.id;
            this.$http.post(url, { content: this.content }, { emulateJSON: true }).then(resp => {
                if (resp.body.status == 0) {
                    Toast({
                        message: '发表成功',
                        iconClass: 'icon icon-success'
                    });
                    this.list.unshift({
                        user_name:'myself',
                        add_time:Date.now(),
                        content:this.content
                    })
                    this.content = ' ';                    
                }
            })
        },
        getcomment() {
            let url = config.getcomment + this.id + "?pageindex=" + this.pageindex;
            this.$http.get(url).then(resp => {
                if (resp.body.status == 0 && (resp.body.message.length > 1)) {
                    this.list=this.list.concat(resp.body.message);
                    this.pageindex++;
                    console.log(this.list)
                }else if(resp.body.message.length==0){
                    this.$refs.loadMore.disabled="disabled";
                }
            })
        }
    },
    created(){
        this.getcomment();
    }
}

</script>
<style lang="less">
    .comment {
        .mui-table-view-cell{
            background-color:rgba(0, 255, 229, 0.13);
            margin:4px 0;
        }
    }
</style>