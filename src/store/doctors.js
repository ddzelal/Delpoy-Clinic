import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const getDoctors = createAsyncThunk("getDoctors", async (token) => {
  const doctors = await api.getAllDoctors(token);
  return doctors;
});

export const doctorsSlice = createSlice({
  name: "doctors",
  initialState: {},
  reducers: {
    setDoctors: (state, action) => {
      state.todos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDoctors.fulfilled, (state, action) => {
      state.doctors = action.payload;
    });
  },
});
export const { setDoctors } = doctorsSlice.actions;

export default doctorsSlice.reducer;
