import s from "./ButtonsCollection.module.scss";

const ButtonsCollection = () => {
  return (
    <div className={s.container}>
      <button className={s.button} type="button">
        Всі витрати
      </button>
      <button className={s.button} type="button">
        Всі доходи
      </button>
    </div>
  );
};

export default ButtonsCollection;
