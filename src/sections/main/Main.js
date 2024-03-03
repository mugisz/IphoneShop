import React from "react";
import "../main/main.scss";
import { Link } from "react-router-dom";
import reward from "../../img/reward.png";
import star from "../../img/Star.webp";
import telegramW from "../../img/telegramW.png";
import instW from "../../img/instW.png";
import whatsappW from "../../img/WhatsappW.png";
import ProductCard from "../cardSection/ProductCard";
import ListProduct from "../cardSection/ListProduct";
import axios from "axios";
const mainCard = [
  {
    price: "Від 18 990грн",
    name: "Apple Iphone",
    cat: "Смартфони",
    img: "https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_15_plus_black_pdp_image_position-1__ww-en.jpg",
  },
  {
    price: "Від 950 грн",
    name: "Apple AirPods",
    cat: "Безпровідні навушники",
    img: "https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/m/t/mtjv3_result.jpg",
  },
  {
    price: "Від 49999грн",
    name: "Apple Mac",
    cat: "Компютери",
    img: "https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/m/b/mba15-spacegray-gallery1-202306_result_1.jpg",
  },
  {
    price: "Від 4999грн",
    name: "Apple Watch",
    cat: "Годиники",
    img: "https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/a/p/apple_watch_ultra_2_cellular_49mm_titanium_beige_orange_trail_loop_pdp_image_position-2__en-us_result.jpg",
  },
  {
    price: "Від 6799 грн",
    name: "Apple Ipad",
    cat: "Планшети",
    img: "https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/ipad-pro-11-select-cell-silver-202210_result_1_1_1_1_1_1_1_1.jpg",
  },
];

const Main = ({ setBuy, SetBusket }) => {
  const [popularCard, Setcard] = React.useState([]);
  React.useEffect(() => {
    const getIpad = async () => {
      const { data } = await axios.get("http://localhost:3001/popularCard");
      Setcard(data);
      return data;
    };

    getIpad();
  });
  return (
    <main>
      <div className="mainBG"></div>
      <div className="container">
        <section className="main_descriptions">
          <h1>
            <span> Оригінальна </span>техніка із США в Україну по самим{" "}
            <span>низькім цінам</span>
          </h1>
        </section>
        <section className="main_title">
          <ul className="main_titles">
            <div className="listMainRewart">
              <img src={reward} className="rewardI" alt="" />
              <li className="titles_desc">
                <span> Доставка </span> по всій Україні
              </li>
            </div>
            <div className="listMainRewart">
              <img src={reward} className="rewardI" alt="" />
              <li className="titles_desc">
                Спеціалізуємося на <span>оригінальних </span> девайсах
              </li>
            </div>{" "}
            <div className="listMainRewart">
              <img src={reward} className="rewardI" alt="" />
              <li className="titles_desc">
                <span> Офіціальна гарантія </span>на всю техніку Apple
              </li>
            </div>
            <div className="listMainRewart">
              <img src={reward} className="rewardI" alt="" />
              <li className="titles_desc">
                <span>Тисячі постійних </span> покупців.
              </li>
            </div>
            <div className="listMainRewart">
              <img src={reward} className="rewardI" alt="" />
              <li className="titles_desc">
                <span>Низькі</span> ціни
              </li>
            </div>
          </ul>
        </section>
      </div>
      <section className="first_productBlock">
        <h1>
          <span>Оригінальна техніка в</span> Istore
        </h1>
        <div className="product_main_block">
          {mainCard.map((m) => (
            <ProductCard
              price={m.price}
              name={m.name}
              cat={m.cat}
              img={m.img}
            />
          ))}
        </div>
      </section>
      <section className="popular_card">
        <h1>Популярні товари</h1>
        <div className="popular_flex">
          {popularCard.map((p) => (
            <ListProduct
              smalImg1={p.smalImg1}
              smalImg4={p.smalImg4}
              smalImg3={p.smalImg3}
              smalImg2={p.smalImg2}
              id={p.id}
              count={p.count}
              SetBusket={SetBusket}
              setBuy={setBuy}
              img={p.img}
              name={p.name}
              price={p.price}
            />
          ))}
        </div>
      </section>
      <section className="reviev">
        <h1>Відгуки</h1>
        <div className="reviev_block">
          <div className="reviev_card">
            <div className="top_revivev_block">
              <img
                src="https://cdn-icons-png.flaticon.com/512/483/483361.png"
                className="ava"
                alt=""
              />
              <div className="top_reviev_text_align">
                <p className="reviev_name">Настя</p>
                <div className="star">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
              </div>
            </div>
            <p className="reviev_bottom">
              Відмінний сервіс, всім рекомендую! Купила собі айфон 14 про, через
              7 днів зі мною зв'язалися та передали товар. Все чудово, товар з
              офіційного Apple магазину за найкращою ціною, бо в мене чоловік
              взяв цей же телефон у Україні у півтора рази дорожче! В наступний
              раз за покупкою Apple техніки звертатимуся саме до вас, якщо apple
              не повернеться на російський ринок
            </p>
          </div>
        </div>
        <div className="reviev_block reviev_second_BG">
          <div className="reviev_card">
            <div className="top_revivev_block">
              <img
                className="ava"
                src="https://cdn-icons-png.flaticon.com/512/3954/3954071.png"
                alt=""
              />
              <div className="top_reviev_text_align">
                <p className="reviev_name">Вікторія</p>
                <div className="star">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
              </div>
            </div>
            <p className="reviev_bottom">
              Ціни просто бомба! Замовила собі макбук, дійшов до моїх рук
              буквально за 12 днів, все просто шикарно! Правда по доставці трохи
              дорогувато, але воно того варте! Адже як кажуть: Зекономлені гроші
              – це зароблені гроші!
            </p>
          </div>
        </div>
        <div className="reviev_block">
          <div className="reviev_card">
            <div className="top_revivev_block">
              <img
                className="ava"
                src="https://cdn-icons-png.flaticon.com/512/3954/3954071.png"
                alt=""
              />
              <div className="top_reviev_text_align">
                <p className="reviev_name">Віктор</p>
                <div className="star">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
              </div>
            </div>
            <p className="reviev_bottom">
              Знайомий перерекомендував цей сервіс, спочатку виглядало все якось
              дивно, тому що оплата відразу + незрозуміло як вони збираються це
              все доставляти, навіть була думка, що друг працює на них і хоче
              мене обдурити) Але в результаті замовив макбук за дуже гарною
              ціною, все передали, взагалі всім задоволений, якщо хочете собі
              ноутбук для роботи - то рекомендую про 16! Але за доставку ціну
              могли і знизити) Але все ж таки це набагато вигідніше, ніж брати
              зараз де небудь в Україні!
            </p>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="footer_topBlock">
            <div className="FTblocks">
              <p className="first_desc">
                <span>Apple</span> Iphone
              </p>
              <p className="fot_hov_ef">
                <Link to="/iphone"> Iphone 14 pro max</Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/iphone">Iphone 14</Link>{" "}
              </p>
              <p className="fot_hov_ef">
                <Link to="/iphone">Iphone 13</Link> pro max
              </p>
              <p className="fot_hov_ef">
                <Link to="/iphone">Iphone 13 </Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/iphone">Iphone 12 pro max</Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/iphone">Iphone 12 </Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/iphone">Iphone 11 pro max</Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/iphone">Iphone 11 </Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/iphone">Iphone Xs </Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/iphone">Iphone Xr </Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/iphone">Iphone X </Link>
              </p>
            </div>
            <div className="FTblocks">
              <p className="first_desc">
                <span>Apple</span> Watch
              </p>
              <p className="fot_hov_ef">
                <Link to="/iphone">Watch Ultra</Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/iphone">Watch Series 8 </Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/iphone">Watch SE 2022</Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/iphone">Watch SE </Link>
              </p>
            </div>
            <div className="FTblocks">
              <p className="first_desc">
                <span>Apple</span> Mac
              </p>
              <p className="fot_hov_ef">
                <Link to="/mac">MacBook Air(M2,2022)</Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/mac">MacBook Pro 13(M2,2022)</Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/mac">MacBook Pro 2021</Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/mac">MacBook Air(M2,2020)</Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/mac">MacBook Pro(M2,2022) </Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/mac">iMac 24(2021)</Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/mac">Mac mini </Link>
              </p>
            </div>
            <div className="FTblocks">
              <p className="first_desc">
                <span>Apple</span> Ipad
              </p>
              <p className="fot_hov_ef">
                <Link to="/Ipad">Ipad Pro 2022</Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/Ipad">Ipad Air 2022 </Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/Ipad">Ipad 2022</Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/Ipad">Ipad Pro 2021 </Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/Ipad">Ipad Air 2021</Link>
              </p>
              <p className="fot_hov_ef">
                <Link to="/Ipad">Ipad mini 2021 </Link>
              </p>
            </div>
          </div>
          <div className="footer_contactBlock">
            <div className="footer_contacts">
              <img src={telegramW} alt="" />

              <a href="https://t.me/dostavkaapple">Наш Telegram</a>
            </div>
            <div className="footer_contacts">
              <img src={instW} alt="" />

              <a href="https://www.instagram.com/i.stor.delivery/?igshid=YmMyMTA2M2Y%3D">
                Наш Instagram
              </a>
            </div>
            <div className="footer_contacts">
              <img src={whatsappW} alt="" />

              <a href="https://www.instagram.com/i.stor.delivery/?igshid=YmMyMTA2M2Y%3D">
                Наш Whatsapp
              </a>
            </div>
          </div>
          <section className="lastPR">
            <p>
              <span>I</span>store.<span>uk</span>
            </p>
          </section>
        </div>
      </footer>
    </main>
  );
};
export default Main;
