import Header from "../Header/Header";
import TransactionForm from "../TransactionForm/TransactionForm";
import ButtonsCollection from "../ButtonsCollection/ButtonsCollection";

const MainPage = () => {
  return (
    <>
      <Header title={"Журнал видатків"} />
      <TransactionForm />
      <ButtonsCollection />
    </>
  );
};

export default MainPage;
