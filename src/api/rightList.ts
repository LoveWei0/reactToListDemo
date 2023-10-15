import { http } from '@/utils'
import { DataType } from './model/rightListType'

export function getRightList() {
  return http.get<any, DataType>('/api/rightList')
}
