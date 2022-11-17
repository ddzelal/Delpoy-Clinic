import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const getProfile = createAsyncThunk("getProfile", async (token) => {
  const profile = await api.getProfile(token);

  return profile;
});

export const profileSlice = createSlice({
  name: "profile",
  initialState: {},
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
      // console.log(state, action, "EXTRA REDUCER");
    });
  },
});
export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;
