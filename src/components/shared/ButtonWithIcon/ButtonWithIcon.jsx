import sprite from '../../../images/sprite.svg';
import s from './ButtonWithIcon.module.css';

const ButtonWithIcon = ({ icon, className }) => {
    return (
        <button type="button" className={className ? className : s.button}>
            <svg className={s.svg}>
                <use href={sprite + icon} />
            </svg>
        </button>
    )
}

export default ButtonWithIcon;