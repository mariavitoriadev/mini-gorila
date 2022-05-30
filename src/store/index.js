
import navSelected from './navContext'
import walletSelected from './walletContext'
import hideSelected from './hideContext'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        navContext : navSelected,
        walletContext: walletSelected,
        hideContext: hideSelected
    }
})

export default store;