import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import debitReducers from "./debit/debitReducers";

const presistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  debit: debitReducers,
});

const persistedReducer = persistReducer(presistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // Remove the thunkMiddleware here, Redux Toolkit handles thunks internally
});

export default store;
