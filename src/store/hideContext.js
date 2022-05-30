import { createSlice } from '@reduxjs/toolkit'

export const hideSelected = createSlice({
    name: 'hideContext',
    initialState: {
      value: false
    },
    reducers: {
      setHide: (state) => {
        state.value = !state.value
      }
    }
  })

export const { setHide } = hideSelected.actions

export default hideSelected.reducer
