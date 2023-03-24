import React from "react"
import "../headerLinkSections/ful.scss"

const dostavka = ()=>{

    return(
        <div className="dostFlex">
             <div className="container">
            <div className="description_top_block">
            <h1>Доставка и оплата</h1>
             </div>
             <div className="fblock">
             <h1 className="headerTopLinks">Способы  доставки<span>.</span></h1>
            <p className="headerP">- Стандартная доставка осуществляется нашими курьерами в течение 12-15 дней после покупки.
           <br/> 
          - Экспресс доставка осуществляется нашими курьерами в течение 6-9 дней после покупки.
          <br/>
      - <span>Оплата за доставку включена в цену товара</span>
            </p>
            <h1 className="headerTopLinks">Способы оплаты<span>.</span></h1>
            <p className="headerP">-Перевод на карту (Альфа , Тинькофф , Втб , Сбербанк , Авангард , Росбанк)</p>
             </div>
           </div>
        </div>
    )
}
export default dostavka;