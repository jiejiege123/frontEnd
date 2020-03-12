/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 09:31:42
 * @LastEditTime: 2020-03-11 11:51:12
 * @LastEditors: Please set LastEditors
 */
import request from '@/utils/request'
// import qs from 'qs'
export function getArticle() {
  return request({
    url: '/blog/article',
    method: 'get'
  })
}
