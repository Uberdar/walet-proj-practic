import { Component } from "react";

import CategoriesList from "./CategoriesList/CategoriesList";
import MainPage from "./MainPage/MainPage";
import TransactionsHistoryPage from "./TransactionsHistoryPage/TransactionsHistoryPage";
import data from "../data/data.json";

class App extends Component {
  state = {
    activePage: "main",
    costs: [],
    incomes: [],
  };

  toggleMain = (activePage = "main") => {
    this.setState({
      activePage,
    });
  };

  render() {
    const { activePage, costs, incomes } = this.state;
    switch (activePage) {
      case "main":
        return <MainPage toggleMain={this.toggleMain} />;
      case "costs":
        return (
          <TransactionsHistoryPage
            toggleMain={this.toggleMain}
            transactions={costs}
          />
        );
      case "incomes":
        return (
          <TransactionsHistoryPage
            toggleMain={this.toggleMain}
            transactions={incomes}
          />
        );
    }
    // return (
    //   <>
    //     {}
    //     {/* {this.state.isMain ? (
    //       <MainPage toggleMain={this.toggleMain} />
    //     ) : (
    //       <TransactionsHistoryPage
    //         toggleMain={this.toggleMain}
    //         transactions={data}
    //       />
    //     )} */}
    //     <CategoriesList />
    //   </>
    // );
  }
}

export default App;
