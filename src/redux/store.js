import { configureStore } from '@reduxjs/toolkit'
import { tableReducer } from './reducers/tableReducer';

const store = configureStore({
    reducer:{
        tablePage: tableReducer
    }
})

export default store;