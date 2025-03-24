import styles from "./availability-section.module.scss";

export default function AvailabilitySection() {
  return (
    <section className={styles["availabilitySection"]} id={"availability"}>
      <div className={styles["availabilitySection__container"]}>
        <div className={styles["availabilitySection__title-wrapper"]}>
          <h2 className={styles["availabilitySection__title"]}>Уже здесь</h2>
          <p className={styles["availabilitySection__subtitle"]}>
            Приложение доступно на смартфонах
          </p>
        </div>

        <div className={styles["availabilitySection__content"]}>
          <div className={styles["availabilitySection__image-wrapper"]}>
            <img
              className={styles["availabilitySection__image"]}
              src="images/2ip13.png"
              alt="Интерфейс приложения ЗооКлик на экране смартфона"
              loading="lazy"
            />
          </div>

          <ul className={styles["availabilitySection__features"]}>
            <li className={styles["availabilitySection__feature"]}>
              <div className={styles["availabilitySection__icon"]}>
                <img
                  src="images/icon14.svg"
                  alt="Иконка профиля пользователя"
                />
              </div>
              <p className={styles["availabilitySection__description"]}>
                Регистрация и создание профиля пользователя
              </p>
            </li>
            <li className={styles["availabilitySection__feature"]}>
              <div className={styles["availabilitySection__icon"]}>
                <img src="images/icon15.svg" alt="Иконка питомца" />
              </div>
              <p className={styles["availabilitySection__description"]}>
                Добавление питомцев в профиль пользователя
              </p>
            </li>
            <li className={styles["availabilitySection__feature"]}>
              <div className={styles["availabilitySection__icon"]}>
                <img src="images/icon16.svg" alt="Иконка объявления" />
              </div>
              <p className={styles["availabilitySection__description"]}>
                Создание тематических объявлений
              </p>
            </li>
            <li className={styles["availabilitySection__feature"]}>
              <div className={styles["availabilitySection__icon"]}>
                <img src="images/icon17.svg" alt="Иконка медиафайлов" />
              </div>
              <p className={styles["availabilitySection__description"]}>
                Добавление медиа (фото, видео) в профиль пользователя
              </p>
            </li>
            <li className={styles["availabilitySection__feature"]}>
              <div className={styles["availabilitySection__icon"]}>
                <img src="images/icon18.svg" alt="Иконка избранного" />
              </div>
              <p className={styles["availabilitySection__description"]}>
                Добавление/удаление объявлений из избранного
              </p>
            </li>
            <li className={styles["availabilitySection__feature"]}>
              <div className={styles["availabilitySection__icon"]}>
                <img
                  src="images/icon19.svg"
                  alt="Иконка карты и комментариев"
                />
              </div>
              <p className={styles["availabilitySection__description"]}>
                Просмотр и комментирование объявлений
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
