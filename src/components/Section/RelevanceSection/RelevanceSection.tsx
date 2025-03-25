import styles from "./relevance-section.module.scss";

export default function RelevanceSection() {
  return (
    <section className={styles["relevanceSection"]} id={"relevance"}>
      <div className={styles["relevanceSection__container"]}>
        <div className={styles["relevanceSection__title-wrapper"]}>
          <h2 className={styles["relevanceSection__title"]}>
            Актуальность проекта
          </h2>
          <h3 className={styles["relevanceSection__subtitle"]}>
            Число домашних животных в России выросло на 12,1 млн, или на 23%, за
            последние три года*
          </h3>
          <p className={styles["relevanceSection__text"]}>
            Все эти цифры говорят о том, что создание универсального приложения
            для любителей животных будет полезно как самим животным, нуждающимся
            в помощи, так и людям, находящимся в поисках «усатого члена семьи»
            или верного друга.
          </p>
          <p className={styles["relevanceSection__text"]}>
            В этом Вам поможет наше приложение ЗооКлик!
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
            <h3 className={styles["relevanceSection__statValue"]}>200 тысяч</h3>
            <p className={styles["relevanceSection__statLabel"]}>
              Питомцев пропадает в год в РФ
            </p>
          </div>

          <div className={styles["relevanceSection__statItem"]}>
            <div className={styles["relevanceSection__statIcon"]}>
              <img src="images/icon4.svg" alt="Иконка животных" />
            </div>
            <h3 className={styles["relevanceSection__statValue"]}>650 тысяч</h3>
            <p className={styles["relevanceSection__statLabel"]}>
              Бездомных животных находятся в приютах России
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
