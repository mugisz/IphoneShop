import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./sections/header/Header";
import Main from "./sections/main/Main";
import IphonePage from "./sections/productWhichPage/Iphone";
import AirpodsPage from "./sections/productWhichPage/AirPods";
import BuyPage from "./sections/BuyPage/BuyPage";
import BasketPage from "./sections/basketPage/BasketPage";
import MacBookPage from "./sections/productWhichPage/MacBook";
import IpadPage from "./sections/productWhichPage/Ipad";
import WatchPage from "./sections/productWhichPage/watch";

import Dostavka from "./sections/headerLinkSections/dostavka";

import ContacsPage from "./sections/headerLinkSections/contacts";
import axios from "axios";
const App = () => {
  const [item, SetItem] = React.useState({});
  const [busket, setBusket] = React.useState([]);
  const [show, onShowBusket] = React.useState(false);

  const [mas, SetMas] = React.useState([]);
  React.useEffect(() => {
    const getIphone = async () => {
      const { data } = await axios.get("http://localhost:3001/iphone");
      SetMas(data);
      return data;
    };

    getIphone();
  }, []);

  const setBuy = (a) => {
    return SetItem(() => a);
  };
  const SetBusket = (a) => {
    onShowBusket(true);
    let copy = Object.assign([], busket);
    copy.push(a);

    setBusket(copy);
  };
  const deleteProduct = (product) => {
    setBusket(busket.filter((b) => b !== product));
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Main SetBusket={SetBusket} setBuy={setBuy} />}
        />
        <Route
          path="/iphone"
          element={
            <IphonePage SetBusket={SetBusket} setBuy={setBuy} card={mas} />
          }
        />
        <Route
          path="/airpods"
          element={<AirpodsPage SetBusket={SetBusket} setBuy={setBuy} />}
        />
        <Route
          path="/mac"
          element={<MacBookPage SetBusket={SetBusket} setBuy={setBuy} />}
        />
        <Route
          path="/ipad"
          element={<IpadPage SetBusket={SetBusket} setBuy={setBuy} />}
        />
        <Route
          path="/appleWatch"
          element={<WatchPage SetBusket={SetBusket} setBuy={setBuy} />}
        />
        <Route
          path="/buy"
          element={
            <BuyPage
              SetBusket={SetBusket}
              id={item.id}
              count={item.count}
              smalImg1={item.smalImg1}
              smalImg4={item.smalImg4}
              smalImg3={item.smalImg3}
              smalImg2={item.smalImg2}
              setBuy={setBuy}
              img={item.img}
              name={item.name}
              price={item.price}
            />
          }
        />
        <Route
          path="/basket"
          element={
            <BasketPage
              deleteProduct={deleteProduct}
              show={show}
              busket={busket}
            />
          }
        />
        <Route path="/dostavka" element={<Dostavka />} />

        <Route path="/contacts" element={<ContacsPage />} />
      </Routes>
    </div>
  );
};

export default App;
/* {
            "id": 2,
            "count": 1,
            "smalImg1":
              "",
            "smalImg2":
              "",
            "smalImg3":
              "",
            "smalImg4":
              "",
            "img": "",
            "name": "",
            "price": "89990 "
          } */
