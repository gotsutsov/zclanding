import logoFooter from "/images/logoFooter.svg";
import mailIcon from "/images/mailIcon.svg";
import phoneIcon from "/images/phoneIcon.svg";
import googlePlayIcon from "/images/googlePlayIcon.svg";
import appStoreIcon from "/images/appStoreIcon.svg";

import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer"]} id="contact">
      <div className={styles["footer__container"]}>
        <div className={styles["footer__content"]}>
          <div className={styles["footer__logo-wrapper"]}>
            <img
              className={styles["footer__logo"]}
              src={logoFooter}
              width={200}
              height={49.75}
              alt="Логотип ZooClick"
            />
          </div>
          <div className={styles["footer__title-wrapper"]}>
            <h2 className={styles["footer__title"]}>Как с нами связаться</h2>
            <p className={styles["footer__description"]}>
              Мы будем рады любой обратной связи от вас – можете делиться своим
              опытом использования приложения, с кем или с чем удалось
              познакомиться благодаря нему
            </p>
          </div>

          <address className={styles["footer__contact"]}>
            <div className={styles["footer__contact-item"]}>
              <div className={styles["footer__icon-container"]}>
                <img
                  className={styles["footer__icon"]}
                  src={mailIcon}
                  width={36}
                  height={27.69}
                  alt="mail"
                  aria-hidden="true"
                />
              </div>
              <span className={styles["footer__contact-text"]}>
                Email:{" "}
                <a
                  className={styles["footer__contact-link"]}
                  href="mailto:info@zoo-click.com"
                >
                  info@zoo-click.com
                </a>
              </span>
            </div>
            <div className={styles["footer__contact-item"]}>
              <div className={styles["footer__icon-container"]}>
                <img
                  className={styles["footer__icon"]}
                  src={phoneIcon}
                  width={36}
                  height={37.5}
                  alt="phone"
                  aria-hidden="true"
                />
              </div>
              <span className={styles["footer__contact-text"]}>
                Телефон:{" "}
                <a
                  className={styles["footer__contact-link"]}
                  href="tel:88004443484"
                >
                  8&nbsp;(800)&nbsp;444-34-84
                </a>
              </span>
            </div>
          </address>

          <nav className={styles["footer__nav"]}>
            <a
              className={styles["footer__nav-link"]}
              href="https://zoo-click.com/documents/user_agreement.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Пользовательское соглашение
            </a>
            <a
              className={styles["footer__nav-link"]}
              href="https://zoo-click.com/documents/personal_data.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Соглашение об обработке персональных данных
            </a>
            <a
              className={styles["footer__nav-link"]}
              href="https://zoo-click.com/documents/offer.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Оферта
            </a>
            <a
              className={styles["footer__nav-link"]}
              href="https://zoo-click.com/documents/paid_services.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Описание платных услуг
            </a>
          </nav>

          <div className={styles["footer__store"]}>
            <a
              className={styles["footer__store-link"]}
              href="https://redirect.appmetrica.yandex.com/serve/965008352398629561"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Скачать приложение в Google Play"
            >
              <img
                className={styles["footer__store-icon"]}
                src={googlePlayIcon}
                alt="Google Play"
              />
            </a>
            <a
              className={styles["footer__store-link"]}
              href="https://redirect.appmetrica.yandex.com/serve/748835575452230211"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Скачать приложение в App Store"
            >
              <img
                className={styles["footer__store-icon"]}
                src={appStoreIcon}
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
