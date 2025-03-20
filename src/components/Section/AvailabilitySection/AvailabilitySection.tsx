import styles from "./availability-section.module.scss";

export default function AvailabilitySection() {
  return (
    <section className={styles["availabilitySection"]} id={"availability"}>
      <div className={styles["availabilitySection__container"]}>
        <div className={styles["availabilitySection__titleWrapper"]}>
          <h2 className={styles["availabilitySection__title"]}>Наличие</h2>
          <p className={styles["availabilitySection__subtitle"]}>
            Приложение уже доступно на телефонах
          </p>
        </div>

        <div className={styles["availabilitySection__content"]}>
          <div className={styles["availabilitySection__imageWrapper"]}>
            <img
              className={styles["availabilitySection__image"]}
              src="images/2ip13.png"
              alt="Смартфон с приложением ЗооКлик"
            />
          </div>

          <ul className={styles["availabilitySection__list"]}>
            <li className={styles["availabilitySection__item"]}>
              <div className={styles["availabilitySection__icon"]}>
                <img src="images/icon14.svg" alt="" />
              </div>
              <p className={styles["availabilitySection__text"]}>
                Регистрация и создание профиля пользователя
              </p>
            </li>
            <li className={styles["availabilitySection__item"]}>
              <div className={styles["availabilitySection__icon"]}>
                <img src="images/icon15.svg" alt="" />
              </div>
              <p className={styles["availabilitySection__text"]}>
                Добавление питомцев в профиль пользователя
              </p>
            </li>
            <li className={styles["availabilitySection__item"]}>
              <div className={styles["availabilitySection__icon"]}>
                <img src="images/icon16.svg" alt="" />
              </div>
              <p className={styles["availabilitySection__text"]}>
                Создание тематических объявлений
              </p>
            </li>
            <li className={styles["availabilitySection__item"]}>
              <div className={styles["availabilitySection__icon"]}>
                <img src="images/icon17.svg" alt="" />
              </div>
              <p className={styles["availabilitySection__text"]}>
                Добавление медиа (фото, видео) в профиль пользователя
              </p>
            </li>
            <li className={styles["availabilitySection__item"]}>
              <div className={styles["availabilitySection__icon"]}>
                <img src="images/icon18.svg" alt="" />
              </div>
              <p className={styles["availabilitySection__text"]}>
                Добавление/удаление объявлений из избранного
              </p>
            </li>
            <li className={styles["availabilitySection__item"]}>
              <div className={styles["availabilitySection__icon"]}>
                <img src="images/icon19.svg" alt="" />
              </div>
              <p className={styles["availabilitySection__text"]}>
                Просмотр и комментирование объявлений, в том числе просмотр
                объявлений на карте
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
