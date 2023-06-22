import { createSlice } from "@reduxjs/toolkit";
import { gettingData } from "../actions/carts";
import { gettingSearching } from "../actions/carts";
const cartsSlices = createSlice ({
    name : 'carts',
    initialState : {
        data : [],
        initialStateValue : '',
        isloading : false,
        errors : null,
        dataSearching: []
    },
    reducers : {
        valueFolow : (state, action) => {
            state.initialStateValue = action.payload;
        }
    },
    extraReducers : {
           [gettingData.pending] : (state) => {
            state.isloading = true;
           },
           [gettingData.fulfilled] : (state, action) => {
            state.data = action.payload;
            state.isloading = false;
           },
           [gettingData.rejected] : (state, action) => {
            state.errors = action.payload;
            state.isLoading = false
           },
           [gettingSearching.pending] : (state) => {
            state.isloading = true;
           },
           [gettingSearching.fulfilled] : (state, action) => {
            state.dataSearching = action.payload;
            state.isloading = false;
           },
           [gettingSearching.rejected] : (state, action) => {
            state.errors = action.payload;
            state.isLoading = false
           }
        }
})

export const {valueFolow, initialStateValue, isloading } = cartsSlices.actions
export default cartsSlices.reducer;