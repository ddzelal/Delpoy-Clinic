import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const getPatientAppointments = createAsyncThunk(
  "getPatientAppointments",
  async (token) => {
    const appointments = await api.getAllPatientAppointments(token);
    return appointments;
  }
);

export const appointmentsSlice = createSlice({
  name: "appointments",
  initialState: {},
  reducers: {
    setAppointments: (state, action) => {
      state.todos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPatientAppointments.fulfilled, (state, action) => {
      state.appointments = action.payload;
    });
  },
});
export const { setAppointments } = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
