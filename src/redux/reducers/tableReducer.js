import { createSlice } from '@reduxjs/toolkit'
import orders from '../../data/Shipments.json'

const initialState = {
    data:{
        orders
    }
}

const tableSlice = createSlice({
    name: 'tablePage',
    initialState
})

export const tableReducer = tableSlice.reducer;