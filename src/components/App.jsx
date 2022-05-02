import CategoriesList from "./CategoriesList/CategoriesList";
import MainPage from "./MainPage/MainPage";
import TransactionsHistoryPage from "./TransactionsHistoryPage/TransactionsHistoryPage";
import data from '../data/data.json';

function App() {
  return (
    <>
      {/* <MainPage />
      <CategoriesList /> */}
      <TransactionsHistoryPage transactions={data} />
    </>
  );
}

export default App;
