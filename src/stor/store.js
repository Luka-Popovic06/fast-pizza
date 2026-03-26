import { configureStore } from "@reduxjs/toolkit";
import usernameReducer from "./usernameSlice";
import menuReducer from "./menuSlice";

const store = configureStore({
  reducer: {
    username: usernameReducer,
    menu: menuReducer,
  },
});

export default store;
