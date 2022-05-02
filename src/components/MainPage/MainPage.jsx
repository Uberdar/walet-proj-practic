import HeaderWithGoBack from "../shared/HeaderWithGoBack/HeaderWithGoBack";
import TransactionForm from "../TransactionForm/TrasactionForm";
import ButtonsToAnalitics from "../ButtonsToAnalitics/ButtonsToAnalitics";

const MainPage = () => {
    return (
        <>
            <HeaderWithGoBack title="Журнал расходов" />
            <TransactionForm />
            <ButtonsToAnalitics />
        </>
    )
}

export default MainPage;