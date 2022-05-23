import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    idToken: null,
    localId: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    fn(state, action) {},
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { email, idToken, localId } = payload;
      state.email = email;
      state.idToken = idToken;
      state.localId = localId;
      state.isLoading = false;
    },
    [registerUser.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
