import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../slices/cart-slice";

export const appStore = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});