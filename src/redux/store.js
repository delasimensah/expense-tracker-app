import { configureStore } from "@reduxjs/toolkit";

// reducers
import expensesReducer from "./expenses/expensesSlice";

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
  },
});
