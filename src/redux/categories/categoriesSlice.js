import { createSlice } from "@reduxjs/toolkit";
import {
  addCostsCategory,
  addIncomesCategory,
  getCostsCategories,
  getIncomesCategories,
} from "./categoriesOperatios";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    costsCats: [],
    incomesCats: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    getCostsCats(state, { payload }) {
      return { ...state, costsCats: payload };
    },
    getIncomesCats(state, { payload }) {
      state.incomesCats = payload;
    },
    addCostsCats(state, { payload }) {
      return { ...state, costsCats: [...state.costsCats, payload] };
    },
    addIncomesCats(state, { payload }) {
      state.incomesCats.push(payload);
    },
  },
  extraReducers: {
    [getCostsCategories.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getCostsCategories.fulfilled]: (state, { payload }) => {
      return { ...state, costsCats: payload, isLoading: false };
    },
    [getCostsCategories.rejected]: (state, { payload }) => {
      return { ...state, error: payload, isLoading: false };
    },

    [getIncomesCategories.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [getIncomesCategories.fulfilled]: (state, { payload }) => {
      return { ...state, incomesCats: payload, isLoading: false };
    },
    [getIncomesCategories.rejected]: (state, { payload }) => {
      return { ...state, error: payload, isLoading: false };
    },
    //add
    [addCostsCategory.pending]: (state) => ({ ...state, isLoading: true }),

    [addCostsCategory.fulfilled]: (state, { payload }) => ({
      ...state,
      costsCats: [...state.costsCats, payload],
      isLoading: false,
    }),
    [addCostsCategory.rejected]: (state, { payload }) => {
      return { ...state, error: payload, isLoading: false };
    },

    [addIncomesCategory.pending]: (state) => ({ ...state, isLoading: true }),

    [addIncomesCategory.fulfilled]: (state, { payload }) => ({
      ...state,
      incomesCats: [...state.incomesCats, payload],
      isLoading: false,
    }),
    [addIncomesCategory.rejected]: (state, { payload }) => {
      return { ...state, error: payload, isLoading: false };
    },
  },
});

export default categoriesSlice.reducer;

export const { getCostsCats, addIncomesCats, addCostsCats, getIncomesCats } =
  categoriesSlice.actions;
