import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DebitState {
  loading: boolean;
  debit: any[];
}

const initialState: DebitState = {
  loading: false,
  debit: [],
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
  },
});

export const { getDebit, getLoading } = debitSlice.actions;
export default debitSlice.reducer;
