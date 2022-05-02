import HeaderWithGoBack from "../shared/HeaderWithGoBack/HeaderWithGoBack";
import s from './CategoriesList.module.css';
import sprite from '../../images/sprite.svg';

const CategoriesList = () => {
    return (
        <>
            <HeaderWithGoBack title='Категории' withBtn />
            <ul className={s.list}>
                <li className={s.item}>
                    <span className={s.title}>Разное</span>
                    <button type="button" className={s.btn}>
                        <svg className={s.svg}>
                            <use href={sprite + "#icon-navigation-more"} ></use>
                        </svg>
                    </button>
                </li>
            </ul>
        </>
    )
}

export default CategoriesList;