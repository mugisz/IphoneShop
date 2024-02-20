import React from "react";
import cart from "../../img/cart.png";
import { Link } from "react-router-dom";

const ListProduct = ({
  id,
  count,
  smalImg1,
  smalImg2,
  smalImg3,
  smalImg4,
  SetBusket,
  setBuy,
  img,
  name,
  price,
}) => {
  const props = {
    smalImg1,
    smalImg2,
    smalImg3,
    smalImg4,
    img,
    name,
    price,
    id,
    count,
  };

  return (
    <div className="iphone_Card">
      <Link to="/buy">
        <img src={img} alt="" onClick={() => setBuy(props)} />
        <h2 className="nameOfIphone" onClick={() => setBuy(props)}>
          {name}
        </h2>
        <p className="price" onClick={() => setBuy(props)}>
          {price}
        </p>
      </Link>
      <div className="blue_cardBlock" onClick={() => SetBusket(props)}>
        <p>В наявності</p>

        <img className="cart" src={cart} alt="" />
      </div>
    </div>
  );
};
export default ListProduct;
