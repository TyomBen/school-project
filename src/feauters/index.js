import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./reducers/cartSlices";

export const store = configureStore({
  reducer: {
    carts: cartSlices,
  },
});
