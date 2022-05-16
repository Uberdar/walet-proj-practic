export const getCosts = (costs) => ({
  type: "transactions/getCosts",
  payload: costs,
});

export const getIncomes = (incomes) => ({
  type: "transactions/getIncomes",
  payload: incomes,
});

export const addCosts = (transaction) => ({
  type: "transactions/addCosts",
  payload: transaction,
});
export const addIncomes = (transaction) => ({
  type: "transactions/addIncomes",
  payload: transaction,
});

export const removeCosts = (id) => ({
  type: "transactions/removeCosts",
  payload: id,
});
export const removeIncomes = (id) => ({
  type: "transactions/removeIncomes",
  payload: id,
});
