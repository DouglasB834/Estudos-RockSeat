import style from "./Header.module.css";

export const Header = () => {
  return (
    <header className={style.header}>
      <a href="#">
        <h3>Logo</h3>
      </a>
    </header>
  );
};
