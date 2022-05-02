import ButtonWithIcon from "../shared/ButtonWithIcon/ButtonWithIcon";
import HeaderWithGoBack from "../shared/HeaderWithGoBack/HeaderWithGoBack";
import s from "./TransactionHistoryPage.module.css";
import { format, compareAsc } from "date-fns";
import { es, ru } from "date-fns/locale";

const TransactionsHistoryPage = ({ transactions, toggleMain, transType }) => {
  const onGoBack = () => toggleMain();
  return (
    <>
      <HeaderWithGoBack
        title={transType === "costs" ? "Витрати" : "Доходи"}
        withBtn
        onGoBack={onGoBack}
      />
      <ul className={s.list}>
        {transactions.map((transaction) => (
          <li className={s.item} key={transaction.id}>
            <div>
              <p className={s.date}>
                {/* <span>{transaction.day},</span>
                            <span>{transaction.date}</span> */}
                <span>
                  {format(new Date(transaction.date), "E, dd MMM yyyy", {
                    locale: ru,
                  })}
                </span>
                <span>{transaction.time}</span>
              </p>
              <p>{transaction.comment}</p>
            </div>
            <p className={s.sum}>
              <span className={s.price}>{transaction.sum}</span>
              <span className={s.currency}>{transaction.currency}</span>
            </p>
            <ButtonWithIcon icon="#icon-navigation-more" className={s.button} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionsHistoryPage;
