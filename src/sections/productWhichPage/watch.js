import axios from "axios";
import "../productWhichPage/productMain.scss";
import { Link } from "react-router-dom";
import ListProduct from "../cardSection/ListProduct";
import React from "react";
const Watch = ({ setBuy, SetBusket }) => {
  // const card = [
  //     {id:271,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2235.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2236.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2237.jpg",img:"https://i-point.ru/storage/item/main/1215.jpg",name:"Apple Watch Series 8, 41 мм корпус из алюминия «Тёмная ночь» ",price:"29990"},
  //     {id:273,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2244.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2245.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2246.jpg",img:"https://i-point.ru/storage/item/main/1217.jpg",name:"Apple Watch Series 8, 41 мм корпус из алюминия белого цвета",price:"29990"},
  //     {id:274,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2250.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2251.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2252.jpg",img:"https://i-point.ru/storage/item/main/1219.jpg",name:"Apple Watch Series 8, 41 мм корпус из алюминия цвета «сияющая звезда»",price:"29990"},
  //     {id:272,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2301.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2302.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2303.jpg",img:"https://i-point.ru/storage/item/main/1221.jpg",name:"Apple Watch Series 8, 41 мм корпус из алюминия PRODUCT)RED",price:"29990"},

  //     {id:290,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2271.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2272.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2273.jpg",img:"https://i-point.ru/storage/item/main/1259.jpg",name:"Apple Watch Ultra GPS + Cellular, 49 мм корпус из титана",price:"65990"},
  //     {id:291,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2259.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2260.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2261.jpg",img:"https://i-point.ru/storage/item/main/1255.jpg",name:"Apple Watch Ultra GPS + Cellular, 49 мм корпус из титана",price:"65990"},

  //     {id:275,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2235.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2236.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2237.jpg",img:"https://i-point.ru/storage/item/main/1215.jpg",name:"Apple Watch Series 8, 45 мм корпус из алюминия «Тёмная ночь» ",price:"32990"},
  //     {id:276,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2244.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2245.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2246.jpg",img:"https://i-point.ru/storage/item/main/1217.jpg",name:"Apple Watch Series 8, 45 мм корпус из алюминия белого цвета",price:"32990"},
  //     {id:277,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2250.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2251.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2252.jpg",img:"https://i-point.ru/storage/item/main/1219.jpg",name:"Apple Watch Series 8, 45 мм корпус из алюминия цвета «сияющая звезда»",price:"32990"},
  //     {id:278,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2301.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2302.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2303.jpg",img:"https://i-point.ru/storage/item/main/1221.jpg",name:"Apple Watch Series 8, 45 мм корпус из алюминия PRODUCT)RED",price:"32990"},

  //     {id:279,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2295.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2296.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2297.jpg",img:"https://i-point.ru/storage/item/main/1267.jpg",name:"Apple Watch SE 2022, 40 мм корпус из алюминия серебристого цвета ",price:"22990"},
  //     {id:280,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2286.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2287.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2288.jpg",img:"https://i-point.ru/storage/item/main/1263.jpg",name:"Apple Watch SE 2022, 44 мм корпус из алюминия цвета «сияющая звезда»",price:"24990"},
  //     {id:281,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2298.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2299.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2300.jpg",img:"https://i-point.ru/storage/item/main/1268.jpg",name:"Apple Watch SE 2022, 44 мм корпус из алюминия  серебристого цвета",price:"24990"},
  //     {id:282,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2292.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2293.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2294.jpg",img:"https://i-point.ru/storage/item/main/1266.jpg",name:"Apple Watch SE 2022, 44 мм корпус из алюминия «Тёмная ночь»",price:"24990"},

  // ]
  const [card, Setcard] = React.useState([]);
  React.useEffect(() => {
    const getWotch = async () => {
      const { data } = await axios.get("http://localhost:3001/wotch");
      Setcard(data);
      return data;
    };

    getWotch();
  });
  return (
    <section className="default_for_buy">
      <div className="container">
        <div className="description_top_block">
          <p>
            <Link to="/">Головна</Link> <span className="trans">> AirPods</span>
          </p>
          <p className="buyDesc">
            Купити <span className="red">Apple Watch</span>
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
          <h1>Купити Apple Watch в Istore </h1>
          <p>
            {" "}
            Apple Watch - це носимі розумні годинники, які дозволяють
            користувачам виконувати різні завдання, включаючи здійснення
            телефонних дзвінків, відправлення текстових повідомлень і читання
            електронної пошти. Перші Apple Watch були випущені 24 квітня 2015
            року.
          </p>
          <h1>Підключення</h1>
          <p>
            Для функціонування Apple Watch повинні бути підключені до iPhone 5
            або більш пізньої версії з операційною системою iOS 8.2 або пізнішої
            версії та знаходитися на відстані приблизно 10 метрів. Окрім
            використання з'єднання Bluetooth, годинники також можуть
            з'єднуватися з iPhone, якщо вони знаходяться в тій же мережі Wi-Fi.
            Додаток Apple Watch для iPhone дозволяє користувачам змінювати
            налаштування годинника, змінювати порядок відображення додатків,
            оптимізувати сповіщення і завантажувати нові додатки. Годинники
            також оснащені модулем NFC, що дозволяє користувачам оплачувати
            покупки безпосередньо годинниками за допомогою вбудованого додатка
            Apple Pay.
          </p>
          <h1>Взаємодія</h1>
          <p>
            Інтерфейс Apple Watch був розроблений спеціально для використання на
            зап'ясті, а навігація здійснюється дотиками пальців. Цифрова корона
            - це фізичний навігаційний диск, розташований на бічній панелі
            годинника, який збільшує контент, прокручує його та вводить дані.
            Також в Apple Watch вбудований чутливий мікрофон, що дозволяє
            користувачам взаємодіяти з годинниками за допомогою голосових
            команд, включаючи відповідь на дзвінки та запис голосових
            повідомлень.
          </p>
          <h1>Можливості та додатки</h1>
          <p>
            Синхронізація годинників дозволяє користувачам запускати завдання на
            Apple Watch і завершувати їх на своєму iPhone. Наприклад,
            користувачі не можуть писати електронного листа на годинниках, але
            вони можуть попросити цифрового помічника Siri написати електронний
            лист, і він передасть виконання цього процесу на iPhone. Більшість
            поточних додатків від Apple є переробленими додатками для iPhone,
            як, наприклад, "Повідомлення", проте деякі вбудовані додатки були
            розроблені спеціально для годинників, включаючи Activity, Workout та
            Camera Remote. Сторонні додатки включають в себе соціальні мережі та
            додатки для авіакомпаній і готелів, які дозволяють користувачу
            реєструватися через Apple Watch. Корпоративні додатки включають,
            наприклад, Evernote, який дозволяє користувачам диктувати інформацію
            годинникам, та Salesforce1, який надає інформацію про взаємодію з
            клієнтами в режимі реального часу.
          </p>
          <h1>Ціна Apple Watch</h1>
          <p>
            Незважаючи на те, що Apple Watch є найбільш вдосконалим пристроєм в
            класі розумних годинників, у компанії Apple вдається робити їх
            досить доступними для споживачів. Вони складають адекватну цінову
            конкуренцію пристроям інших виробників і залишаються безкомпромісним
            рішенням для власників iPhone.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Watch;
