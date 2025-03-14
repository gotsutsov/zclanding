import styles from "./hero-section.module.scss";

export default function HeroSection() {
  return (
    <section className={styles["hero"]}>
      <div className={styles["hero__container"]}>
        <div className={styles["hero__text"]}>
          <div>
            <p className={styles["hero__slogan"]}>Делать добро - просто!</p>
            <h1 className={styles["hero__title"]}>
              Социальный
              <br /> проект для
              <br /> любителей
              <br /> животных
            </h1>
          </div>
          <img
            className={styles["hero__logo"]}
            src="./images/toppet.png"
            alt="Логотип"
          />
        </div>
        <div className={styles["hero__download"]}>
          <p className={styles["hero__download-label"]}>Скачать приложение</p>
          <a
            className={styles["hero__download-link"]}
            target="_blank"
            href="https://redirect.appmetrica.yandex.com/serve/965008352398629561"
          >
            <img
              className={styles["hero__download-image"]}
              src="./images/google-play.svg"
              alt="Google Play"
            />
          </a>
          <a
            className={styles["hero__download-link"]}
            target="_blank"
            href="https://redirect.appmetrica.yandex.com/serve/748835575452230211"
          >
            <img
              className={styles["hero__download-image"]}
              src="./images/app-store.svg"
              alt="App Store"
            />
          </a>
        </div>
      </div>
      {/* <div className={styles["hero__preview"]}>
        <img
          className={styles["hero__preview-image"]}
          src="./images/petcare11.png"
          alt="Превью приложения"
        />
      </div> */}
    </section>
  );
}
