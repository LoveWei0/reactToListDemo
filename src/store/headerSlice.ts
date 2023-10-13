import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './index'

interface HeaderState {
  inputFocus: boolean
}

const initialState: HeaderState = {
  inputFocus: true
}

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    searchFocusOrBlur(state) {
      const newState = JSON.parse(JSON.stringify(state))
      state.inputFocus = !newState.inputFocus
    }
  }
})

export const { searchFocusOrBlur } = headerSlice.actions

export const selectInputFocus = (state: RootState) => state.header.inputFocus

export default headerSlice.reducer
