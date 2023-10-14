import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from './index'
// api
import { getHeaderList } from '@/api/headerList'

interface HeaderState {
  inputFocus: boolean
  list: string[]
}

const initialState: HeaderState = {
  inputFocus: true,
  list: []
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
    searchFocusOrBlur(state) {
      const newState = JSON.parse(JSON.stringify(state))
      state.inputFocus = !newState.inputFocus
    }
  },
  extraReducers: builder => {
    builder.addCase(GetHeaderList.fulfilled, (state, action) => {
      const { list } = action.payload
      state.list = list
    })
  }
})

export const { searchFocusOrBlur } = headerSlice.actions

export const selectInputFocus = (state: RootState) => state.header.inputFocus
export const selectList = (state: RootState) => state.header.list

export default headerSlice.reducer
