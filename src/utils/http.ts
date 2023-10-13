import axios from 'axios'
// 提示组件
import { message } from 'antd'

const http = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  timeout: 6000
})

// 请求拦截
http.interceptors.request.use(config => {
  // 每个接口新增时间戳
  const timestamp = new Date().getTime()
  if (config.url && config.url.includes('?')) {
    config.url = `${config.url}&t=${timestamp}`
  } else {
    config.url = `${config.url}?t=${timestamp}`
  }
  return config
})

// 响应拦截
http.interceptors.response.use(
  response => {
    if (response.data) return response.data
  },
  error => {
    switch (error.response && error.response.status) {
      case 400:
        error.message = '请求错误(400)'
        message.error(error.response.data.msg || error.message, 4)
        break
      case 401:
        error.message = '登录信息已过期,请重新登录'
        message.warning(error.response.data.msg || error.message, 4)
        break
      case 403:
        error.message = '拒绝访问'
        break
      case 404:
        error.message = '请求出错'
        break
      case 408:
        error.message = '请求超时(408)'
        message.error(error.response.data.msg || error.message, 4)
        break
      case 500:
        error.message = '服务器错误(500)'
        message.error(error.response.data.msg || error.message, 4)
        break
    }
    return Promise.reject(error)
  }
)

export default http
