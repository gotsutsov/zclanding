// import styles from "./availability-section.module.scss";

export default function AvailabilitySection() {
  return (
    <section className="section6">
      <h2>Приложение уже доступно на телефонах</h2>
      <div className="boxs">
        <div className="box">
          <img src="./images/icon14.svg" alt="" />
          <p>Регистрация и создание профиля пользователя</p>
        </div>
        <div className="box">
          <img src="./images/icon17.svg" alt="" />
          <p>Добавление медиа (фото, видео) в профиль пользователя</p>
        </div>
        <div className="box">
          <img src="./images/icon15.svg" alt="" />
          <p>Добавление питомцев в профиль пользователя</p>
        </div>
        <div className="box">
          <img src="./images/icon18.svg" alt="" />
          <p>Добавление/удаление объявлений в (из) избранное</p>
        </div>
        <div className="box">
          <img src="./images/icon16.svg" alt="" />
          <p>
            Создание тематических объявлений, включающих информацию о животном,
            медиа материалы, геолокацию и прочую информацию
          </p>
        </div>
        <div className="box">
          <img src="./images/icon19.svg" alt="" />
          <p>
            Просмотр и комментирование объявлений, в том числе просмотр
            объявлений на карте
          </p>
        </div>

        {/* <div className="box">
        <img src="./images/icon20.svg" alt=""/>
        <p>
        </p>
    </div> */}
      </div>
      <img className="ipmobile" src="./images/back3.png" alt="" />
      <img className="ipdesk" src="./images/2ip13.png" alt="" />
      <img className="floatinglogo" src="./images/petcare11.png" alt="" />
    </section>
  );
}
