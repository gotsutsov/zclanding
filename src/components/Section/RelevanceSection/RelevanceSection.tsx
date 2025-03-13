// import styles from "./relevance-section.module.scss";

export default function RelevanceSection() {
  return (
    <section className="section2" id="problem">
      <div className="text">
        <span>Актуальность проекта</span>
        <h2>
          Число домашних животных в России выросло на 12,1 млн, или на 23%, за
          последние три года*
        </h2>
        <p>
          Все эти цифры говорят о том, что создание универсального приложения
          для любителей животных будет полезно как самим животным, нуждающимся в
          помощи, так и людям, находящимся в поисках «усатого члена семьи» или
          верного друга.
          {/* <br><br>  */}В этом Вам поможет наше приложение ЗооКлик!
        </p>
      </div>
      <div className="boxs">
        <div className="box">
          <img src="./images/icon1.svg" alt="" />
          <h3>3 место</h3>
          <p>В мире занимает Россия по числу кошек</p>
        </div>
        <div className="box">
          <img src="./images/icon2.svg" alt="" />
          <h3>4 место</h3>
          <p>В мире занимает Россия по числу собак</p>
        </div>
        <div className="box">
          <img src="./images/icon3.svg" alt="" />
          <h3>200 тысяч</h3>
          <p>Питомцев пропадает в год в РФ</p>
        </div>
        <div className="box">
          <img src="./images/icon4.svg" alt="" />
          <h3>650 тысяч</h3>
          <p>Бездомных животных находятся в приютах России</p>
        </div>
      </div>
      <img className="floatinglogo" src="./images/petcare11.png" alt="" />
    </section>
  );
}
