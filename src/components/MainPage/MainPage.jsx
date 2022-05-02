import HeaderWithGoBack from "../shared/HeaderWithGoBack/HeaderWithGoBack";
import TransactionForm from "../TransactionForm/TrasactionForm";
import ButtonsToAnalitics from "../ButtonsToAnalitics/ButtonsToAnalitics";

const MainPage = ({ toggleMain }) => {
  return (
    <>
      <HeaderWithGoBack title="Журнал расходов" />
      <TransactionForm />
      <ButtonsToAnalitics toggleMain={toggleMain} />
    </>
  );
};

export default MainPage;
