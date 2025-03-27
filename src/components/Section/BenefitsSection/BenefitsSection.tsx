import styles from "./benefits-section.module.scss";

export default function BenefitsSection() {
  return (
    <section className={styles["benefitsSection"]} id="benefits">
      <div className={styles["benefitsSection__container"]}>
        <div className={styles["benefitsSection__title-wrapper"]}>
          <h2 className={styles["benefitsSection__title"]}>Преимущества</h2>
          <h3 className={styles["benefitsSection__subtitle"]}>
            Уникальная функция приложения – возможность поиска пропавших
            животных
          </h3>
        </div>

        <div className={styles["benefitsSection__content"]}>
          <ul className={styles["benefitsSection__list"]}>
            <li className={styles["benefitsSection__list-item"]}>
              <img
                src="images/f1.svg"
                alt="Check icon"
                className={styles["benefitsSection__check-icon"]}
              />
              Спокойствие за своего питомца
            </li>
            <li className={styles["benefitsSection__list-item"]}>
              <img
                src="images/f1.svg"
                alt="Check icon"
                className={styles["benefitsSection__check-icon"]}
              />
              Радость от разделения опыта по воспитанию четырехлапого члена
              семьи
            </li>
            <li className={styles["benefitsSection__list-item"]}>
              <img
                src="images/f1.svg"
                alt="Check icon"
                className={styles["benefitsSection__check-icon"]}
              />
              Экономия времени и денег при поиске новых товаров рядом с домом
            </li>
            <li className={styles["benefitsSection__list-item"]}>
              <img
                src="images/f1.svg"
                alt="Check icon"
                className={styles["benefitsSection__check-icon"]}
              />
              Посещение новых мест для питомцев
            </li>
            <li className={styles["benefitsSection__list-item"]}>
              <img
                src="images/f1.svg"
                alt="Check icon"
                className={styles["benefitsSection__check-icon"]}
              />
              Общение с единомышленниками
            </li>
          </ul>

          <div className={styles["benefitsSection__image-wrapper"]}>
            <img
              className={styles["benefitsSection__image"]}
              src="images/chunya.avif"
              width={616}
              height={411.17}
              alt="Девушка с собакой"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
