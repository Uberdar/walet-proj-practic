import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import TransactionsHistoryPage from "./components/TransactionsHistoryPage/TransactionsHistoryPage";
import { getCategoriesApi, registerUserApi } from "./utils/apiService";

import {
  getCostsCats,
  getIncomesCats,
} from "./redux/categories/categoriesSlice";
import { getTransactions } from "./redux/transactions/transactionsOperations";
import {
  getCostsCategories,
  getIncomesCategories,
} from "./redux/categories/categoriesOperatios";
import { getIsAuth } from "./redux/auth/authSelectors";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);

  useEffect(() => {
    dispatch(getTransactions("costs"));
    dispatch(getTransactions("incomes"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCostsCategories());
    dispatch(getIncomesCategories());
    // const getCategories = async () => {
    //   try {
    //     await getCategoriesApi({ transType: "incomes" }).then((res) =>
    //       dispatch(getIncomesCats(res))
    //     );
    //     await getCategoriesApi({ transType: "costs" }).then((res) =>
    //       dispatch(getCostsCats(res))
    //     );
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };
    // getCategories();
  }, []);

  return (
    <>
      <Routes>
        {isAuth ? (
          <>
            <Route path="/*" element={<MainPage />} />
            <Route
              path="/transactions/:transType"
              element={<TransactionsHistoryPage />}
            />
          </>
        ) : (
          <>
            <Route path="/login" element={<h1>Login Page</h1>} />
            <Route path="/register" element={<RegisterPage />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
