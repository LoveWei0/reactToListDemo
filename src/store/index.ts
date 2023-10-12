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

const store = configureStore({
  reducer: {
    counter: counterSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
