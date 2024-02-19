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

  const handleDecreaceCount = (id, count) => {
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
        <h1>Корзина пустая </h1>
        <p>
          Перейти на <Link to="/"> Главную Страницу</Link>{" "}
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
                      onClick={() => handleDecreaceCount(b.id, b.count)}
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
                <h1>Оформление заказа</h1>
                <div className="inputFlex">
                  <input
                    type="tel"
                    maxlength="30"
                    placeholder="Имя получателя заказа"
                    name="name"
                    class="form-control"
                  />
                  <input
                    type="tel"
                    maxlength="30"
                    placeholder="Номер телефона"
                    name="name"
                    class="form-control"
                  />
                  <div className="inputComFlex">
                    <p>Комментарий к заказу (необязательно)</p>
                    <input type="text" name="name" class="form-control" />
                  </div>
                  <p>
                    Нажимая на кнопку "Отправить" вы даете свое согласие на
                    обработку <span> персональных данных</span> в соответсвии с{" "}
                    <span>
                      <Link to="/garant"> политикой конфиденциальности</Link>
                    </span>
                    . Мы бережно относимся к вашим данным.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="rightBlock">
            <p className="rD">Доставка по всей России</p>
            <div className="sumBlock">
              <h2>Итого</h2>
              <p>{result}</p>
            </div>
            <p className="oform" onClick={() => setLastMove(false)}>
              Перейти к оформлению
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BasketPage;
