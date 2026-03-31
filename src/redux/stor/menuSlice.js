import { createSlice } from "@reduxjs/toolkit";
import { fetchMenu } from "../api/api";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menu: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.status = "success";
        state.menu = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});
export default menuSlice.reducer;
