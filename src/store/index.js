
import navSelected from './navContext'
import walletSelected from './walletContext'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        navContext : navSelected,
        walletContext: walletSelected,
    }
})

export default store;