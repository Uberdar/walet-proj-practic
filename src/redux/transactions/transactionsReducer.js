import { combineReducers } from "redux";

const costsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "transactions/getCosts":
      return payload;
    case "transactions/addCosts":
      return [...state, payload];
    case "transactions/removeCosts":
      return state.filter((transaction) => transaction.id !== payload);

    default:
      return state;
  }
};

const incomesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "transactions/getIncomes":
      return payload;
    case "transactions/addIncomes":
      return [...state, payload];
    case "transactions/removeIncomes":
      return state.filter((transaction) => transaction.id !== payload);

    default:
      return state;
  }
};

export const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
});
