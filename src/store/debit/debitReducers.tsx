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
      console.log(action.payload);
      state.debit.push(action.payload);
    },
    getLoading: (state, actions) => {
      state.loading = actions.payload;
    },
    deleteALL: (state) => {
      state.debit = [];
    },
  },
});

export const { getDebit, getLoading, deleteALL } = debitSlice.actions;
export default debitSlice.reducer;
