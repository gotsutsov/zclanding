import styles from "./reviews-section.module.scss";

export default function ReviewsSection() {
  return (
    <section className={styles["reviewsSection"]} id={"reviews"}>
      <div className={styles["reviewsSection__container"]}>
        <div className={styles["reviewsSection__titleWrapper"]}>
          <h2 className={styles["reviewsSection__title"]}>Отзывы</h2>
          <h3 className={styles["reviewsSection__subtitle"]}>
            Что говорят пользователи о проекте ЗооКлик
          </h3>
        </div>

        <div className={styles["reviewsSection__cards"]}>
          <div className={styles["reviewsSection__card"]}>
            <h3 className={styles["reviewsSection__author"]}>Вячеслав</h3>
            <div className={styles["reviewsSection__stars"]}>
              <img src="images/star.svg" alt="star" />
              <img src="images/star.svg" alt="star" />
              <img src="images/star.svg" alt="star" />
              <img src="images/star.svg" alt="star" />
              <img src="images/star.svg" alt="star" />
            </div>
            <p className={styles["reviewsSection__text"]}>
              Удобный сервис,объединяющий людей и животных.Приятный
              проект,интересные истории людей. Рекомендую любителям животных и
              кто мечтает завести себе друга.
            </p>
            <div>
              <img src="images/vyacheslav.png" alt="Вячеслав" />
            </div>
          </div>

          <div className={styles["reviewsSection__card"]}>
            <h3 className={styles["reviewsSection__author"]}>Галина</h3>
            <div className={styles["reviewsSection__stars"]}>
              <img src="images/star1.svg" alt="star" />
              <img src="images/star1.svg" alt="star" />
              <img src="images/star1.svg" alt="star" />
              <img src="images/star1.svg" alt="star" />
              <img src="images/star1.svg" alt="star" />
            </div>
            <p className={styles["reviewsSection__text"]}>
              Долго ждали такое приложение в России. Очень удобный интерфейс!
              Благодаря Вам мы с мужем нашли себе самого верного друга!
            </p>
            <div>
              <img src="images/galina.png" alt="Галина" />
            </div>
          </div>

          <div className={styles["reviewsSection__card"]}>
            <h3 className={styles["reviewsSection__author"]}>Екатерина</h3>
            <div className={styles["reviewsSection__stars"]}>
              <img src="images/star1.svg" alt="star" />
              <img src="images/star1.svg" alt="star" />
              <img src="images/star1.svg" alt="star" />
              <img src="images/star1.svg" alt="star" />
              <img src="images/star1.svg" alt="star" />
            </div>
            <p className={styles["reviewsSection__text"]}>
              Грамотно проработано приложение,интересный медиа-формат,чтобы
              поделиться жизнью питомца.Рекомендую.
            </p>
            <div>
              <img src="images/kate.png" alt="Екатерина" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
