/**
 * 通过mutation，间接更新state的多个方法的对象
 * 与后台交互的异步函数
 */

import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORY,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_GOODS,
    RECEIVE_INFO,
    RECEIVE_RATINGS,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART
} from './mutation-types'

import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings
} from '../api'

export default {
   //异步获取地址
  async getAddress({commit,state}){
    //发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude  //如果有参数从state中获取参数，没有参数则直接调用req函数
    const result = await reqAddress(geohash)  //ajax请求，返回值给result
    //提交一个mutation
    if(result.code === 0){     //判断响应结果是否正确，正确则得到result的data数据
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})     //使用commit将数据提交给mutation
    }
  },

   ///异步获取食品
   async getCategory({commit,state}){
     const result = await reqFoodCategorys()
     if(result.code === 0){
       const categorys = result.data
       commit(RECEIVE_CATEGORY,{categorys})
     }
   },

   ///异步获取商家
    async getShops({commit,state}){
    //  const latitude = state.latitude;
    //  const longitude = state.longitude;
    const {latitude,longitude} = state
      const result = await reqShops(latitude,longitude)
      if(result.code === 0){
        const shops = result.data
        commit(RECEIVE_SHOPS,{shops})
      }
    },
    //同步记录用户信息  如果前端中没有用户信息，则需要异步向后台请求用户信息；这里用户输入了信息，可以不用异步函数
    recordUser({commit},userinfo){
      commit(RECEIVE_USER_INFO,{userinfo})
    },

    //异步获取用户信息
    async getUserInfo({commit}){
      const result = await reqUserInfo()
      if(result.code === 0){
        const userinfo = result.data
        commit(RECEIVE_USER_INFO,{userinfo})
      }
    },

    //异步退出
    async logout({commit}) {
      const result = await reqLogout()
      if(result.code === 0){
        commit(RESET_USER_INFO)
      }
    },

    //异步获取商家信息
    async getShopInfo({commit}){
      const result = await reqShopInfo()
      if(result.code === 0){
        const info = result.data
        commit(RECEIVE_INFO,{info})
      }
    },

    //异步获取商家评价列表
    async getShopRatings({commit},callback){
      const result = await reqShopRatings()
      if(result.code === 0){
        const ratings = result.data
        commit(RECEIVE_RATINGS,{ratings})
        //数据更新了，通知组件
        callback && callback() 
      }
    },

    //异步获取商品列表
    async getShopGoods({commit},callback){
      const result = await reqShopGoods()
      if(result.code === 0){
        const goods = result.data
        commit(RECEIVE_GOODS,{goods})
        //数据更新了，通知组件
        callback && callback() //请求中可能没有回调函数，可传可不传
      }
    },

    //同步更新food中的count值
    updateFoodCount({commit},{isAdd,food}){
      if(isAdd == true){
        commit(INCREMENT_FOOD_COUNT,{food})
      }else{
        commit(DECREMENT_FOOD_COUNT,{food})
      }
    },

    //同步清空购物车
    clearCart({commit}){
      commit(CLEAR_CART)
    }

}