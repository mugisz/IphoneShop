import React from "react"
import "../headerLinkSections/ful.scss"
import telegram from "../../img/telegram.png";
import inst from "../../img/inst.png"
import whatsapp from "../../img/Whatsapp.png"

const contacts = ()=>{

    return(
        <div className="dostFlex">
             <div className="container">
            <div className="description_top_block">
            <h1>Контакты</h1>
             </div>
             <div className="contacsFlex">
             <div className="contacts">
                    <img src={telegram} alt="" />
                        
                            <a href="https://t.me/dostavkaapple">Наш Telegram</a  >
                           
                    </div>
                    <div className="contacts">
                    <img src={inst} alt="" />
                        
                            <a href="https://www.instagram.com/i.stor.delivery/?igshid=YmMyMTA2M2Y%3D">Наш Instagram</a >

                        
                    </div>
                    <div className="contacts">
                    <img src={whatsapp} alt="" />
                        
                            <a href="https://www.instagram.com/i.stor.delivery/?igshid=YmMyMTA2M2Y%3D">Наш Watsapp</a >

                        
                    </div>
             </div>
           </div>
        </div>
    )
}
export default contacts;