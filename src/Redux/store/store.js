import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "../Slices/CategorySlice";
export const store = configureStore({
  reducer: {
    CategorySlice,
  },
});
