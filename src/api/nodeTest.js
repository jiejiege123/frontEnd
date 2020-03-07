import request from '@/utils/request'
// import qs from 'qs'
export function getNode(params) {
  return request({
    url: '/getTestApi',
    method: 'get',
    params
  })
}
export function getPost(data) {
  return request({
    url: '/getTestApiPost',
    method: 'post',
    data
  })
}
