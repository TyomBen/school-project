import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { URL } from "../../Utills/constants";
export const gettingData = createAsyncThunk(
  "carts/gettingData",
  async (_, thunkAPI) => {
    const { initialStateValue } = thunkAPI.getState().carts;
    if (initialStateValue === "") {
      try {
        const response = await axios(`${URL}/all`);
        return response.data;
      } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue();
      }
    } else {
      try {
        const response = await axios(`${URL}/name/${initialStateValue}`);
        return response.data;
      } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue();
      }
    }
  }
);
