import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";
import { saveUser } from "../utils";

export const login = createAsyncThunk("login", async (user) => {
  const userRes = await api.login(user);
  saveUser(userRes);
  return userRes;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

// this is for dispatch

export const { setUser } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;
