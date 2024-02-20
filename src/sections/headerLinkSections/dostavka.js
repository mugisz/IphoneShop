import React from "react";
import "../headerLinkSections/ful.scss";

const Dostavka = () => {
  return (
    <div className="dostFlex">
      <div className="container">
        <div className="description_top_block">
          <h1>Доставка та оплата</h1>
        </div>
        <div className="fblock">
          <h1 className="headerTopLinks">
            Способи доставки<span>.</span>
          </h1>
          <p className="headerP">
            - Стандартна доставка здійснюється нашими кур'єрами протягом 12-15
            днів після покупки.
            <br />
            - Експрес-доставка здійснюється нашими кур'єрами протягом 6-9 днів
            після покупки.
            <br />- <span>Оплата за доставку включена у вартість товару</span>
          </p>
          <h1 className="headerTopLinks">
            Способи оплати<span>.</span>
          </h1>
          <p className="headerP">- Переказ на картку (Моно,Приват)</p>
        </div>
      </div>
    </div>
  );
};

export default Dostavka;
