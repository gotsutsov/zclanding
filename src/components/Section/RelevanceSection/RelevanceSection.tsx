import styles from "./relevance-section.module.scss";

export default function RelevanceSection() {
  return (
    <section className={styles["relevanceSection"]}>
      <div className={styles["relevanceSection__container"]}>
        <div className={styles["relevanceSection__content"]}>
          <h2 className={styles["relevanceSection__title"]}>
            Актуальность проекта
          </h2>
          <p className={styles["relevanceSection__highlight"]}>
            Число домашних животных в России выросло на 12,1 млн, или на 23%, за
            последние три года*
          </p>
          <p className={styles["relevanceSection__text"]}>
            Эти цифры говорят о том, что создание универсального приложения для
            любителей животных будет полезно как самим животным, так и их
            владельцам, а также приютам, волонтёрам и ветклиникам. В этом вам
            поможет наше приложение ЗооКлик!
          </p>
        </div>

        <div className={styles["relevanceSection__stats"]}>
          <div className={styles["relevanceSection__statItem"]}>
            <div className={styles["relevanceSection__statIcon"]}>
              <img src="images/icon1.svg" alt="Иконка кота" />
            </div>
            <h3 className={styles["relevanceSection__statValue"]}>3 место</h3>
            <p className={styles["relevanceSection__statLabel"]}>
              В мире занимает Россия по числу кошек
            </p>
          </div>

          <div className={styles["relevanceSection__statItem"]}>
            <div className={styles["relevanceSection__statIcon"]}>
              <img src="images/icon2.svg" alt="Иконка собаки" />
            </div>
            <h3 className={styles["relevanceSection__statValue"]}>4 место</h3>
            <p className={styles["relevanceSection__statLabel"]}>
              В мире занимает Россия по числу собак
            </p>
          </div>

          <div className={styles["relevanceSection__statItem"]}>
            <div className={styles["relevanceSection__statIcon"]}>
              <img src="images/icon3.svg" alt="Иконка приюта" />
            </div>
            <h3 className={styles["relevanceSection__statValue"]}>200 тыс</h3>
            <p className={styles["relevanceSection__statLabel"]}>
              Питомцев пропадает в год в РФ
            </p>
          </div>

          <div className={styles["relevanceSection__statItem"]}>
            <div className={styles["relevanceSection__statIcon"]}>
              <img src="images/icon4.svg" alt="Иконка животных" />
            </div>
            <h3 className={styles["relevanceSection__statValue"]}>650 тыс</h3>
            <p className={styles["relevanceSection__statLabel"]}>
              Бездомных животных находятся в приютах России
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
