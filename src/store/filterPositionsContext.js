import { createSlice } from '@reduxjs/toolkit'

export const filterPositionsSelected = createSlice({
    name: 'filterPositionsContext',
    initialState: {
        value: 'Abertas'
    },
    reducers: {
        setFilterPosition: (state, action) => {
            state.value = action.payload
      }
    }
})

export const { setFilterPosition } = filterPositionsSelected.actions

export default filterPositionsSelected.reducer
