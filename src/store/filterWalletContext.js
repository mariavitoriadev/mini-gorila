import { createSlice } from '@reduxjs/toolkit'

export const filterWalletSelected = createSlice({
    name: 'filterWalletContext',
    initialState: {
        value: ''
    },
    reducers: {
      setWallet: (state, action) => {
        state.value = action.payload
      }
    }
  })

export const { setWallet } = filterWalletSelected.actions

export default filterWalletSelected.reducer
