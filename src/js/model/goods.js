import storage from '../common/storage.js';
const storageKey = 'goodsTotal';
let goodsTotal = storage.get(storageKey) || {};
export default {
    // 根据id获取数量没有返回全部数据
    get(key) {
        if (key) {
            return goodsTotal[key] || 0
        } else {
            let goods = this.getDataList();
            return goods.length && goods.reduce((v1, v2) => (+v1) + (+v2));
        }
    },
    // 存储数据
    set(key, val) {
        goodsTotal[key] = val;
        storage.set(storageKey, goodsTotal);
    },
    // 获取所有id组成的数组
    getIdList() {
        return Object.keys(goodsTotal);
    },
    // 获取所有id对应的值组成的数组
    getDataList() {
        return Object.values(goodsTotal);
    },
    // 移除对应存储数据
    remove(key){
        delete goodsTotal[key];
        storage.set(storageKey, goodsTotal);
    }
}