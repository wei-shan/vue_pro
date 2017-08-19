import Vue from 'vue';
import cache from './cache.js';
import {Toast} from 'mint-ui';
export default {
    get(url,success){
        let data = cache.get(url);
        if(data){
            success(data);
        }else{
            Vue.http.get(url).then(resp =>{
                let body = resp.body;
                if(body.status==0){
                    cache.set(url,body);
                    success(body)
                }else{
                    Toast('请求错误！')
                }
            })
        }
    }
}