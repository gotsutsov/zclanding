import iconFindPet from "/images/iconFindPet.svg";
import iconHelpSearch from "/images/iconHelpSearch.svg";
import iconServices from "/images/iconServices.svg";
import iconShare from "/images/iconShare.svg";
import iconBusiness from "/images/iconBusiness.svg";
import iconClients from "/images/iconClients.svg";
import appImage from "/images/appImage.png";

import styles from "./product-section.module.scss";

export default function ProductSection() {
  return (
    <section className={styles["product-section"]} id="product">
      <div className={styles["product-section__container"]}>
        <div className={styles["product-section__content"]}>
          <div className={styles["product-section__title-wrapper"]}>
            <h2 className={styles["product-section__title"]}>Наш продукт</h2>
            <h3 className={styles["product-section__subtitle"]}>
              Наше приложение — удобный сервис для общения и помощи животным
            </h3>
          </div>

          <ul className={styles["product-section__list"]}>
            <li className={styles["product-section__item"]}>
              <div className={styles["product-section__icon"]}>
                <img
                  src={iconFindPet}
                  width={93}
                  height={92}
                  alt="Найти пропавшего питомца"
                />
              </div>
              <p className={styles["product-section__text"]}>
                Найти пропавшего питомца
              </p>
            </li>

            <li className={styles["product-section__item"]}>
              <div className={styles["product-section__icon"]}>
                <img
                  src={iconHelpSearch}
                  width={93}
                  height={92}
                  alt="Помочь в поисках пропавшего животного"
                />
              </div>
              <p className={styles["product-section__text"]}>
                Помочь в поисках пропавшего животного
              </p>
            </li>

            <li className={styles["product-section__item"]}>
              <div className={styles["product-section__icon"]}>
                <img
                  src={iconServices}
                  width={93}
                  height={92}
                  alt="Найти сервисы и абонементы"
                />
              </div>
              <p className={styles["product-section__text"]}>
                Найти сервис для заботы о мохнатом друге
              </p>
            </li>

            <li className={styles["product-section__item"]}>
              <div className={styles["product-section__icon"]}>
                <img
                  src={iconShare}
                  width={93}
                  height={92}
                  alt="Общаться с другими владельцами"
                />
              </div>
              <p className={styles["product-section__text"]}>
                Поделиться с другими фотографиями и видео своего питомца
              </p>
            </li>

            <li className={styles["product-section__item"]}>
              <div className={styles["product-section__icon"]}>
                <img
                  src={iconBusiness}
                  width={93}
                  height={92}
                  alt="Рассказать о своём бизнесе и представить услуги"
                />
              </div>
              <p className={styles["product-section__text"]}>
                Рассказать о своём бизнесе и представить услуги
              </p>
            </li>

            <li className={styles["product-section__item"]}>
              <div className={styles["product-section__icon"]}>
                <img
                  src={iconClients}
                  width={93}
                  height={92}
                  alt="Найти новых клиентов"
                />
              </div>
              <p className={styles["product-section__text"]}>
                Найти новых клиентов
              </p>
            </li>
          </ul>
        </div>

        <div className={styles["product-section__image-wrapper"]}>
          <img
            className={styles["product-section__image"]}
            src={appImage}
            alt="Приложение ЗооКлик"
          />
        </div>
      </div>
    </section>
  );
}
