import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const timeout = 8000
let timerId = {}

Vue.http.interceptors.push({
  request (request) {
    // 设置接口超时的错误提示。
    timerId[request._rid] = setTimeout(() => {
      console.log('链接超时！')
    }, timeout)

    return request
  },
  response (response) {
    clearTimeout(timerId[response._rid])

    if (!response.ok) {
      console.log('请求错误！')
      return response
    }

    return response
  }
})

// HTTP相关
Vue.http.options.emulateJSON = true
Vue.http.options.crossOrigin = true

export default {
  getIndexBanner: Vue.resource('http://test.uyess.com/get_weixin_banner.php'),
  getMallBanner: Vue.resource('http://tm.uyess.com:8081/catalog/banners')
}
