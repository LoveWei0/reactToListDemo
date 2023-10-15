import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getRightList } from '@/api/rightList'
import { RootState } from './index'
import { RecommendationCardListType } from '@/api/model/rightListType'

const initialState: RecommendationCardListType = {
  recommendationCard: []
}

export const getRightListData = createAsyncThunk(
  '/rightList/rightListData',
  async () => {
    const result = await getRightList()
    return result.data
  }
)

const rightList = createSlice({
  name: 'rightList',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getRightListData.fulfilled, (state, action) => {
      const { recommendationCard } = action.payload
      state.recommendationCard = recommendationCard
    })
  }
})

export const selectRecommendList = (state: RootState) =>
  state.rightList.recommendationCard

export default rightList.reducer
