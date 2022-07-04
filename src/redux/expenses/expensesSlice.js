import { createSlice } from "@reduxjs/toolkit";
import { dummyExpenses } from "../../utils";

const initialState = {
  expenses: dummyExpenses,
};

const expensesSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {},
});

export default expensesSlice.reducer;
