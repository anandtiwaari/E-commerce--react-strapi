import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState: {
    categoryData: [],
    loading: false,
  },
  reducers: {
    AddApiData: (state, action) => {
      state = action.payload;
    },
  },
});
export const { AddApiData } = categorySlice.actions;
export default categorySlice.reducer;
