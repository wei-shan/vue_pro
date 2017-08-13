<template>
    <section>
       <header class="mint-header comtitle">
            <div class="mint-header-button is-left"> 
                <div  class="router-link-active" @click="rollback">
                    <button class="mint-button mint-button--default mint-button--normal">
                        <span class="mint-button-icon"><i class="mintui mintui-back"></i></span>
                        <label class="mint-button-text">返回</label>
                    </button>
                </div>
            </div> 
            <h1 class="mint-header-title">{{title}}</h1>
            <div class="mint-header-button is-right"></div>
      </header>
    </section>
</template>
<script>
    export default {
        props:['title'],
        methods:{
            rollback(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style lang="less">
    .comtitle {
        background-color:#fff;
        color:skyblue;
        font-size:18px;
        font-weight:400;
        border-bottom:1px solid #ccc;
    }   

</style>