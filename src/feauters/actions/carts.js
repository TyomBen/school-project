import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { URL, URL1 } from '../../Utills/constants';
export const gettingData = createAsyncThunk (
    'carts/gettingData',
    async (_, thunkAPI) => {
     
        try {
            const response = await axios (`${URL}/all`);
            return response.data;
        }catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue()
        }
    }
)

export const gettingSearching = createAsyncThunk (
    'carts/gettingData',
    async (name, thunkAPI) => {
     
        try {
            const response = await axios (`${URL}/name/${name}`);
            return response.data;
        }catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue()
        }
    }
)