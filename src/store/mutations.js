/**
 * 直接更新state的多个方法的对象
 */
import Vue from 'vue'
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

export default {
  [RECEIVE_ADDRESS] (state,{address}){
    state.address = address
  },
  [RECEIVE_CATEGORY](state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  },

  [RECEIVE_USER_INFO](state,{userinfo}){
    state.userinfo = userinfo
  },
  [RESET_USER_INFO](state){
    state.userinfo = {}
  },
  [RECEIVE_GOODS](state,{goods}){
    state.goods = goods
  },
  [RECEIVE_RATINGS](state,{ratings}){
    state.ratings = ratings
  },
  [RECEIVE_INFO](state,{info}){
    state.info = info
  },
  [INCREMENT_FOOD_COUNT](state,{food}){
    if(!food.count){  //第一次点
      //food.count = 1  //新增属性（没有数据绑定）
      /**
       * 对象 
       * 属性名 String
       * 属性值
       */
      Vue.set(food, "count", 1)  //表示在一个已经绑定的对象中新增一个属性，及它的属性值，让新增的属性也有数据绑定
      //将food添加到CartFoods中
      state.cartFoods.push(food)  //food放到了cartFoods中，
    }else{
      food.count++                //修改food的count值，cartFoods中对应的food也可以看到
    }
  },
  [DECREMENT_FOOD_COUNT](state,{food}){
    if(food.count){  //只有有值才去减
      food.count--
      if(food.count===0){
        //将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },
  [CLEAR_CART](state){
    //清除food中的count
    state.cartFoods.forEach(food => food.count = 0)
    //清除购物车中所有购物项
    state.cartFoods =[]
  }
}