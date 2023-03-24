import React from "react";
import "../productWhichPage/productMain.scss";
import { Link } from "react-router-dom";
import ListProduct from "../cardSection/ListProduct";

const Iphone = ({SetBusket,card,setBuy})=>{
    
    return(
        
        <section className="default_for_buy">
            <div className="container">
            <div className="description_top_block">
            <p><Link to="/">Главная</Link> <span className="trans">> Iphone</span></p>
            <p className="buyDesc">Купить <span className="red">Iphone</span></p>
           </div>
          
           <div className="iphone_flexCard">
                {
                    card.map(c=>(
                        <ListProduct count={c.count} id={c.id}smalImg1={c.smalImg1} smalImg4={c.smalImg4}smalImg3={c.smalImg3}smalImg2={c.smalImg2}SetBusket ={SetBusket}  setBuy={setBuy} img={c.img} name={c.name} price={c.price}/>
                    ))
                }
           </div>
            </div>
        </section>
    )
}
export default Iphone;
/* <div className="which_iphone_main">
            <div className="which_block">
            <img src="https://i-point.ru/storage/item/main/1241.jpg" alt="" />
            <a href="" className="which_link">Iphone 14</a>
            </div>
            <div className="which_block">
            <img src="https://i-point.ru/storage/item/main/1241.jpg" alt="" />
            <a href="" className="which_link">Iphone 14</a>
            </div>
            <div className="which_block">
            <img src="https://i-point.ru/storage/item/main/1241.jpg" alt="" />
            <a href="" className="which_link">Iphone 14</a>
            </div>
            <div className="which_block">
            <img src="https://i-point.ru/storage/item/main/1241.jpg" alt="" />
            <a href="" className="which_link">Iphone 14</a>
            </div>
            <div className="which_block">
            <img src="https://i-point.ru/storage/item/main/1241.jpg" alt="" />
            <a href="" className="which_link">Iphone 14</a>
            </div>
            <div className="which_block">
            <img src="https://i-point.ru/storage/item/main/1241.jpg" alt="" />
            <a href="" className="which_link">Iphone 14</a>
            </div>
            <div className="which_block">
            <img src="https://i-point.ru/storage/item/main/1241.jpg" alt="" />
            <a href="" className="which_link">Iphone 14</a>
            </div>
            <div className="which_block">
            <img src="https://i-point.ru/storage/item/main/1241.jpg" alt="" />
            <a href="" className="which_link">Iphone 14</a>
            </div>
            <div className="which_block">
            <img src="https://i-point.ru/storage/item/main/1241.jpg" alt="" />
            <a href="" className="which_link">Iphone 14</a>
            </div>
            <div className="which_block">
            <img src="https://i-point.ru/storage/item/main/1241.jpg" alt="" />
            <a href="" className="which_link">Iphone 14</a>
            </div>
            <div className="which_block">
            <img src="https://i-point.ru/storage/item/main/1241.jpg" alt="" />
            <a href="" className="which_link">Iphone 14</a>
            </div>
            <div className="which_block">
            <img src="https://i-point.ru/storage/item/main/1241.jpg" alt="" />
            <a href="" className="which_link">Iphone 14</a>
            </div>
            <div className="which_block">
            <img src="https://i-point.ru/storage/item/main/1241.jpg" alt="" />
            <a href="" className="which_link">Iphone 14</a>
            </div>
            <div className="which_block">
            <img src="https://i-point.ru/storage/item/main/1241.jpg" alt="" />
            <a href="" className="which_link">Iphone 14</a>
            </div>
            <div className="which_block">
            <img src="https://i-point.ru/storage/item/main/1241.jpg" alt="" />
            <a href="" className="which_link">Iphone 14</a>
            </div>
            <div className="which_block">
            <img src="https://i-point.ru/storage/item/main/1241.jpg" alt="" />
            <a href="" className="which_link">Iphone 14</a>
            </div>
            <div className="which_block">
            <img src="https://i-point.ru/storage/item/main/1241.jpg" alt="" />
            <a href="" className="which_link">Iphone 14</a>
            </div>
           </div> */