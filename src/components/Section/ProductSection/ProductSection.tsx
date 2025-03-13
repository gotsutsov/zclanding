// import styles from "./product-section.module.scss";

export default function ProductSection() {
  return (
    <section className="section5" id="theapp">
      <span>Наш продукт</span>
      <h2>Наше приложение – удобный сервис для общения и помощи животным</h2>
      <div className="boxs">
        <div className="boxs">
          <div className="box">
            <img src="./images/icon8.svg" alt="" />
            <p>Найти потерявшегося питомца</p>
          </div>
          <div className="box">
            <img src="./images/icon9.svg" alt="" />
            <p>Найти сервис для заботы о мохнатом друге</p>
          </div>
          <div className="box">
            <img src="./images/icon10.svg" alt="" />
            <p>Рассказать о своем бизнесе и предоставить услуги</p>
          </div>
        </div>
        <div className="boxs">
          <div className="box">
            <img src="./images/icon11.svg" alt="" />
            <p>Помочь в поисках пропавшего животного</p>
          </div>
          <div className="box">
            <img src="./images/icon12.svg" alt="" />
            <p>Поделиться с другими фотографиями и видео своего питомца</p>
          </div>
          <div className="box">
            <img src="./images/icon13.svg" alt="" />
            <p>Найти новых клиентов</p>
          </div>
        </div>
      </div>
      <img className="ipmobile" src="./images/back3_old.png" alt="" />
      <img className="ipdesk" src="./images/ip13.png" alt="" />
      <img src="./images/petcare11.png" alt="" className="floatinglogo" />
    </section>
  );
}
