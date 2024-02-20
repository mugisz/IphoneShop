import axios from "axios";

import "../productWhichPage/productMain.scss";
import { Link } from "react-router-dom";
import ListProduct from "../cardSection/ListProduct";
import React from "react";
const Ipad = ({ setBuy, SetBusket }) => {
  //   const card = [

  //     {
  //       id: 71,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/909.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/912.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/899.jpg",
  //       smalImg4: "https://i-point.ru/storage/gallery/big/901.jpg",
  //       img: "https://i-point.ru/storage/item/main/498.jpg",
  //       name: "Apple iPad 2021 Wi-Fi 64Gb Серый Космос ",
  //       price: "24990",
  //     },
  //     {
  //       id: 73,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/907.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/911.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/899.jpg",
  //       smalImg4: "https://i-point.ru/storage/gallery/big/901.jpg",
  //       img: "https://i-point.ru/storage/item/main/761.jpg",
  //       name: "Apple iPad 2021 Wi-Fi 64Gb Серебристый",
  //       price: "24990",
  //     },
  //     {
  //       id: 74,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/909.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/912.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/899.jpg",
  //       smalImg4: "https://i-point.ru/storage/gallery/big/901.jpg",
  //       img: "https://i-point.ru/storage/item/main/498.jpg",
  //       name: "Apple iPad 2021 Wi-Fi+Cellular 64Gb Серый Космос",
  //       price: "32990",
  //     },
  //     {
  //       id: 72,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/907.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/911.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/899.jpg",
  //       smalImg4: "https://i-point.ru/storage/gallery/big/901.jpg",
  //       img: "https://i-point.ru/storage/item/main/761.jpg",
  //       name: "Apple iPad 2021 Wi-Fi+Cellular 64Gb Серебристый ",
  //       price: "32990",
  //     },

  //     {
  //       id: 76,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/2667.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/2648.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/2649.jpg",
  //       smalImg4: "https://i-point.ru/storage/gallery/big/2650.jpg",
  //       img: " https://i-point.ru/storage/item/main/1334.jpg",
  //       name: "Apple iPad 2022 Wi-Fi 64Gb Серебристый",
  //       price: "33990",
  //     },
  //     {
  //       id: 77,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/909.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/912.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/899.jpg",
  //       smalImg4: "https://i-point.ru/storage/gallery/big/901.jpg",
  //       img: "https://i-point.ru/storage/item/main/498.jpg",
  //       name: "Apple iPad 2021 Wi-Fi 256Gb Серый Космос ",
  //       price: "37990",
  //     },
  //     {
  //       id: 78,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/907.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/911.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/899.jpg",
  //       smalImg4: "https://i-point.ru/storage/gallery/big/901.jpg",
  //       img: "https://i-point.ru/storage/item/main/761.jpg",
  //       name: "Apple iPad 2021 Wi-Fi 256Gb Серебристый",
  //       price: "37990",
  //     },

  //     {
  //       id: 92,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/1994.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/1993.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/1992.jpg",
  //       smalImg4: "https://i-point.ru/storage/gallery/big/1991.jpg",
  //       img: "https://i-point.ru/storage/item/main/1079.jpg",
  //       name: "Apple iPad Air 2022 Wi-Fi 64Gb Синий",
  //       price: "45990",
  //     },
  //     {
  //       id: 97,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/1995.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/1993.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/1992.jpg",
  //       smalImg4: "https://i-point.ru/storage/gallery/big/1991.jpg",
  //       img: "https://i-point.ru/storage/item/main/1081.jpg",
  //       name: "Apple iPad Air 2022 Wi-Fi 64Gb Розовый",
  //       price: "45990",
  //     },
  //     {
  //       id: 98,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/1997.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/1993.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/1992.jpg",
  //       smalImg4: "https://i-point.ru/storage/gallery/big/1991.jpg",
  //       img: "https://i-point.ru/storage/item/main/1085.jpg",
  //       name: "Apple iPad Air 2022 Wi-Fi 64Gb Cияющая звезда",
  //       price: "45990",
  //     },

  //     {
  //       id: 99,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/2666.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/2544.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/2545.jpg",
  //       smalImg4: "https://i-point.ru/storage/gallery/big/2546.jpg",
  //       img: "https://i-point.ru/storage/item/main/1309.jpg",
  //       name: "Apple iPad Pro 2022 11 Wi-Fi 128Gb Серебристый",
  //       price: "67990",
  //     },
  //     {
  //       id: 100,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/2651.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/2544.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/2545.jpg",
  //       smalImg4: "https://i-point.ru/storage/gallery/big/2546.jpg",
  //       img: "https://i-point.ru/storage/item/main/1314.jpg",
  //       name: "Apple iPad Pro 2022 11 Wi-Fi 128Gb Серый космос",
  //       price: "67990",
  //     },

  //     {
  //       id: 103,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/2597.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/2648.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/2649.jpg",
  //       smalImg4: "https://i-point.ru/storage/gallery/big/2650.jpg",
  //       img: "https://i-point.ru/storage/item/main/1332.jpg",
  //       name: "Apple iPad 2022 Wi-Fi 64Gb Розовый",
  //       price: "29990",
  //     },
  //     {
  //       id: 104,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/2597.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/2648.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/2649.jpg",
  //       smalImg4: "https://i-point.ru/storage/gallery/big/2650.jpg",
  //       img: "https://i-point.ru/storage/item/main/1336.jpg",
  //       name: "Apple iPad 2022 Wi-Fi 64Gb Жёлтый ",
  //       price: "29990",
  //     },

  //     {
  //       id: 101,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/2542.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/2544.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/2545.jpg",
  //       smalImg4: "https://i-point.ru/storage/gallery/big/2546.jpg",
  //       img: "https://i-point.ru/storage/item/main/1309.jpg",
  //       name: "Apple iPad Pro 2022 11 Wi-Fi 256Gb Серебристый",
  //       price: "72990",
  //     },
  //     {
  //       id: 102,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/2597.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/2544.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/2545.jpg",
  //       smalImg4: "https://i-point.ru/storage/gallery/big/2546.jpg",
  //       img: "https://i-point.ru/storage/item/main/1314.jpg",
  //       name: "Apple iPad Pro 2022 11 Wi-Fi 256Gb Серый космос",
  //       price: "72990",
  //     },

  //     {
  //       id: 101,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/2542.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/2544.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/2545.jpg",
  //       smalImg4: "https://i-point.ru/storage/gallery/big/2546.jpg",
  //       img: "https://i-point.ru/storage/item/main/1309.jpg",
  //       name: "Apple iPad Pro 2022 11 Wi-Fi Wi-Fi + Cellular 128Gb Серебристый",
  //       price: "81990",
  //     },
  //     {
  //       id: 102,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/2597.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/2544.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/2545.jpg",
  //       smalImg4: "https://i-point.ru/storage/gallery/big/2546.jpg",
  //       img: "https://i-point.ru/storage/item/main/1314.jpg",
  //       name: "Apple iPad Pro 2022 11 Wi-Fi Wi-Fi + Cellular 128Gb Серый космос",
  //       price: "81990",
  //     },
  //   ];
  const [card, Setcard] = React.useState([]);
  React.useEffect(() => {
    const getIpad = async () => {
      const { data } = await axios.get("http://localhost:3001/ipad");
      Setcard(data);
      return data;
    };

    getIpad();
  });
  return (
    <section className="default_for_buy">
      <div className="container">
        <div className="description_top_block">
          <p>
            <Link to="/">Головна</Link> <span className="trans">> AirPods</span>
          </p>
          <p className="buyDesc">
            Купити <span className="red">iPad</span>
          </p>
        </div>

        <div className="iphone_flexCard">
          {card.map((c) => (
            <ListProduct
              smalImg1={c.smalImg1}
              smalImg4={c.smalImg4}
              smalImg3={c.smalImg3}
              smalImg2={c.smalImg2}
              SetBusket={SetBusket}
              id={c.id}
              count={c.count}
              setBuy={setBuy}
              img={c.img}
              name={c.name}
              price={c.price}
            />
          ))}
        </div>
        <div className="botom">
          <h1>Купити Apple iPad </h1>
          <p>
            {" "}
            iPad від компанії Apple є планшетом, який завоював довіру
            користувачів по всьому світу. Відомі екрани Retina, відмінна камера
            і висока продуктивність - все це робить привабливою будь-яку модель
            планшета. У нашому інтернет-магазині ви можете купити iPad за
            вигідними умовами.
          </p>
          <h1>Багатофункціональний гаджет</h1>
          <p>
            iPad віддають перевагу використовувати бізнесмени, які не уявляють
            життя без пошти, Інтернету, нотаток і планувальника завдань. Він
            буде корисним як засіб для розваг: в AppStore ви знайдете безліч
            захоплюючих ігор і додатків. iPad використовують музиканти,
            професіонали і новачки: є такі програми, як Garage Band, iMPC.
            Школярі та студенти читають доповіді саме з планшетів. Представникам
            фірм iPad допомагає в публічних виступах.
          </p>
          <h1>iOS: постійно розвиваючася система</h1>
          <p>
            На Айпад встановлена система iOS, яку багато користувачів вважають
            найшвидшою. Для передачі даних з комп'ютера потрібна програма
            iTunes: потрібний контент завжди опиниться на вашому iPad. Саме для
            iOS випускається велика кількість додатків. А регулярні оновлення
            системи роблять її більш швидкою і функціональною.
          </p>
          <h1>Ціна iPad</h1>
          <p>
            Наш інтернет-магазин спеціалізується на продажу ноутбуків і
            моноблочних комп'ютерів виробництва компанії Apple. Вирішуючи
            зробити покупку нового пристрою саме у нас, ви отримуєте максимум
            переваг у вигляді розумної цінової політики, офіційної гарантії
            Apple і відсутності необхідності довго чекати свого замовлення.
            Отримати додаткову інформацію та зробити замовлення ви можете за
            телефоном або додавши товар у кошик і залишивши заявку прямо на
            сайті інтернет-магазину.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Ipad;
