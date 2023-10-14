import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { ReqLeftListData } from '@/api/model/leftListType'
import { RootState } from './index'
import { getLeftList } from '@/api/leftList'

const initialState: ReqLeftListData = {
  articleFeed: []
}

export const getLeftListData = createAsyncThunk(
  '/leftList/leftListData',
  async () => {
    const result = await getLeftList()
    return result.data
  }
)

const leftList = createSlice({
  name: 'leftList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getLeftListData.fulfilled, (state, action) => {
      const { articleFeed } = action.payload
      state.articleFeed = articleFeed
      // console.log(action.payload)
    })
  }
})

export const selectLeftList = (state: RootState) => state.leftList.articleFeed

export default leftList.reducer
