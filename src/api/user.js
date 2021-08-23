/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 09:31:42
 * @LastEditTime: 2021-08-23 17:38:02
 * @LastEditors: zzz
 */
import request from '@/utils/request'
// 接口开始
export function getInfo() {
  return request({
    url: '/blog/getInfo',
    method: 'get',
    params: { id: 1 }
  })
}

// 获取路由
export function getRouter() {
  return request({
    url: '/blog/getRouter',
    method: 'get'
  })
}

// 获取动他
export function getThumbs(params) {
  return request({
    url: '/blog/getThumbsList',
    method: 'get',
    params
  })
}
