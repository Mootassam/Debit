import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLoading, getDebit } from "./debitReducers";

export const saveDebit = createAsyncThunk<void, object>(
  "debit/saveDebit",
  async (data, thunkAPI) => {
    try {
      thunkAPI.dispatch(getLoading(true));
      await thunkAPI.dispatch(getDebit(data));
      thunkAPI.dispatch(getLoading(false));
    } catch (error) {
      thunkAPI.dispatch(getLoading(false));
      console.log(error);
      throw error;
    }
  }
);
