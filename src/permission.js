/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-30 09:31:42
 * @LastEditTime: 2020-03-11 12:11:03
 * @LastEditors: Please set LastEditors
 */
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  if (to.path !== '/404') {
    localStorage.setItem('router', to.fullPath)
  }
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  // const hasToken = getToken()
  // next()
  // NProgress.done()
  const hasGetUserInfo = store.getters.userInfo
  if (hasGetUserInfo) {
    next()
    NProgress.done()
  } else {
    try {
      await store.dispatch('user/getInfo').then(userInfo => {
        const toPath = localStorage.getItem('router')
        next({ path: toPath || '/' })
        NProgress.done()
      }).catch(reson => {
        console.error(reson)
        NProgress.done()
      })
      store.dispatch('user/getRouters').then(res => {
        store.dispatch('permission/generateRoutes', res).then((res) => {
          router.addRoutes(res.allRoutes)
          router.options.routes = res.allRoutes
        })
      }).catch(reson => {
        console.error(reson + '1')
        throw reson
      })
    } catch (error) {
      NProgress.done()
      console.error(error)
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
