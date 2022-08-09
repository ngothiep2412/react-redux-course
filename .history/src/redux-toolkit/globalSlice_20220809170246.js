import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: (state, { payload }) => {
      return {
        ...state,
        darkMode: payload,
      };
    },
  },
});

export default globalSlice.reducer;