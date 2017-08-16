<template>
  <article class="goods-detail">
    <v-title :title='title'></v-title>
    <v-swipe :list='list'></v-swipe>
    <!-- 商品购买 -->
    <div class="mui-card">
      <!-- 名称 -->
      <div class="mui-card-header">{{info_list.title}}</div>
      <!-- 价格 -->
      <div class="mui-card-content mui-card-content-inner">
        <div class="price">
          <s>市场价:￥{{info_list.market_price}}</s>
          <span>销售价: </span>
          <em>￥{{info_list.sell_price}}</em>
        </div>
        <div>
          <span>购买数量：</span>
          <!--数字输入框 -->
          <div class="mui-numbox">
            <button class="mui-btn mui-btn-numbox-minus">-</button>
            <input class="mui-input-numbox" type="number" v-model="count">
            <button class="mui-btn mui-btn-numbox-plus">+</button>
          </div>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="mui-card-footer">
        <button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">结算</button>
        <div></div>
        <button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">加入购物车</button>
      </div>
    </div>
  
    <!-- 评论与介绍 -->
    <div class="mui-card">
      <!-- 选项卡 -->
      <mt-navbar v-model='selected'>
        <mt-tab-item id="tab-comment">商品评论</mt-tab-item>
        <mt-tab-item id="tab-info">图文介绍</mt-tab-item>
      </mt-navbar>
      <!-- 内容 -->
      <mt-tab-container v-model='selected'>
        <mt-tab-container-item id="tab-comment">
          <v-comment :id="id"></v-comment>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-info">
          <v-intro :id='id'></v-intro>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  
  </article>
</template>

<script>
import Ctitle from '../common/title.vue';
import config from '../../js/config.js';
import Cswipe from '../common/swipe.vue';
import Ccomment from '../common/comment.vue';
import Cintro from './son/intro.vue';
export default {
  data() {
    return {
      title: '商品详情',
      list: [],
      id:this.$route.params.id,
      info_list:{},
      count:0,
      selected:''
    }
  },
  components: {
    'v-title': Ctitle,
    'v-swipe': Cswipe,
    'v-comment':Ccomment,
    'v-intro':Cintro
  },
  methods: {
    gethumimages() {
      let url = config.gethumimages + this.id;
      this.$http.get(url).then(resp => {
        if (resp.body.status == 0) {
          this.list = resp.body.message.map(function (val) {
            val.img = 'http://ofv795nmp.bkt.clouddn.com/' + val.src
            return val;
          })
        }
      })
    },
    getInfo(){
      let url =config.getgoodsinfo+this.id;
      this.$http.get(url).then(resp=>{
        let body =resp.body.message;
        this.info_list = body[0];
      })
    }
  },
  created(){
    this.gethumimages();
    this.getInfo();
  }
}
</script>

<style lang="less">
.goods-detail {
  .mui-card-content {
    .price {
      color: rgb(51, 51, 51);
      margin-bottom: 4px;
      span {
        margin-left: 6px;
      }
      em {
        font-size: 18px;
        color: red;
      }
    }
  }
  .mui-card-footer {
    div {
      width: 100%;
    }
    .mui-btn {
      padding: 8px 0;
      font-size: 16px;
    }
  }
  .mint-tab-item {
    &.is-selected {
      margin-bottom: 0;
      border-bottom: 3px solid #2ce094;
      color: #2ce094;
    }
  }
  .mint-tab-item-label {
    font-size: 18px;
    color: #2ce094;
  }
}
</style>