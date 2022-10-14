import { configureStore } from '@reduxjs/toolkit'
import { table } from './slices/table';

const store = configureStore({
    reducer:{
        tablePage: table
    }
})

export default store;