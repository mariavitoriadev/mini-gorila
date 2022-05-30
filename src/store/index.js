
import navSelected from './navContext'
import filterWalletSelected from './filterWalletContext'
import hideSelected from './hideContext'
import filterPositionsSelected from './filterPositionsContext'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        navContext : navSelected,
        filterWalletContext: filterWalletSelected,
        hideContext: hideSelected,
        filterPositionsContext: filterPositionsSelected
    }
})

export default store;