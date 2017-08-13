import Vue from 'vue';
// 定义全局过滤器
Vue.filter("formateDate",function(val,formate){
    let date=new Date(val);
    let yDate=date.getFullYear(),
    mDate=date.getMonth()+1,
    dDate=date.getDate();
    // 定义时间正则
    let yReg=/YYYY/i,
    mREg=/MM/i,
    dReg=/DD/i;
    return formate.replace(yReg,yDate).replace(mREg,mDate).replace(dReg,dDate);
})