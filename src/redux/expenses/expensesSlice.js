import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expense: [],
};

const expensesSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {},
});

export default expensesSlice.reducer;
