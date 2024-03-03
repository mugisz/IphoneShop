import axios from "axios";

import "../productWhichPage/productMain.scss";
import { Link } from "react-router-dom";
import ListProduct from "../cardSection/ListProduct";
import React from "react";
const Ipad = ({ setBuy, SetBusket }) => {
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
