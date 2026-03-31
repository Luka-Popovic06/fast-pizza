import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMenu = createAsyncThunk("manuSlice/fetchMenue", async () => {
  const res = await axios.get(
    "https://react-fast-pizza-api.onrender.com/api/menu",
  );
  return res.data;
});
