// import styles from "./mission-section.module.scss";

export default function MissionSection() {
  return (
    <section className="section1" id="about">
      <span>Почему это важно для нас</span>
      <h2>
        Любовь к животным – вот что побудило нас создать проект ЗооКлик и
        разработать мобильное приложение
      </h2>
      <div className="boxs">
        <div className="box">
          <img src="./images/svg1.svg" alt="" />
          <h3>Комочек тепла</h3>
          <p>
            Мы хотим обратить Ваше внимание на то искреннее тепло, которое
            исходит от братьев&nbsp; наших меньших. На тепло, которое согревает
            нас в трудные жизненные моменты
          </p>
        </div>
        <div className="box">
          <img src="./images/svg2.svg" alt="" />
          <h3>Забота о каждом</h3>
          <p>
            Мы переживаем за судьбу каждого животного, нашими общими усилиями мы
            сможем осветить проблему каждого найденного или потерявшегося
            животного
          </p>
        </div>
        <div className="box">
          <img src="./images/svg3.svg" alt="" />
          <h3>Бумеранг добра</h3>
          <p>
            Мы будем рады, если Вы поделитесь в нашем приложении фото и видео
            с&nbsp; Вашими питомцами, которые заставят улыбнуться всех
            пользователей приложения - друзей&nbsp;проекта ЗооКлик
          </p>
        </div>
        <div className="box">
          <img src="./images/svg4.svg" alt="" />
          <h3>То, что нас объединяет</h3>
          <p>
            Мы хотим сделать полезный и удобный сервис для всех, кто любит и не
            представляет свою жизнь без животных
          </p>
        </div>
      </div>
      <img src="./images/petcare11.png" alt="" className="floatinglogo" />
    </section>
  );
}
