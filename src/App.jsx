import { useEffect, useState } from "react";
import MainPage from "./components/MainPage/MainPage";
// import CategoriesList from "./components/CategoriesList/CategoriesList";
import TransactionsHistoryPage from "./components/TransactionsHistoryPage/TransactionsHistoryPage";
// import data from "./data/data.json";
import {
  addTransactionApi,
  getTransactionsApi,
  removeTransactionApi,
} from "./utils/apiService";

const loaderStyles = {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "50px",
};

const App = () => {
  const [activePage, setActivePage] = useState("main");
  const [costs, setCosts] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleMain = (activePage = "main") => {
    setActivePage(activePage);
  };
  const addTransaction = (transaction) => {
    const { transType } = transaction;
    setIsLoading(true);
    addTransactionApi(transType, transaction)
      .then((transaction) => {
        transType === "costs" &&
          setCosts((prevCosts) => [...prevCosts, transaction]);

        transType === "incomes" &&
          setIncomes((prevIncomes) => [...prevIncomes, transaction]);
      })
      .catch((err) => setError(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const deleteTransaction = ({ transType, id }) => {
    setIsLoading(true);
    removeTransactionApi({ transType, id })
      .then(() => {
        transType === "costs" &&
          setCosts((prevCosts) => prevCosts.filter((el) => el.id !== id));

        transType === "incomes" &&
          setIncomes((prevIncomes) => prevIncomes.filter((el) => el.id !== id));
      })
      .catch((err) => setError(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const getTransactions = async () => {
      try {
        setIsLoading(true);
        try {
          const costs = await getTransactionsApi("costs");
          setCosts(costs);
        } catch (error) {
          setError(error);
        }
        try {
          const incomes = await getTransactionsApi("incomes");
          setIncomes(incomes);
        } catch (error) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getTransactions();
  }, []);

  //render
  switch (activePage) {
    case "main":
      return (
        <>
          {isLoading && <h2 style={loaderStyles}>Loading</h2>}
          <MainPage toggleMain={toggleMain} addTransaction={addTransaction} />
        </>
      );

    case "costs":
      return (
        <>
          {isLoading && <h2 style={loaderStyles}>Loading</h2>}
          <TransactionsHistoryPage
            deleteTransaction={deleteTransaction}
            toggleMain={toggleMain}
            transactions={costs}
            transType="costs"
          />
        </>
      );

    case "incomes":
      return (
        <>
          {isLoading && <h2 style={loaderStyles}>Loading</h2>}
          <TransactionsHistoryPage
            deleteTransaction={deleteTransaction}
            toggleMain={toggleMain}
            transactions={incomes}
            transType="incomes"
          />
        </>
      );

    default:
      return;
  }
};

export default App;

// class App extends Component {
//   state = {
//     activePage: "main",
//     costs: [],
//     incomes: [],
//     isLoading: false,
//     error: null,
//   };

//   componentDidMount() {
//     const getTransactions = (transType) => {
//       this.setState({ isLoading: true });
//       getTransactionsApi(transType)
//         .then((transactions) => {
//           this.setState({ [transType]: transactions });
//         })
//         .catch((error) => this.setState({ error }))
//         .finally(() => this.setState({ isLoading: false }));
//     };

//     getTransactions("costs");
//     getTransactions("incomes");
//   }

//   deleteTransaction = (transType, id) => {
//     this.setState({ isLoading: true });
//     removeTransactionApi({ transType, id })
//       .then(() => {
//         this.setState((prev) => ({
//           [transType]: prev[transType].filter((el) => el.id !== id),
//         }));
//       })
//       .catch((error) => this.setState({ error }))
//       .finally(() => this.setState({ isLoading: false }));
//   };

//   toggleMain = (activePage = "main") => {
//     this.setState({
//       activePage,
//     });
//   };

//   addTransaction = (transaction) => {
//     const { transType } = transaction;
//     this.setState((prev) => ({
//       [transType]: [...prev[transType], transaction],
//     }));
//   };

//   render() {
//     const { activePage, costs, incomes, isLoading } = this.state;

//     // switch (activePage) {
//     //   case "main":
//     //     return (
//     //       <>
//     //         {isLoading && <h2 style={loaderStyles}>Loading</h2>}
//     //         <MainPage
//     //           toggleMain={this.toggleMain}
//     //           addTransaction={this.addTransaction}
//     //         />
//     //       </>
//     //     );

//     //   case "costs":
//     //     return (
//     //       <>
//     //         {isLoading && <h2 style={loaderStyles}>Loading</h2>}
//     //         <TransactionsHistoryPage
//     //           deleteTransaction={this.deleteTransaction}
//     //           toggleMain={this.toggleMain}
//     //           transactions={costs}
//     //           transType="costs"
//     //         />
//     //       </>
//     //     );

//     //   case "incomes":
//     //     return (
//     //       <>
//     //         {isLoading && <h2 style={loaderStyles}>Loading</h2>}
//     //         <TransactionsHistoryPage
//     //           deleteTransaction={this.deleteTransaction}
//     //           toggleMain={this.toggleMain}
//     //           transactions={incomes}
//     //           transType="incomes"
//     //         />
//     //       </>
//     //     );

//     //   default:
//     //     return;
//     // }
//   }
// }
