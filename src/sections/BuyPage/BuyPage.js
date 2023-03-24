import React from "react";
import { Link } from "react-router-dom";
import "../BuyPage/buyPage.scss";
import card from "../../img/cart.png"
const BuyPage =({smalImg1,smalImg2,smalImg3,smalImg4,SetBusket,img,name,price,id,count})=>{
    const props = {smalImg1,smalImg2,smalImg3,smalImg4,img,name,price,id,count};
    
    const [photo,setPhoto] = React.useState(0)
    
    let MainPhoto="";
    if(photo == 0)MainPhoto = smalImg1;
    if(photo == 1)MainPhoto = smalImg2;
    if(photo == 2)MainPhoto = smalImg3;
    if(photo == 3)MainPhoto = smalImg4;
    const da =()=>{
        
    }
    return(
        <div className="buyPage">
            <div className="description_top_block">
            <p className="Tomain"><Link to="/">Главная</Link>
             <span className="trans"> > Aiphone</span></p>
            <p className="buyDesc">{name}</p>
           </div>
           <div className="buy_mainBlock">
            <div className="left_sections">
               <div className="mainImgBlock">
               <img src={MainPhoto} alt="" />
               </div>
               {
                smalImg2 &&  <div className="bottom_img">
                <img className="leftWidth" onClick={()=>setPhoto(1)} src={smalImg1} alt="" />
                <img className="leftWidth"  onClick={()=>setPhoto(2)} src={smalImg2} alt="" />
                <img className="leftWidth"  onClick={()=>setPhoto(0)} src={smalImg3} alt="" />
                <img className="leftWidth"  onClick={()=>setPhoto(3)} src={smalImg4} alt="" />
            </div>
               }
            </div>
            <div className="right_sections">
                <p className="NameBuy">{name}</p>
                <div className="appleGuarant">
                <img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" width="24px"/>
                    <p>Официальная гарантия Apple на 1 год</p>
                </div>
               
               <div className="dostBlock">
                <p>Доступная <span> бесплатная</span> экспресс-доставка за <span>5-7 дней по Росcии</span>.</p>
               </div>
                <div className="price_block">
                    <p><span className=" fwSpan" >{price} ₽</span><br/>
                    Цена при безналичной оплате
</p>
                </div>
                <div className="last_buttons">
                    <div className="buy_btn" onClick={()=>(SetBusket(props))}  >
                        <img src={card} alt="" />
                        <Link to="/basket" >Купить</Link>
                    </div>
                    <div className="Ishave">
                    <i className="icon-checkmark" ></i>
                        <p>В наличии</p>
                    </div>
                </div>
            </div>
           </div>
        </div>
    
    )
}
export default BuyPage;