/**
 * 状态对象
 */
export default{
  //可默认的状态（现实中，通常设备可以获取所在位置的经纬度，如果不能获取，则使用默认设置的）
   latitude:40.10038,   //纬度
   longitude:116.36867,  //经度
  // 下面三个是后台响应的数据 
   address:{},   //地址相关信息对象
   categorys:[], //食品分类数组
   shops:[],  //商家数组
   userinfo:{},   //用户信息

   goods:[], //商品列表
   ratings:[], //用户评价
   info:{}   ,   //商品信息
   cartFoods:[] , //购物车中food列表
}