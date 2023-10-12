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
  inputValue: string
}

const initialState: CounterState = {
  data: [
    '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条 TodoList',
    '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第二条 TodoList',
    '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第三条 TodoList',
    '这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第四条 TodoList'
  ],
  inputValue: ''
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    handleChange(state, action) {
      state.inputValue = action.payload
    },
    handleClick(state, action) {
      state.data = [...state.data, action.payload]
    },
    handleDelete(state, action) {
      const datas = state.data as string[]
      datas.splice(action.payload, 1)
    }
  }
})

export const selectCount = (state: RootState) => state.counter.data
export const selectInputValue = (state: RootState) => state.counter.inputValue

export const { handleChange, handleClick, handleDelete } = counterSlice.actions

export default counterSlice.reducer
