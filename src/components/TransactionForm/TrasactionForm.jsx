import s from './TransactionForm.module.css';

const TransactionForm = () => {
    return (
        <form className={s.form}>
            <label><span className={s.title}>День</span><input type="date" /></label>
            <label><span className={s.title}>Время</span><input type="time" /></label>
            <label><span className={s.title}>Категория</span><input type="button" value="Разное" /></label>
            <label><span className={s.title}>Сумма</span><input type="text" /></label>
            <label><span className={s.title}>Валюта</span><input type="button" value="UAH" /></label>
            <label><input type="text" placeholder="Комментарий" /></label>
        </form>)
}

export default TransactionForm;