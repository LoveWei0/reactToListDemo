import { http } from '@/utils'
import { ReqData } from './model/leftListType'

export function getLeftList() {
  return http.get<any, ReqData>('/api/leftList')
}
