import { createSlice } from '@reduxjs/toolkit'

export const navSelected = createSlice({
    name: 'navContext',
    initialState: {
      value: 'dashboard'
    },
    reducers: {
      setSelected: (state, action) => {
        state.value = action.payload
      }
    }
  })

export const { setSelected } = navSelected.actions

export default navSelected.reducer
