<template>
    <div>
        
        <!--数字输入框 -->
        <div class="mui-numbox">
            <button class="mui-btn mui-btn-numbox-minus" @click="subtract" >-</button>
            <input class="mui-input-numbox" type="number" v-model="total">
            <button class="mui-btn mui-btn-numbox-plus" @click="add">+</button>
        </div>
    </div>
</template>

<script>
export default {
    props:['count'],
    data(){
        return {
            total:this.count
        }
    },
    methods:{
        add(){  
            this.total++;
        },
        subtract(){
            this.total&&this.total--;
        }
    },
    watch:{
        total(){
            this.$emit('change',this.total);
        }
    }
}
</script>

<style>

</style>
