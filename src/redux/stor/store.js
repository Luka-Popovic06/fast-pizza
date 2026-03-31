import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "./usernameSlice";
import menuReducer from "./menuSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    username: usernameReducer,
    menu: menuReducer,
    cart: cartReducer,
  },
});

export default store;
