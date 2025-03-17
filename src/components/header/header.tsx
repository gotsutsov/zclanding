import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles["header"]} id="home">
      <nav className={styles["header__nav"]}>
        <img
          className={styles["header__logo"]}
          src="images/logo.svg"
          alt="logo"
        />
        {/* <a className="mobilenav" href="javascript:void(0)">
          <img src="./images/menu.svg" alt="" onClick={() => {}} />
        </a> */}
        {/* <ul className="mobile" id="mobilemenu"></ul> */}
        <ul className={styles["header__menu"]}>
          <li className={styles["header__menu-item"]}>
            <a className={styles["header__menu-link"]} href="#home">
              Главная
            </a>
          </li>
          <li className={styles["header__menu-item"]}>
            <a className={styles["header__menu-link"]} href="#product">
              Приложение
            </a>
          </li>
          <li className={styles["header__menu-item"]}>
            <a className={styles["header__menu-link"]} href="#mission">
              О проекте
            </a>
          </li>
          <li className={styles["header__menu-item"]}>
            <a className={styles["header__menu-link"]} href="#problem">
              Актуальность
            </a>
          </li>
          <li className={styles["header__menu-item"]}>
            <a className={styles["header__menu-link"]} href="#audience">
              Аудитория
            </a>
          </li>
          <li className={styles["header__menu-item"]}>
            <a className={styles["header__menu-link"]} href="#benefits">
              Преимущества
            </a>
          </li>
          <li className={styles["header__menu-item"]}>
            <a className={styles["header__menu-link"]} href="#contact">
              Контакты
            </a>
          </li>
        </ul>

        {/* <ul className="social">
          <li>
            <a href="#">
              <img src="./images/fb.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/ig.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/tw.svg" alt="" />
            </a>
          </li>
        </ul> */}
      </nav>
    </header>
  );
}
