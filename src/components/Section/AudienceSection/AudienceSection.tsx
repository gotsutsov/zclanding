import styles from "./audience-section.module.scss";

export default function AudienceSection() {
  return (
    <section className={styles["audienceSection"]} id="audience">
      <div className={styles["audienceSection__container"]}>
        <div className={styles["audienceSection__title-wrapper"]}>
          <h2 className={styles["audienceSection__title"]}>
            Для кого наш проект
          </h2>
          <h3 className={styles["audienceSection__subtitle"]}>
            Наша целевая аудитория довольна широка и включает всех, кто имеет
            питомцев или взаимодействует с ними
          </h3>
        </div>

        <div className={styles["audienceSection__groups"]}>
          <div className={styles["audienceSection__group"]}>
            <div className={styles["audienceSection__icon"]}>
              <img
                src="images/icon5.svg"
                width={84}
                height={86}
                alt="Владельцы питомцев"
              />
            </div>
            <p className={styles["audienceSection__groupText"]}>
              Владельцы домашних питомцев, просто неравнодушные люди
            </p>
          </div>

          <div className={styles["audienceSection__group"]}>
            <div className={styles["audienceSection__icon"]}>
              <img
                src="images/icon6.svg"
                width={87}
                height={65}
                alt="Компании"
              />
            </div>
            <p className={styles["audienceSection__groupText"]}>
              Компании, предоставляющие товары и услуги для животных
            </p>
          </div>

          <div className={styles["audienceSection__group"]}>
            <div className={styles["audienceSection__icon"]}>
              <img
                src="images/icon7.svg"
                width={79}
                height={81}
                alt="Благотворительные фонды"
              />
            </div>
            <p className={styles["audienceSection__groupText"]}>
              Благотворительные фонды, приюты, зоозащитники
            </p>
          </div>
        </div>

        <div className={styles["audienceSection__bottom"]}>
          <div className={styles["audienceSection__image-wrapper"]}>
            <img
              className={styles["audienceSection__image"]}
              src="images/buba.avif"
              width={616}
              height={495.88}
              alt="Владелец питомца с собакой"
              loading="lazy"
            />
          </div>

          <div className={styles["audienceSection__goals"]}>
            <div className={styles["audienceSection__goal"]}>
              <h3 className={styles["audienceSection__goalTitle"]}>
                Наша цель
              </h3>
              <p className={styles["audienceSection__goalText"]}>
                Объединить любителей животных
              </p>
            </div>

            <div className={styles["audienceSection__implementation"]}>
              <h3 className={styles["audienceSection__implementationTitle"]}>
                Реализация
              </h3>
              <p className={styles["audienceSection__implementationText"]}>
                Благодаря приложению владельцы питомцев смогут делиться своими
                секретами их ухода и воспитания, советовать друг другу
                заведения, в которых понравилось их мохнатым друзьям.
              </p>
              <p className={styles["audienceSection__implementationText"]}>
                А организации, в свою очередь, могут получить как новых лояльных
                покупателей, так и волонтеров, готовых помочь в различных
                вопросах.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
