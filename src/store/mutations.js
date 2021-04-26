/**
 * 直接更新state的多个方法的对象
 */

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
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
}