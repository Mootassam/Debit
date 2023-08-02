import { createSlice } from "@reduxjs/toolkit";
import Dates from "../../utils/Dates";

interface DebitState {
  loading: boolean;
  debit: any[];
  detaill: any[];
}

const initialState: DebitState = {
  loading: false,
  debit: [],
  detaill: [],
};

const debitSlice = createSlice({
  name: "debit",
  initialState,
  reducers: {
    getDebit: (state, action) => {
      state.debit = [...state.debit, action.payload];
    },
    getLoading: (state, actions) => {
      state.loading = actions.payload;
    },
    deleteALL: (state) => {
      state.debit = [];
    },
    showDetail: (state, action) => {
      state.detaill = action.payload.data;
    },
    debitUpdate :(state, action) => {
      const  index  = action.payload;
      if (index >= 0 && index < state.debit.length) {
        const updatedItem = { ...state.debit[index], creditTime: Dates.currentTime() };
        state.debit[index] = updatedItem;
      }
      
      
    }
  },
});

export const { getDebit, getLoading, deleteALL, showDetail,debitUpdate } =
  debitSlice.actions;
export default debitSlice.reducer;
