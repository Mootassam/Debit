import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLoading, getDebit, deleteALL } from "./debitReducers";

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

export const editDebit = createAsyncThunk<void, object>(
  "debit/editDebit",
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

export const deleteDebit = createAsyncThunk(
  "debit/deleAll",
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(getLoading(true));
      await thunkAPI.dispatch(deleteALL());
      thunkAPI.dispatch(getLoading(true));
    } catch (error) {
      thunkAPI.dispatch(getLoading(true));
      console.log(error);
      throw error;
    }
  }
);
