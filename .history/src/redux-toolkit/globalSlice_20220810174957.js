import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    darkMode: false,
    showSidebar: true,
  },
  reducers: {
    toggleDarkMode: (state, { payload }) => {
      return {
        ...state,
        darkMode: payload,
      };
    },
    toggleSidebar: (state, {payload}) => {
      retrun {
        
      }
    }
  },
});
export const { toggleDarkMode } = globalSlice.actions;
export default globalSlice.reducer;
