import { useState } from "react";
import styles from "./header.module.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles["header"]}>
      <nav className={styles["header__nav"]}>
        <div className={styles["header__logo-wrapper"]}>
          <img
            className={styles["header__logo"]}
            src="images/logo.svg"
            alt="logo"
          />
        </div>

        <button className={styles["header__burger"]} onClick={toggleMenu}>
          <img src="images/burger.svg" alt="burger menu" />
        </button>

        <ul
          className={
            isOpen
              ? `${styles["header__menu"]} ${styles["header__menu--open"]}`
              : styles["header__menu"]
          }
        >
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
            <a className={styles["header__menu-link"]} href="#relevance">
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
            <a className={styles["header__menu-link"]} href="#availability">
              Наличие
            </a>
          </li>
          <li className={styles["header__menu-item"]}>
            <a className={styles["header__menu-link"]} href="#reviews">
              Отзывы
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
