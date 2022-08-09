import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => ({
      ...state,
      count: state.count + 1,
    }),
    decrement: (state) => ({
      ...state,
      count: state.count - 1,
    }),
    incrementByAmount: (state, payload) => ({
      ...state,
      count: state.count + payload.value,
    }),
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
