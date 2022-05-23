import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { registerUserApi } from "../../utils/apiService";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, thunkApi) => {
    try {
      const data = await registerUserApi(userData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
