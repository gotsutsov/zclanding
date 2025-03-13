import "./App.css";

export default function App() {
  return (
    <>
      <header id="home">
        <nav>
          <img src="./images/logo.png" alt="" />
          <a href="javascript:void(0)" className="mobilenav">
            <img src="./images/menu.svg" alt="" onClick="openmenu()" />
          </a>
          <ul className="mobile" id="mobilemenu">
            <li>
              <a href="#home">Главная</a>
            </li>
            <li>
              <a href="#theapp">Приложение</a>
            </li>
            <li>
              <a href="#about">О проекте</a>
            </li>
            <li>
              <a href="#problem">Актуальность</a>
            </li>
            <li>
              <a href="#audience">Аудитория</a>
            </li>

            {/* <li><a href="#benefits">Преимущества</a></li> */}
            <li>
              <a href="#contact">Контакты</a>
            </li>
          </ul>
          <ul className="menu">
            <li>
              <a href="#home">Главная</a>
            </li>
            <li>
              <a href="#theapp">Приложение</a>
            </li>
            <li>
              <a href="#about">О проекте</a>
            </li>
            <li>
              <a href="#problem">Актуальность</a>
            </li>
            <li>
              <a href="#audience">Аудитория</a>
            </li>

            {/* <li><a href="#benefits">benefits</a></li> */}
            <li>
              <a href="#contact">Контакты</a>
            </li>
          </ul>

          {/* <ul class="social" style="display:none">
                <li><a href="#"><img src="./images/fb.svg" alt=""></a></li>
                <li><a href="#"><img src="./images/ig.svg" alt=""></a></li>
                <li><a href="#"><img src="./images/tw.svg" alt=""></a></li>
            </ul> */}
        </nav>
        <p className="topp">Делать добро - просто!</p>
        <h1>Социальный проект для любителей животных</h1>
        <div className="buttons">
          <p>Скачать приложение</p>
          <a
            target="_blank"
            href="https://redirect.appmetrica.yandex.com/serve/965008352398629561"
          >
            <img src="./images/google.png" alt="" />
          </a>
          <a
            target="_blank"
            href="https://redirect.appmetrica.yandex.com/serve/748835575452230211"
          >
            <img src="./images/apple.png" alt="" />
          </a>
        </div>
        <div className="bottomimg">
          <img src="./images/petcare11.png" alt="" />
        </div>
        <img src="./images/toppet.png" alt="" className="floatinglogo" />
      </header>
    </>
  );
}
