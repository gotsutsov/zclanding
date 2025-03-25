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

        {/* <div className={styles["benefitsSection__tabs"]}>
          <button
            className={`${styles["benefitsSection__tab"]} ${styles["benefitsSection__tab--active"]}`}
          >
            <img src="images/buttonicon.svg" alt="Иконка владельцев питомцев" />
            Владельцы питомцев
          </button>
          <button className={styles["benefitsSection__tab"]}>
            <img src="images/buttonicon2.svg" alt="Иконка для бизнеса" />
            Для бизнеса
          </button>
        </div> */}

        <div className={styles["benefitsSection__content"]}>
          <ul className={styles["benefitsSection__list"]}>
            <li className={styles["benefitsSection__listItem"]}>
              <img
                src="images/check.svg"
                alt="Check icon"
                className={styles["benefitsSection__checkIcon"]}
              />
              Спокойствие за своего питомца
            </li>
            <li className={styles["benefitsSection__listItem"]}>
              <img
                src="images/check.svg"
                alt="Check icon"
                className={styles["benefitsSection__checkIcon"]}
              />
              Радость от разделения опыта по воспитанию четырехлапого члена
              семьи
            </li>
            <li className={styles["benefitsSection__listItem"]}>
              <img
                src="images/check.svg"
                alt="Check icon"
                className={styles["benefitsSection__checkIcon"]}
              />
              Экономия времени и денег при поиске новых товаров рядом с домом
            </li>
            <li className={styles["benefitsSection__listItem"]}>
              <img
                src="images/check.svg"
                alt="Check icon"
                className={styles["benefitsSection__checkIcon"]}
              />
              Посещение новых мест для питомцев
            </li>
            <li className={styles["benefitsSection__listItem"]}>
              <img
                src="images/check.svg"
                alt="Check icon"
                className={styles["benefitsSection__checkIcon"]}
              />
              Общение с единомышленниками
            </li>
          </ul>

          <div className={styles["benefitsSection__image-wrapper"]}>
            <img
              className={styles["benefitsSection__image"]}
              src="images/chunya.avif"
              alt="Девушка с собакой"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
