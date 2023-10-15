// redux
// import { legacy_createStore as createStore } from 'redux'
// 数据文件
// import reducer from './reducer'

// const store = createStore(reducer)

// export default store

// --------------------------------------------------------------------------------------------

// @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit'
// slice小文件
import counterSlice from './counterSlice'
import headerSlice from './headerSlice'
import leftListSlice from './leftListSlice'
import rightListSlice from './rightListSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    header: headerSlice,
    leftList: leftListSlice,
    rightList: rightListSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
