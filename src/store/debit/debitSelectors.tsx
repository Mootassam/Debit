import { createSelector } from "reselect";

const selectGenerateSate = (state: any) => state.debit;
export const selectDebit = createSelector(
  selectGenerateSate,
  (debit) => debit.debit
);
export const selectLoading = createSelector(
  selectGenerateSate,
  (loading) => loading.loading
);

export const debitDetaill = createSelector(
  selectGenerateSate,
  (detaill) => detaill.detaill
);
