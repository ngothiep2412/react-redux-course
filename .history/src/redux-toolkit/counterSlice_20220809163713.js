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
    // incrementByAmount: (state, actions) => ({
    //   ...state,
    //   count: state.count + actions.payload,
    // }),
    incrementByAmount: (state, { payload }) => ({
      //Handle logic code here
      ...state,
      count: state.count + payload,
    }),
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
