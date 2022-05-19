import { createAsyncThunk } from "@reduxjs/toolkit";
import { addCategoryApi, getCategoriesApi } from "../../utils/apiService";

export const getCostsCategories = createAsyncThunk(
  "categories/getCosts",
  async (_, { rejectWithValue }) => {
    try {
      const cats = await getCategoriesApi({ transType: "costs" });
      return cats;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getIncomesCategories = createAsyncThunk(
  "categories/getIncomes",
  async (_, { rejectWithValue }) => {
    try {
      const cats = await getCategoriesApi({ transType: "incomes" });
      return cats;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addCostsCategory = createAsyncThunk(
  "",
  async ({ transType, category }, { rejectWithValue }) => {
    try {
      const newCat = await addCategoryApi({ transType, category });
      return newCat;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addIncomesCategory = createAsyncThunk(
  "",
  async ({ transType, category }, { rejectWithValue }) => {
    try {
      const newCat = await addCategoryApi({ transType, category });
      return newCat;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// const addIncomesCategories = createAsyncThunk('')
