<template>
  <article class="shopcart-list">
    <v-title :title="title"></v-title>
    <!-- 商品列表 -->
    <div class="goods" v-for="item in shop_list" :key="item.id">
      <mt-switch class="switch" v-model="item.selected"></mt-switch>
      <img class="img" :src="item.src">
      <div class="inforight">
        <h4 class="mui-ellipsis-2">{{item.title}}</h4>
        <div class="bottom">
          <ul>
            <li>￥{{item.sell_price}}</li>
            <li>
              <v-numbar :count="totalCount(item.id)" @change="update(item.id,$event)"></v-numbar>
            </li>
            <li>
              <a href="javascript:void(0)" @click="remove(item.id)">删除</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  
    <!-- 总价 -->
    <div class="total">
      <div class="total_val">
        <ul>
          <li>总计（不含运费）</li>
          <li>已勾选商品{{getCount}}件,总价:￥{{getTotalPrice}}元</li>
        </ul>
      </div>
      <div class="total_btn">
        <mt-button type="primary" @click="pay">付 款</mt-button>
      </div>
    </div>
  
  </article>
</template>

<script>

import Ctitle from '../common/title.vue';
import Cnumbar from '../common/numbar.vue';

import config from '../../js/config.js';
import goods from '../../js/model/goods.js';
import cache from '../../js/common/cache.js';
import http from '../../js/common/http.js';
import { Toast } from 'mint-ui';


export default {
  data() {
    return {
      title: '购物车',
      shop_list: []
    }
  },
  components: {
    'v-title': Ctitle,
    'v-numbar': Cnumbar

  },
  methods: {
    getshopList() {
      let id_list = goods.getIdList();
      if (!id_list.length) { return; }
      let url = config.getshopcartlist + id_list;
      // this.$http.get(url).then(resp => {
      //   let body = resp.body;
      //   if (body.status == 0) {
      // this.shop_list = body.message.map(item => {
      //   item.src = config.img_url + item.thumb_path;
      //   item.selected = true;
      //   return item;
      // })
      //   }
      // })
      http.get(url, data => {
        this.shop_list = data.message.map(item => {
          item.src = config.img_url + item.thumb_path;
          item.selected = true;
          return item;
        })
      })
    },
    remove(id) {
      let index = this.shop_list.findIndex(item => item.id == id);
      index > -1 && this.shop_list.splice(index, 1);
      goods.remove(id);
    },
    totalCount(id) {
      return goods.get(id);
    },
    update(id, data) {
      this.shop_list[0].selected = !this.shop_list[0].selected;
      this.shop_list[0].selected = !this.shop_list[0].selected;
      goods.set(id, data);
      document.querySelector('.shopCar').innerHTML = goods.get();

    },
    pay() {
      let hasSelect = this.shop_list.some(item => item.selected && goods.get(item.id));

      if (!hasSelect) {
        Toast('请至少选购一件商品！');
      } else if (!/SESSIONID=\w+/.test(document.cookie)) {
        this.$router.push({ name: 'login', query: { nextpage: '/shopcart/order' } })
      } else {
        this.$router.push('/shopcart/order')
      }
    }
  },
  created() {
    this.getshopList();
  },
  computed: {
    getCount() {
      let dataArr = this.shop_list.map(item => (item.selected ? +goods.get(item.id) : 0));
      return dataArr.length && dataArr.reduce((v1, v2) => v1 + v2);
    },
    getTotalPrice() {
      let dataArr = this.shop_list.map(item => (item.selected ? +goods.get(item.id) * item.sell_price : 0));
      return dataArr.length && dataArr.reduce((v1, v2) => v1 + v2);
    }
  }
}
</script>

<style lang="less">
.shopcart-list {
  .goods {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    height: 102px;
    display: flex;
    padding: 5px;
    .switch {
      flex: 0 0 52px;
    }
    .img {
      margin-left: 5px;
      height: 75px;
      width: 75px;
      flex: 0 0 85px;
    }
    .inforight {
      margin-left: 5px;
      flex: 1;
    }
    .inforight ul {
      padding-left: 0px;
    }
    .inforight li {
      list-style: none;
      display: inline-block;
    }
    .inforight h4 {
      color: #0094ff;
      font-size: 14px;
    }
    .bottom li:first-child {
      color: red;
      margin-right: 5px;
    }
    .bottom li:last-child {
      margin-left: 5px;
    }
  }
  .total {
    height: 84px;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    padding: 5px 14px;
    ul {
      padding-left: 0px;
      margin: 14px 0;
      li {
        list-style: none;
        font-size: 14px;
      }
    }
    &_val {
      flex: 1;
    }
    &_btn {
      flex: 0 0 60px;
      margin: 18px 0 0 0;
    }
  }
}
</style>