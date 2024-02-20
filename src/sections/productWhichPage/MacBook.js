import React from "react";
import "../productWhichPage/productMain.scss";
import { Link } from "react-router-dom";
import ListProduct from "../cardSection/ListProduct";
import axios from "axios";
const MacBook = ({ setBuy, SetBusket }) => {
  //   const card = [
  //     {
  //       id: 71,
  //       count: 1,
  //       smalImg1:
  //         "https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwru_macbook-air_q121_silver_pdp-image-1_1.jpg",
  //       smalImg2:
  //         "https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwru_macbook-air_q121_silver_pdp-image-5_1.jpg",
  //       smalImg3:
  //         "https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwru_macbook-air_q121_silver_pdp-image-2_1.jpg",
  //       img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSn2mXjyMcnTF1i91atLGSMoKje8ZkfnxsSzWAq4tKejjcXQXBbhu2z3l8nVQ3b0Xamu4N9McjTFPigN4f6S-nP98eLtbKAPN5lQbG5UQ0IeVxfimFiEURSvR6OZscy&usqp=CAc",
  //       name: "Apple MacBook Pro 2022 13 M2 8Gb/256Gb Серый космос",
  //       price: "101990",
  //     },
  //     {
  //       id: 73,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/3074.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/3075.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/3075.jpg",
  //       img: "https://i-point.ru/storage/item/main/1153.jpg",
  //       name: "Apple MacBook Air 2022 13 8Gb/512Gb Серебристый",
  //       price: "121990",
  //     },
  //     {
  //       id: 74,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/3086.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/3087.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/3088.jpg",
  //       img: "https://i-point.ru/storage/item/main/1128.jpg",
  //       name: "Apple MacBook Air 2022 13 8Gb/256Gb Серый космос ",
  //       price: "94990",
  //     },
  //     {
  //       id: 72,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/611.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/612.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/613.jpg",
  //       img: "https://i-point.ru/storage/item/main/574.jpg",
  //       name: "Apple MacBook Air 2020 13 М1 8Gb/256Gb Серый космос (MGN63/A)",
  //       price: "77990",
  //     },

  //     {
  //       id: 76,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/665.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/666.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/667.jpg",
  //       img: "https://i-point.ru/storage/item/main/592.jpg",
  //       name: "Apple Mac mini M1, 2020 8Gb/512Gb (MGNT3)",
  //       price: "80990",
  //     },
  //     {
  //       id: 77,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/1180.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/1181.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/1182.jpg",
  //       img: "https://i-point.ru/storage/item/main/856.jpg",
  //       name: "Apple MacBook Pro 2021 14 M1 Pro 16Gb/512Gb «Серый космос» ",
  //       price: "125990",
  //     },

  //     {
  //       id: 72,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/611.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/612.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/613.jpg",
  //       img: "https://i-point.ru/storage/item/main/574.jpg",
  //       name: "Apple MacBook Air 2020 13 М1 8Gb/256Gb Серый космос (MGN63/A)",
  //       price: "77990",
  //     },

  //     {
  //       id: 78,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/870.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/871.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/872.jpg",
  //       img: "https://i-point.ru/storage/item/main/708.jpg",
  //       name: "Apple iMac 24 Retina 4,5K M1 3.06 ГГц 8Gb/256Gb Синий",
  //       price: "138990",
  //     },

  //     {
  //       id: 78,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/870.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/871.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/872.jpg",
  //       img: "https://i-point.ru/storage/item/main/708.jpg",
  //       name: "Apple iMac 24 Retina 4,5K M1 3.06 ГГц8Gb/512Gb Синий",
  //       price: "158990",
  //     },

  //     {
  //       id: 78,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/870.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/871.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/872.jpg",
  //       img: "https://i-point.ru/storage/item/main/708.jpg",
  //       name: "Apple iMac 24 Retina 4,5K M1 3.06 ГГц 16Gb/1Tb  Синий",
  //       price: "175990",
  //     },

  //     {
  //       id: 79,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/1176.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/1177.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/1179.jpg",
  //       img: "https://i-point.ru/storage/item/main/857.jpg",
  //       name: "Apple MacBook Pro 2021 14 M1 Pro 16Gb/1Tb «Серебристый»",
  //       price: "158990",
  //     },
  //     {
  //       id: 81,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/1176.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/1177.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/1179.jpg",
  //       img: "https://i-point.ru/storage/item/main/857.jpg",
  //       name: "Apple MacBook Pro 2021 14 M1 Pro 8Gb/512Tb «Серебристый»",
  //       price: "128990",
  //     },
  //     {
  //       id: 80,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/885.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/886.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/888.jpg",
  //       img: "https://i-point.ru/storage/item/main/710.jpg",
  //       name: "Apple iMac 24 Retina 4,5K M1 3.06 ГГц 8Gb/256Gb Розовый",
  //       price: "138990",
  //     },
  //     {
  //       id: 82,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/885.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/886.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/888.jpg",
  //       img: "https://i-point.ru/storage/item/main/710.jpg",
  //       name: "Apple iMac 24 Retina 4,5K M1 3.06 ГГц 8Gb/512Gb Розовый",
  //       price: "158990",
  //     },
  //     {
  //       id: 80,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/885.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/886.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/888.jpg",
  //       img: "https://i-point.ru/storage/item/main/710.jpg",
  //       name: "Apple iMac 24 Retina 4,5K M1 3.06 ГГц 16Gb/1Tb Розовый",
  //       price: "175990",
  //     },

  //     {
  //       id: 76,
  //       count: 1,
  //       smalImg1: "https://i-point.ru/storage/gallery/big/665.jpg",
  //       smalImg2: "https://i-point.ru/storage/gallery/big/666.jpg",
  //       smalImg3: "https://i-point.ru/storage/gallery/big/667.jpg",
  //       img: "https://i-point.ru/storage/item/main/1394.jpg",
  //       name: "Apple Mac Studio 2022 M1 Max 32Gb/512Gb Серебристый",
  //       price: "140990",
  //     },
  //   ];
  const [card, Setcard] = React.useState([]);
  React.useEffect(() => {
    const getMack = async () => {
      const { data } = await axios.get("http://localhost:3001/mackbook");
      Setcard(data);
      return data;
    };

    getMack();
  });
  return (
    <section className="default_for_buy">
      <div className="container">
        <div className="description_top_block">
          <p>
            <Link to="/">Головна</Link> <span className="trans">> MacBook</span>
          </p>
          <p className="buyDesc">
            Купити <span className="red">MacBook</span>
          </p>
        </div>

        <div className="iphone_flexCard">
          {card?.map((c) => (
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
          <h1>Купити Apple Mac </h1>
          <p>
            {" "}
            Продукція компанії Apple – синонім високої якості, престижності та
            відмінних технічних характеристик. Дитина Стіва Джобса і після свого
            натхненника намагається залишатися на острижі технологій, пропонуючи
            своїм шанувальникам найкращі пропозиції та встановлюючи орієнтир для
            інших конкурентів.
          </p>
          <h1>
            Apple Mac – надійний помічник для роботи, навчання та відпочинку
          </h1>
          <p>
            Окрім звичних смартфонів компанія активно розвиває і інші напрямки.
            В першу чергу, мова йде про ноутбуки та моноблоки iMac, які
            завоювали позитивну репутацію у користувачів завдяки своїй
            швидкості, зручності та практичності. Наприклад, ноутбуки MacBook не
            потребують особливого представлення і отримали заслужену
            популярність серед бізнесменів, студентів, програмістів, менеджерів
            середнього рівня та інших груп осіб. Причина у успішності власної
            операційної системи, відмінних технічних характеристиках, які можуть
            працювати з важкими додатками, великою кількістю вікон браузера або
            офісних програм. Дуже вражаюче і час автономної роботи завдяки ємній
            батареї. Одночасно ноутбуки Apple Mac максимально компактні і значно
            легші за аналоги інших виробників, що дозволить їх легко брати з
            собою у сумці в дорогу, командировку або подорож. Не менш популярні
            серед користувачів і настільні варіанти комп'ютерів iMac. Їх
            перевага у моноблочному виконанні, що економить час на робочому
            столі і поруч з ним, ніж грішать класичні версії персональних
            комп'ютерів. Одночасно подібна техніка цікава за технічними
            характеристиками, хоча у цьому напрямку Apple випускає новинки
            значно рідше, що обумовлено обсягом ринку. Разом з цим iMac чудово
            підходять найрізноманітнішим людям, починаючи від студентів і
            закінчуючи керівниками бізнесу. Також йому знайдеться місце в
            звичайній малогабаритній квартирі, що дозволить грати в звичні ігри
            і готувати робочі звіти, оформлювати курсову або дипломну роботу,
            дивитися відео.
          </p>
          <h1>Ціна Mac</h1>
          <p>
            Наш інтернет-магазин спеціалізується на продажу ноутбуків та
            моноблочних комп'ютерів виробництва компанії Apple. Вирішуючи
            зробити покупку нового пристрою саме у нас, ви отримуєте максимум
            переваг у вигляді розумної цінової політики, офіційної гарантії
            Apple та відсутності необхідності довго чекати свого замовлення.
            Отримати додаткову інформацію та зробити замовлення ви можете за
            телефоном або додавши товар у кошик і залишивши заявку прямо на
            сайті інтернет-магазину.
          </p>
        </div>
      </div>
    </section>
  );
};
export default MacBook;
