const cache = {};
const timeage=10000;
export default {
    set(key,data){
        cache[key]={
            data:data,
            time:Date.now()
        }
    },
    get(key){
        let dataObj = cache[key];
        // 数据为空或超时都移除
        if(!dataObj||Date.now()- timeage<dataObj.time){
            this.remove(key)
        }else{
            return dataObj.data;
        }
    },
    remove(key){
        delete cache[key];
    }
}