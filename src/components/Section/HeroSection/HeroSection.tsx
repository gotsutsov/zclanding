import styles from "./hero-section.module.scss";

export default function HeroSection() {
  return (
    <section className={styles["hero"]}>
      <div className={styles["hero__container"]}>
        <div className={styles["hero__title-wrapper"]}>
          <div>
            <p className={styles["hero__slogan"]}>Делать добро - просто!</p>
            <h1 className={styles["hero__title"]}>
              Социальный
              <br /> проект для
              <br /> любителей
              <br /> животных
            </h1>
          </div>
        </div>

        <p className={styles["hero__download-label"]}>Скачать приложение:</p>
        <div className={styles["hero__download"]}>
          <a
            className={styles["hero__download-link"]}
            href="https://redirect.appmetrica.yandex.com/serve/965008352398629561"
            target="_blank"
          >
            <img
              className={styles["hero__download-image"]}
              src="images/googlePlayIcon.svg"
              width={200}
              height={71.11}
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
              src="images/appStoreIcon.svg"
              width={200}
              height={71.11}
              alt="App Store"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
