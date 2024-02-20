import React from "react";
import { Link } from "react-router-dom";
import "../basketPage/basketPage.scss";

const BasketPage = ({ show, busket, deleteProduct }) => {
  const [count, setCount] = React.useState(1);
  const [lastMove, setLastMove] = React.useState(true);

  const result = busket.reduce(
    (previousValue, currentItem) =>
      Number(
        previousValue + Number(currentItem.price) * Number(currentItem.count)
      ),
    0
  );

  const handleIncreaceCount = (id) => {
    setCount(
      busket.map((item) => {
        if (item.id === id) {
          item.count++;
        }
        return item;
      })
    );
  };

  const handleDecreaseCount = (id, count) => {
    if (count < 1) {
      count = 0;
    } else {
      setCount(
        busket.map((item) => {
          if (item.id === id) {
            item.count--;
          }
          return item;
        })
      );
    }
  };

  if (!show) {
    return (
      <div className="Pus">
        <h1>Корзина порожня </h1>
        <p>
          Перейти на <Link to="/"> Головну Сторінку</Link>{" "}
        </p>
      </div>
    );
  }

  return (
    <div className="basketMainBlock">
      <div className="container">
        <div className="topBasketSection">
          <h1>Корзина</h1>
        </div>
        <div className="basketFlex">
          <div className="leftBlock">
            {lastMove ? (
              busket.map((b) => (
                <div className="leftBlockCard">
                  <img src={b.img} alt="" />
                  <p className="nameBusk">{b.name}</p>
                  <p>{parseFloat(b.price) * b.count}</p>
                  <div className="moreBlock">
                    <i
                      className="left"
                      onClick={() => handleDecreaseCount(b.id, b.count)}
                    ></i>
                    <p>{b.count}</p>
                    <i
                      className="right"
                      onClick={() => handleIncreaceCount(b.id)}
                    ></i>
                  </div>
                  <div
                    className="iconCancel"
                    onClick={() => deleteProduct(b)}
                  ></div>
                </div>
              ))
            ) : (
              <div className="lastMoveCard">
                <h1>Оформлення замовлення</h1>
                <div className="inputFlex">
                  <input
                    type="tel"
                    maxlength="30"
                    placeholder="Ім'я отримувача замовлення"
                    name="name"
                    class="form-control"
                  />
                  <input
                    type="tel"
                    maxlength="30"
                    placeholder="Номер телефону"
                    name="name"
                    class="form-control"
                  />
                  <div className="inputComFlex">
                    <p>Коментар до замовлення (необов'язково)</p>
                    <input type="text" name="name" class="form-control" />
                  </div>
                  <p>
                    Натисканням на кнопку "Відправити" ви надаєте свою згоду на
                    обробку <span> особистих даних</span> відповідно до{" "}
                    <span>
                      <Link to="/garant"> політики конфіденційності</Link>
                    </span>
                    . Ми дбайливо ставимося до ваших даних.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="rightBlock">
            <p className="rD">Доставка по всій Україні</p>
            <div className="sumBlock">
              <h2>Разом</h2>
              <p>{result}</p>
            </div>
            <p className="oform" onClick={() => setLastMove(false)}>
              Перейти до оформлення
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
