import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer"]} id="contact">
      <div className={styles["footer__container"]}>
        <div className={styles["footer__content"]}>
          <div className={styles["footer__logo-wrapper"]}>
            <img
              className={styles["footer__logo"]}
              src="images/logo-footer.svg"
              alt="logo-footer"
            />
          </div>
          <h2 className={styles["footer__title"]}>Как с нами связаться</h2>
          <p className={styles["footer__description"]}>
            Мы будем рады любой обратной связи от вас – можете делиться своим
            опытом использования приложения, с кем или с чем удалось
            познакомиться благодаря нему
          </p>

          <div className={styles["footer__contact"]}>
            <div className={styles["footer__contact-wrapper"]}>
              <div className={styles["footer__contact-icon"]}>
                <img src="images/mail.svg" alt="mail" />
              </div>
              <span>
                Email:{" "}
                <a href="mailto:info@zoo-click.com">info@zoo-click.com</a>
              </span>
            </div>
            <div className={styles["footer__contact-wrapper"]}>
              <div className={styles["footer__contact-icon"]}>
                <img src="images/phone.svg" alt="phone" />
              </div>
              <span>
                Телефон:{" "}
                <a href="tel:88004443484">8&nbsp;(800)&nbsp;444-34-84</a>
              </span>
            </div>
          </div>

          <nav className={styles["footer__nav"]}>
            <a
              className={styles["footer__nav-link"]}
              href="https://zoo-click.com/documents/user_agreement.pdf"
              target="_blank"
            >
              Пользовательское соглашение
            </a>
            <a
              className={styles["footer__nav-link"]}
              href="https://zoo-click.com/documents/personal_data.pdf"
              target="_blank"
            >
              Соглашение об обработке персональных данных
            </a>
            <a
              className={styles["footer__nav-link"]}
              href="https://zoo-click.com/documents/offer.pdf"
              target="_blank"
            >
              Оферта
            </a>
            <a
              className={styles["footer__nav-link"]}
              href="https://zoo-click.com/documents/paid_services.pdf"
              target="_blank"
            >
              Описание платных услуг
            </a>
          </nav>

          <div className={styles["footer__download"]}>
            <a
              className={styles["footer__download-link"]}
              href="https://redirect.appmetrica.yandex.com/serve/965008352398629561"
              target="_blank"
            >
              <img
                className={styles["footer__download-image"]}
                src="images/google-play.svg"
                alt="Google Play"
              />
            </a>
            <a
              className={styles["footer__download-link"]}
              href="https://redirect.appmetrica.yandex.com/serve/748835575452230211"
              target="_blank"
            >
              <img
                className={styles["footer__download-image"]}
                src="images/app-store.svg"
                alt="App Store"
              />
            </a>
          </div>
        </div>

        <div className={styles["footer__bottom"]}>
          <div className={styles["footer__legal"]}>
            <p className={styles["footer__legal-copyright"]}>
              © 2025 Сервис Клик
            </p>
            <p className={styles["footer__legal-meta"]}>
              ОГРН: 1227700230284 &nbsp; ИНН: 9729322644
            </p>
            <small className={styles["footer__legal-author"]}>
              © 2025 Тарасов Александр Викторович Фотограф с 20 летним стажем
              Сотрудничество с журналами «Лиза», «Гороскоп», Женское здоровье»,
              «Стар-Хит», «Самая», «Magazine», тесное сотрудничество с «Аква
              Марис» и «Велком»
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
