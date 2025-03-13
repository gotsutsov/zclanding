// import styles from "./benefits-section.module.scss";

export default function BenefitsSection() {
  return (
    <section className="section4" id="benefits">
      <div className="fet">
        <img src="./images/f1.svg" alt="" />
      </div>
      <div className="fet">
        <img src="./images/f2.svg" alt="" />
      </div>
      <div className="background"></div>
      <span>Преимущества</span>
      <h2>
        Уникальная функция приложения – возможность поиска пропавших животных
      </h2>
      <div className="buttons">
        <a
          href="javascript:void(0)"
          id="btn1"
          //onclick="change1()"
        >
          <div id="tip1" className="tip"></div>
          <img src="./images/buttonicon.svg" alt="" />
          Владельцы питомцев
        </a>
        <a
          href="javascript:void(0)"
          id="btn2"
          // onclick="change2()"
        >
          <div id="tip2" className="tip nontip"></div>
          <img src="./images/buttonicon2.svg" alt="" />
          Для бизнеса
        </a>
      </div>
      <div id="cont1" className="container">
        <div className="backimg">
          <div className="back"></div>
          <img src="./images/image.png" alt="" />
        </div>

        <ul>
          <li>
            <div className="check"></div>
            <p>Спокойствие за своего питомца</p>
          </li>
          <li>
            <div className="check"></div>
            <p>
              Радость от разделения опыта по воспитанию четырехлапого члена
              семьи
            </p>
          </li>
          <li>
            <div className="check"></div>
            <p>
              Экономия времени и денег при поиске новых товаров рядом с домом
            </p>
          </li>
          <li>
            <div className="check"></div>
            <p>Посещение новых мест для питомцев</p>
          </li>
          <li>
            <div className="check"></div>
            <p>Общение с единомышленниками</p>
          </li>
        </ul>
      </div>
      <div id="cont2" className="container">
        <div className="backimg">
          <div className="back"></div>
          <img src="./images/image.png" alt="" />
        </div>

        <ul>
          <li>
            <div className="check"></div>
            <p>&nbsp;</p>
          </li>
          <li>
            <div className="check"></div>
            <p>&nbsp;</p>
          </li>
          <li>
            <div className="check"></div>
            <p>&nbsp;</p>
          </li>
          <li>
            <div className="check"></div>
            <p>&nbsp;</p>
          </li>
          <li>
            <div className="check"></div>
            <p>&nbsp;</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
