
import navSelected from './navContext'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        navContext : navSelected
    }
})

export default store;