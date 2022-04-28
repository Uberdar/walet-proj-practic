import s from "./Header.module.scss";

const Header = ({ title, btnTitle }) => {
  return (
    <header className={s.header}>
      {btnTitle && <button type="button">{btnTitle}</button>}
      <h1 className={s.title}>{title}</h1>
    </header>
  );
};

export default Header;
