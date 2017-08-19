<template>
    <article>
        <div class="mui-card">
            <div class="mui-card-header">{{list.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" v-html="list.content">
                </div>
            </div>
        </div>
    </article>
</template>

<script>
import config from '../../../js/config.js'
export default {
    data(){
        return {
            list:{}
        }
    },
    props:['id'],
    methods:{
        getintro(){
            let url = config.getintro+this.id;
            this.$http.get(url).then(resp=>{
                resp.body.status==0&&(this.list=resp.body.message[0])
            })
        }
    },
    created(){
        this.getintro();
    }

}
</script>

<style>

</style>
