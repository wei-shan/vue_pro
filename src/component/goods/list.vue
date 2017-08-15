<template>
    <section>
        <v-title :title='title'></v-title>
        <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a href="#">
                    <img class="mui-media-object" src="../images/shuijiao.jpg">
                    <div class="mui-media-body">幸福就是可以一起睡觉</div>
                </a>
            </li>
        </ul>
    </section>
</template>
<script>
import Ctitle from '../common/title.vue';
export default {
    data() {
        return {
            title: '商品列表'
        }
    },
    components: {
        'v-title': Ctitle
    },
    methods:{
        getgoodslist(){
            
        }
    }
}
</script>
<style>

</style>

