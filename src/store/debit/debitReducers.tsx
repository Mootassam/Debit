import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      state.debit.push(action.payload);
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
  },
});

export const { getDebit, getLoading, deleteALL, showDetail } =
  debitSlice.actions;
export default debitSlice.reducer;
