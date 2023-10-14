import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from './index'
// api
import { getHeaderList } from '@/api/headerList'

interface HeaderState {
  inputFocus: boolean
  list: string[]
  mouseInHot: boolean
}

const initialState: HeaderState = {
  inputFocus: false,
  list: [],
  mouseInHot: false
}

export const GetHeaderList = createAsyncThunk(
  '/header/headerList',
  async () => {
    const result = await getHeaderList()
    return result
  }
)

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    searchFocus(state) {
      // const newState = JSON.parse(JSON.stringify(state))
      state.inputFocus = true
    },
    searchBlur(state) {
      state.inputFocus = false
    },
    searchMouseEnterHot(state) {
      state.mouseInHot = true
    },
    searchMouseLeaveHot(state) {
      state.mouseInHot = false
    }
  },
  extraReducers: builder => {
    builder.addCase(GetHeaderList.fulfilled, (state, action) => {
      const { list } = action.payload
      state.list = list
    })
  }
})

export const {
  searchBlur,
  searchFocus,
  searchMouseEnterHot,
  searchMouseLeaveHot
} = headerSlice.actions

export const selectInputFocus = (state: RootState) => state.header.inputFocus
export const selectMouseInHot = (state: RootState) => state.header.mouseInHot
export const selectList = (state: RootState) => state.header.list

export default headerSlice.reducer
