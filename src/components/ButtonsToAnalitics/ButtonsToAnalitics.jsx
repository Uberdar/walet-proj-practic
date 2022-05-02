import s from "./ButtonsToAnalitics.module.css";

const ButtonsToAnalitics = ({ toggleMain }) => {
  return (
    <div className={s.container}>
      <button
        onClick={() => toggleMain("costs")}
        type="button"
        className={s.btn}
      >
        Все расходы
      </button>
      <button
        onClick={() => toggleMain("incomes")}
        type="button"
        className={s.btn}
      >
        Все доходы
      </button>
    </div>
  );
};

export default ButtonsToAnalitics;
