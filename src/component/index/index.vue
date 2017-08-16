<template>
    <article>
        <v-swipe :list='list'></v-swipe>
        <v-nav></v-nav>
    </article>
</template>
<script>
    import Cswipe from '../common/swipe.vue';
    import Cnav from './nav.vue';
    import config from '../../js/config.js';
    export default {
        components:{
            'v-swipe':Cswipe,
            'v-nav':Cnav
        },
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
<style>
    
</style>
