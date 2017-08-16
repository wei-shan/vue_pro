<template>
  <section class="swipe">
    <mt-swipe :auto="2000">
        <mt-swipe-item v-for='(item,i) in list' :key='i'>
        <a :href="item.url">
            <img :src="item.img" alt="">
        </a>
        </mt-swipe-item>
        
    </mt-swipe>
  </section>
</template>
<script>
import config from '../../js/config.js';
    export default {
        data(){
            return {
                list:[]
            };
        },
        methods:{
            getswipe(){
                let url=config.getlunbo;
                this.$http.get(url).then(resp =>{
                    // console.log(resp);
                    resp.body.status==0&&(this.list=resp.body.message);
                })
            }
        },
        created(){
            this.getswipe();
        }

    }
</script>
<style lang="less">
    .swipe {
        height:200px;
        img {
            width:100%;
            height:100%;
        }
    }
</style>