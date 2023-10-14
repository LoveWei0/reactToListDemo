import { http } from '@utils/index'
import { ReqHeaderList } from './model/headerListType'

export function getHeaderList() {
  return http.get<any, ReqHeaderList>('/api/headerList')
}
