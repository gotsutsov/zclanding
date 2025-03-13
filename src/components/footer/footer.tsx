export default function Footer() {
  return (
    <footer className="section10" id="contact">
      <div className="back"></div>
      <div className="container">
        <img className="topimg" src="./images/image3.png" alt="" />
        <span>Как с нами связаться</span>
        {/* <h2></h2> */}
        <p>
          Мы будем рады любой обратной связи от вас – можете делиться своим
          опытом использования приложения, с кем или с чем удалось познакомиться
          благодаря нему
        </p>
        {/* <p>Также можете предлагать свои идеи для развития социальной сети и писать о том, чего, на ваш взгляд, сейчас не хватает</p> */}
        <div className="buttons">
          <a href="#">
            <img src="./images/google.png" alt="" />
          </a>
          <a href="#">
            <img src="./images/apple.png" alt="" />
          </a>
        </div>
        <div className="buttons">
          <p>
            <a
              href="https://zoo-click.com/documents/user_agreement.pdf"
              target="_blank"
              // style="font-size: 12px"
            >
              Пользовательское соглашение
            </a>
            <a
              href="https://zoo-click.com/documents/personal_data.pdf"
              target="_blank"
              // style="font-size: 12px"
            >
              Соглашение об обработке персональных данных
            </a>
            <a
              href="https://zoo-click.com/documents/offer.pdf"
              target="_blank"
              // style="font-size: 12px"
            >
              Оферта
            </a>
            <a
              href="https://zoo-click.com/documents/paid_services.pdf"
              target="_blank"
              // style="font-size: 12px"
            >
              Описание платных услуг
            </a>
          </p>
        </div>
        <div className="box">
          <div className="i">
            <div className="icon">
              <img src="./images/mail.svg" alt="" />
            </div>
            <div className="text">
              <p>Email</p>
              <p>info@zoo-click.com</p>
            </div>
          </div>
          <div className="i">
            <div className="icon">
              <img src="./images/phone.svg" alt="" />
            </div>
            <div className="text">
              <p>Телефон</p>
              <p>88004443484</p>
            </div>
          </div>
        </div>
      </div>
      <span className="copyr">© 2024 Сервис Клик</span>
      <span className="copyr">ОГРН:1227700230284 ИНН: 9729322644</span>
      <span
        className="copyr"
        // style="font-size:1.2rem"
      >
        © 2024 Тарасов Александр Викторович Фотограф с 20 летним стажем
        Сотрудничество с журналами «Лиза», «Гороскоп», Женское здоровье»,
        «Стар-Хит», «Самая», «Magazine», тесное сотрудничество с «Аква Марис» и
        «Велком»
      </span>
    </footer>
  );
}
