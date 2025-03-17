import styles from "./product-section.module.scss";

export default function ProductSection() {
  return (
    <section className={styles["productSection"]} id="product">
      <div className={styles["productSection__container"]}>
        <div className={styles["productSection__content"]}>
          <h2 className={styles["productSection__title"]}>Наш продукт</h2>
          <p className={styles["productSection__subtitle"]}>
            Наше приложение — удобный сервис для общения и помощи животным
          </p>

          <ul className={styles["productSection__list"]}>
            <li className={styles["productSection__item"]}>
              <div className={styles["productSection__icon"]}>
                <img src="images/icon8.svg" alt="Найти пропавшего питомца" />
              </div>
              <p className={styles["productSection__text"]}>
                Найти пропавшего питомца
              </p>
            </li>

            <li className={styles["productSection__item"]}>
              <div className={styles["productSection__icon"]}>
                <img
                  src="images/icon11.svg"
                  alt="Помочь в поисках пропавшего животного"
                />
              </div>
              <p className={styles["productSection__text"]}>
                Помочь в поисках пропавшего животного
              </p>
            </li>

            <li className={styles["productSection__item"]}>
              <div className={styles["productSection__icon"]}>
                <img src="images/icon9.svg" alt="Найти сервисы и абонементы" />
              </div>
              <p className={styles["productSection__text"]}>
                Найти сервис для заботы о мохнатом друге
              </p>
            </li>

            <li className={styles["productSection__item"]}>
              <div className={styles["productSection__icon"]}>
                <img
                  src="images/icon12.svg"
                  alt="Общаться с другими владельцами"
                />
              </div>
              <p className={styles["productSection__text"]}>
                Поделиться с другими фотографиями и видео своего питомца
              </p>
            </li>

            <li className={styles["productSection__item"]}>
              <div className={styles["productSection__icon"]}>
                <img
                  src="images/icon10.svg"
                  alt="Рассказать о своём бизнесе и представить услуги"
                />
              </div>
              <p className={styles["productSection__text"]}>
                Рассказать о своём бизнесе и представить услуги
              </p>
            </li>

            <li className={styles["productSection__item"]}>
              <div className={styles["productSection__icon"]}>
                <img src="images/icon13.svg" alt="Найти новых клиентов" />
              </div>
              <p className={styles["productSection__text"]}>
                Найти новых клиентов
              </p>
            </li>
          </ul>
        </div>

        <div className={styles["productSection__imageWrapper"]}>
          <img
            className={styles["productSection__image"]}
            src="images/ip13.png"
            alt="Приложение ZooКлик"
          />
        </div>
      </div>
    </section>
  );
}
