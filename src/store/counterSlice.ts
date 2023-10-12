// redux
// 定义一个数据defaultState
// const defaultState = {
//   inputValue: '',
//   todoList: [
//     '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条 TodoList',
//     '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第二条 TodoList',
//     '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第三条 TodoList',
//     '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第四条 TodoList'
//   ]
// }
// 我们将数据defaultState最终以state形式导出去
// export default (state = defaultState, action) => {
//   return state
// }

// ---------------------------------------------------------------------------------------------

// @reduxjs/toolkit

import { createSlice } from '@reduxjs/toolkit'
// state类型
import { RootState } from './index'

interface CounterState {
  data: string[]
}

const initialState: CounterState = {
  data: [
    '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条 TodoList',
    '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第二条 TodoList',
    '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第三条 TodoList',
    '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第四条 TodoList'
  ]
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {}
})

export const selectCount = (state: RootState) => state.counter.data

export default counterSlice.reducer
