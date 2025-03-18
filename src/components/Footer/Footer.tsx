import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer"]} id="contact">
      <div className={styles["footer-content"]}>
        <h2 className={styles["footer-title"]}>Как с нами связаться</h2>
        <p className={styles["footer-description"]}>
          Мы будем рады любой обратной связи от вас – можете делиться своим
          опытом использования приложения, с кем или с чем удалось познакомиться
          благодаря нему
        </p>
        <div className={styles["footer-app-links"]}>
          <a href="#" className={styles["google-play-link"]}>
            <img src="images/google-play.svg" alt="Google Play" />
          </a>
          <a href="#" className={styles["app-store-link"]}>
            <img src="images/app-store.svg" alt="App Store" />
          </a>
        </div>
        <nav className={styles["footer-nav"]}>
          <a
            href="https://zoo-click.com/documents/user_agreement.pdf"
            target="_blank"
          >
            Пользовательское соглашение
          </a>
          <a
            href="https://zoo-click.com/documents/personal_data.pdf"
            target="_blank"
          >
            Соглашение об обработке персональных данных
          </a>
          <a href="https://zoo-click.com/documents/offer.pdf" target="_blank">
            Оферта
          </a>
          <a
            href="https://zoo-click.com/documents/paid_services.pdf"
            target="_blank"
          >
            Описание платных услуг
          </a>
        </nav>
      </div>

      <div className={styles["footer-bottom"]}>
        <div className={styles["footer-contact"]}>
          <div className={styles["footer-icone"]}>
            <img src="images/mail.svg" alt="mail" />
          </div>
          <span>
            Email: <a href="mailto:info@zoo.ru">info@zoo.ru</a>
          </span>
          <div className={styles["footer-icone"]}>
            <img src="images/phone.svg" alt="phone" />
          </div>
          <span>
            Телефон: <a href="tel:88004443484">8 800 444 34 84</a>
          </span>
        </div>
        <div className={styles["footer-company-info"]}>
          <span>©2024 Сервис Клик ОГРН: 1227700230284 ИНН: 9729232644</span>
          <span>
            © 2024 Тарасов Александр Викторович Фотограф с 20 летним стажем
            Сотрудничество с журналами «Лиза», «Гороскоп», Женское здоровье»,
            «Стар-Хит», «Самая», «Magazine», тесное сотрудничество с «Аква
            Марис» и «Велком»
          </span>
        </div>
      </div>

      <div className={styles["footer-dog-image"]}>
        <img src="images/doggy.avif" alt="dog" loading="lazy" />
      </div>
    </footer>
  );
}
