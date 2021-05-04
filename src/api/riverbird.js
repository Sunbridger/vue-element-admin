import request from '@/utils/request'

export function pca() {
  return request({
    url: '/pca',
    method: 'post'
  })
}

export function autocoder() {
  return request({
    url: '/autocoder',
    method: 'post'
  })
}
