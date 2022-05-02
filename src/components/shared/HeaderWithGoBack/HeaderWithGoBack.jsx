import s from "./HeaderWithGoBack.module.css";
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";

const HeaderWithGoBack = ({ title, withBtn, onGoBack }) => {
  return (
    <header className={s.header}>
      {withBtn && (
        <ButtonWithIcon icon="#icon-arrow-left2" cbOnClick={onGoBack} />
      )}
      <h1 className={s.title}>{title}</h1>
    </header>
  );
};

export default HeaderWithGoBack;
