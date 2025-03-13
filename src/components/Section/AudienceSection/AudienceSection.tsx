// import styles from "./audience-section.module.scss";

export default function AudienceSection() {
  return (
    <section className="section3" id="audience">
      <span>Для кого наш проект</span>
      <h2>
        Наша целевая аудитория довольна широка и включает всех, кто имеет
        питомцев или взаимодействует с ними
      </h2>
      <div className="boxs non">
        <div className="box">
          <img src="./images/icon5.svg" alt="" />
          <p>Владельцы домашних питомцев, просто неравнодушные люди</p>
        </div>
        <div className="box">
          <img src="./images/icon6.svg" alt="" />
          <p>Компании, предоставляющие товары и услуги для животных</p>
        </div>
        <div className="box">
          <img src="./images/icon7.svg" alt="" />
          <p>Благотворительные фонды, приюты, зоозащитники</p>
        </div>
      </div>
      <div className="flex">
        <img src="./images/box.png" alt="" />
        <div className="text">
          <h3>Наша цель</h3>
          <p>Объединить любителей животных</p>
          <h3>Реализация</h3>
          <p>
            Благодаря приложению владельцы питомцев смогут делиться своими
            секретами их ухода и воспитания, советовать друг другу заведения, в
            которых понравилось их мохнатым друзьям.
          </p>
          <p>
            А организации, в свою очередь, могут получить как новых лояльных
            покупателей, так и волонтеров, готовых помочь в различных вопросах.
          </p>
        </div>
      </div>
      <img src="./images/petcare11.png" alt="" className="floatinglogo" />
    </section>
  );
}
