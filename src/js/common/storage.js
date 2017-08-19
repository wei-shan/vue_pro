// 对localSession原生js封装
export default {
    get(key){
        let strData = localStorage.getItem(key);
        let result;
        try{
            result = JSON.parse(strData)
        }catch(e){
            result ={}
        }finally{
            return result||{};
        }
    },
    set(key,val){
        let strData;
        try{
            strData=JSON.stringify(val);
        }catch(e){
            strData=val;
        }finally{
            localStorage.setItem(key,strData);
        }
    }
}