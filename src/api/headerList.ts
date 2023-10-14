import { http } from '@utils/index'

export function getHeaderList() {
  return http.get('/api/headerList')
}
