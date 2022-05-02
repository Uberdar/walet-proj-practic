import s from './ButtonsToAnalitics.module.css';

const ButtonsToAnalitics = () => {
    return (
        <div className={s.container}>
            <button type="button" className={s.btn}>Все расходы</button>
            <button type="button" className={s.btn}>Все доходы</button>
        </div>
    )
}

export default ButtonsToAnalitics;