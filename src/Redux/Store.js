import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Reducers/counter.slice";
import cartSlice from "./Reducers/cart.slice";
import productsSlice from "./Reducers/products.slice";

// ROOT REDUCER
export default configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
    product: productsSlice,
  },
});