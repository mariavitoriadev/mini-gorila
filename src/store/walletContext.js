import { createSlice } from '@reduxjs/toolkit'

export const walletSelected = createSlice({
    name: 'walletContext',
    initialState: {
        value: 'a'
    },
    reducers: {
      setWallet: (state, action) => {
        state.value = action.payload
      }
    }
  })

export const { setWallet } = walletSelected.actions

export default walletSelected.reducer
