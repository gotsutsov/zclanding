import styles from "./mission-section.module.scss";

export default function MissionSection() {
  return (
    <section className={styles["missionSection"]} id={"mission"}>
      <div className={styles["missionSection__container"]}>
        <h2 className={styles["missionSection__heading"]}>
          Почему это важно для нас
        </h2>
        <p className={styles["missionSection__subtitle"]}>
          Любовь к животным — вот что побудило нас создать проект ЗооКлик и
          разработать мобильное приложение
        </p>

        <div className={styles["missionSection__cards"]}>
          <article className={styles["missionSection__card"]}>
            <div className={styles["missionSection__icon"]}>
              <img src="images/svg1.svg" alt="Иконка Комочек тепла" />
            </div>
            <h3 className={styles["missionSection__cardTitle"]}>
              Комочек тепла
            </h3>
            <p className={styles["missionSection__cardText"]}>
              Мы хотим обратить Ваше внимание на заботу и внимание, которые
              необходимы каждому питомцу, тепле, которое мы можем подарить
            </p>
          </article>

          <article className={styles["missionSection__card"]}>
            <div className={styles["missionSection__icon"]}>
              <img src="images/svg2.svg" alt="Иконка Забота о каждом" />
            </div>
            <h3 className={styles["missionSection__cardTitle"]}>
              Забота о каждом
            </h3>
            <p className={styles["missionSection__cardText"]}>
              Мы создаём базу, чтобы каждый мог найти подходящего питомца,
              помочь приютам и защитникам животных, рассказывать о важности
              ухода, вакцинации, стерилизации
            </p>
          </article>

          <article className={styles["missionSection__card"]}>
            <div className={styles["missionSection__icon"]}>
              <img src="images/svg3.svg" alt="Иконка Бумеранг добра" />
            </div>
            <h3 className={styles["missionSection__cardTitle"]}>
              Бумеранг добра
            </h3>
            <p className={styles["missionSection__cardText"]}>
              Мы хотим дать возможность приютам и активистам рассказать о своих
              проектах, собирать пожертвования и находить помощь и поддержку
            </p>
          </article>

          <article className={styles["missionSection__card"]}>
            <div className={styles["missionSection__icon"]}>
              <img src="images/svg4.svg" alt="Иконка То, что нас объединяет" />
            </div>
            <h3 className={styles["missionSection__cardTitle"]}>
              То, что нас объединяет
            </h3>
            <p className={styles["missionSection__cardText"]}>
              Мы хотим сделать мир лучше, показать, что забота о питомцах – это
              не только ответственность, но и радость и взаимная любовь. Это то,
              что нас объединяет в проекте ЗооКлик
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
