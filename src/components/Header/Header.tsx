import BurgerMenu from "../BurgerMenu";

import styles from "./header.module.scss";

export default function Header() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ): void => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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

        <BurgerMenu />

        <ul className={styles["header__menu"]}>
          <li className={styles["header__menu-item"]}>
            <a
              className={styles["header__menu-link"]}
              href="#product"
              onClick={(e) => handleScroll(e, "product")}
            >
              Приложение
            </a>
          </li>
          <li className={styles["header__menu-item"]}>
            <a
              className={styles["header__menu-link"]}
              href="#mission"
              onClick={(e) => handleScroll(e, "mission")}
            >
              О проекте
            </a>
          </li>
          <li className={styles["header__menu-item"]}>
            <a
              className={styles["header__menu-link"]}
              href="#relevance"
              onClick={(e) => handleScroll(e, "relevance")}
            >
              Актуальность
            </a>
          </li>
          <li className={styles["header__menu-item"]}>
            <a
              className={styles["header__menu-link"]}
              href="#audience"
              onClick={(e) => handleScroll(e, "audience")}
            >
              Аудитория
            </a>
          </li>
          <li className={styles["header__menu-item"]}>
            <a
              className={styles["header__menu-link"]}
              href="#benefits"
              onClick={(e) => handleScroll(e, "benefits")}
            >
              Преимущества
            </a>
          </li>
          <li className={styles["header__menu-item"]}>
            <a
              className={styles["header__menu-link"]}
              href="#availability"
              onClick={(e) => handleScroll(e, "availability")}
            >
              Наличие
            </a>
          </li>
          <li className={styles["header__menu-item"]}>
            <a
              className={styles["header__menu-link"]}
              href="#reviews"
              onClick={(e) => handleScroll(e, "reviews")}
            >
              Отзывы
            </a>
          </li>
          <li className={styles["header__menu-item"]}>
            <a
              className={styles["header__menu-link"]}
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
            >
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
