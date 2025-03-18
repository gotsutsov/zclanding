import styles from "./availability-section.module.scss";

export default function AvailabilitySection() {
  return (
    <section className={styles["availabilitySection"]}>
      <div className={styles["availabilitySection__container"]}>
        <h2 className={styles["availabilitySection__title"]}>
          Приложение уже доступно на телефонах
        </h2>

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
                Добавление медиа (фото, видео) в профиль пользователя
              </p>
            </li>
            <li className={styles["availabilitySection__item"]}>
              <div className={styles["availabilitySection__icon"]}>
                <img src="images/icon17.svg" alt="" />
              </div>
              <p className={styles["availabilitySection__text"]}>
                Создание тематических сообществ, включающих комментарии,
                медиа-материалы и другие инструменты
              </p>
            </li>
            <li className={styles["availabilitySection__item"]}>
              <div className={styles["availabilitySection__icon"]}>
                <img src="images/icon18.svg" alt="" />
              </div>
              <p className={styles["availabilitySection__text"]}>
                Публикация и удаление объявлений
              </p>
            </li>
            <li className={styles["availabilitySection__item"]}>
              <div className={styles["availabilitySection__icon"]}>
                <img src="images/icon19.svg" alt="" />
              </div>
              <p className={styles["availabilitySection__text"]}>
                Просмотр и комментирование объявлений, а также отслеживание их
                на карте
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
