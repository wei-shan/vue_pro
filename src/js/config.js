const url = "http://139.199.192.48:8888";
const img_url ="http://ofv795nmp.bkt.clouddn.com/";
export default {
    url: url,
    img_url:img_url,
    getlunbo: url + '/api/getlunbo',
    // 新闻
    getnewslist: url + '/api/getnewslist',
    getnewsdetail: url + '/api/getnew/',
    // 评论
    postcomment: url + '/api/postcomment/',
    getcomment: url + '/api/getcomments/',
    // 图片
    getphotolist: url + '/api/getimages/',
    getphotocategory: url + '/api/getimgcategory',

    getphotodetail: url + '/api/getimageInfo/',
    gethumimages: url + '/api/getthumimages/',

    // 商品
    getgoodslist:url+'/api/getgoods?pageindex=',
    getgoodsinfo:url+'/api/goods/getinfo/',
    getintro:url+'/api/goods/getdesc/',
    // 购物车
    getshopcartlist:url+'/api/goods/getshopcarlist/'


}