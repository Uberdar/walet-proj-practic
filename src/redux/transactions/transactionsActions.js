import { createAction } from "@reduxjs/toolkit";
export const removeCosts = createAction("transactions/removeCosts");
export const removeIncomes = createAction("transactions/removeIncomes");

export const getCostsRequest = createAction("transactions/getCostsRequest");
export const getCostsSuccess = createAction("transactions/getCostsSuccess");
export const getCostsError = createAction("transactions/getCostsError");

export const getIncomesRequest = createAction("transactions/getIncomesRequest");
export const getIncomesSuccess = createAction("transactions/getIncomesSuccess");
export const getIncomesError = createAction("transactions/getIncomesError");

export const addCostsRequest = createAction("transactions/addCostsRequest");
export const addCostsSuccess = createAction("transactions/addCostsSuccess");
export const addCostsError = createAction("transactions/addCostsError");

export const addIncomesRequest = createAction("transactions/addIncomesRequest");
export const addIncomesSuccess = createAction("transactions/addIncomesSuccess");
export const addIncomesError = createAction("transactions/addIncomesError");

export const deleteCostsRequest = createAction(
  "transactions/deleteCostsRequest"
);
export const deleteCostsSuccess = createAction(
  "transactions/deleteCostsSuccess"
);
export const deleteCostsError = createAction("transactions/deleteCostsError");

export const deleteIncomesRequest = createAction(
  "transactions/deleteIncomesRequest"
);
export const deleteIncomesSuccess = createAction(
  "transactions/deleteIncomesSuccess"
);
export const deleteIncomesError = createAction(
  "transactions/deleteIncomesError"
);
