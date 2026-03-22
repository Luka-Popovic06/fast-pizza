import { createSlice } from "@reduxjs/toolkit";
const usernameSlice = createSlice({
  name: "username",
  initialState: {
    name: "",
  },
  reducers: {
    addUsername: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const { addUsername } = usernameSlice.actions;
export default usernameSlice.reducer;
