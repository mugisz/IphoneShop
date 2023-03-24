 import React from "react";
import "../main/main.scss";
import {Link} from "react-router-dom"
import reward from "../../img/reward.png"
import star from "../../img/Star.webp"
import telegramW from "../../img/telegramW.png"
import instW from "../../img/instW.png"
import whatsappW from "../../img/WhatsappW.png"
import ProductCard from "../cardSection/ProductCard";
import ListProduct from "../cardSection/ListProduct";
const mainCard = [
    {price:"От 29 990р" ,name:"Apple Iphone",cat:"Смартфоны",img :"https://i-point.ru/storage/gallery/big/1166.jpg"},
    {price:"От 9 990р" ,name:"Apple AirPods",cat:"Беспроводные наушники",img :"https://i-point.ru/storage/gallery/big/62.jpg"},
    {price:"От 65 990р" ,name:"Apple Mac",cat:"Компьютеры",img:"https://i-point.ru/storage/gallery/big/620.jpg"},
    {price:"От 22 990р" ,name:"Apple Watch",cat:"Часы",img :"https://i-point.ru/storage/gallery/big/450.jpg"},
    {price:"От 27 990р" ,name:"Apple Ipad",cat:"Планшеты",img :"https://i-point.ru/storage/gallery/big/2597.jpg"},
]
const popularCard = [
    {id:1,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2707.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2709.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2708.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/2700.jpg",img:"https://i-point.ru/storage/item/main/1200.jpg",name:"Iphone 14 Pro 128Gb Темно-Фиолетовый",price:"90990"},
    {id:71,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2062.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2063.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2064.jpg",img:"https://i-point.ru/storage/item/main/1114.jpg",name:"Apple MacBook Pro 2022 13 M2 8Gb/256Gb Серый космос",price:"101990"},
    {id:64,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/1009.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/1010.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/1011.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/1012.jpg",img:"https://i-point.ru/storage/item/main/1180.jpg",name:"Наушники Apple AirPods Pro(2022)",price:"18590"},
    {id:65,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/627.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/628.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/629.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/626.jpg",img:"https://i-point.ru/storage/item/main/583.jpg",name:"Наушники Apple AirPods Max Серый-Космос",price:"53590"},
    {id:4,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2668.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2670.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2669.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/2671.jpg",img:"https://i-point.ru/storage/item/main/1212.jpg",name:"Iphone 14 Pro 128Gb Черный Космос ",price:"90990 "},
      
    
    {id:82,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/885.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/886.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/888.jpg",img:"https://i-point.ru/storage/item/main/710.jpg",name:"Apple iMac 24 Retina 4,5K M1 3.06 ГГц 8Gb/512Gb Розовий",price:"158990"},
    {id:52,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/835.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/836.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/837.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/2713.jpg",img:"https://i-point.ru/storage/item/main/652.jpg",name:"Iphone 12 128Gb Фиолетовый",price:"52990 "},

    {id:53,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/1132.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/1133.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/1130.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/1131.jpg",img:"https://i-point.ru/storage/item/main/762.jpg",name:"Iphone 13 128Gb Розовый",price:"56990 "},
    
]


const Main = ({setBuy,SetBusket})=>{
  
    return(
        <main>
            <div className="mainBG"></div>
            <div className="container">
            <section className="main_descriptions">
                    <h1><span> Оригинальная </span>техника из США в России по самым <span>низким ценам</span></h1>
                </section>
                <section className="main_title">
                    <ul className="main_titles">
                    <div className="listMainRewart">
                            <img src={reward} className="rewardI" alt="" />
                        <li className="titles_desc"><span> Доставка </span> по всей Росcии</li>
                        </div>
                        <div className="listMainRewart">
                            <img src={reward} className="rewardI" alt="" />
                        <li className="titles_desc">Специализируемся  на <span>оригинальних </span> устройствах</li>
                        </div>                      <div className="listMainRewart">
                            <img src={reward} className="rewardI" alt="" />
                        <li className="titles_desc"><span> Официальная гарантия </span>на всю технику Apple</li>
                        </div>                      
                                            
                                              
                        <div className="listMainRewart">
                            <img src={reward} className="rewardI" alt="" />
                        <li className="titles_desc"><span>Тысячи постоянных  </span> покупателей.</li>
                        </div>                      
                        <div className="listMainRewart">
                            <img src={reward} className="rewardI" alt="" />
                        <li className="titles_desc"><span>Низкие</span> цены</li>
                        </div> 
                        
                    </ul>
                </section>
                
               
            </div>
            <section className="first_productBlock">
                    <h1><span>Оригинальная техника в</span> Istore</h1>
                    <div className="product_main_block">
                       {
                        mainCard.map(m=>(
                            
                            <ProductCard price ={m.price} name={m.name}cat = {m.cat}img={m.img}/>
                            
                        ))
                       } 
                       
                    </div>
                </section>
            <section className="popular_card">
                       <h1>Популярые товары</h1>
                   <div className="popular_flex">
                   {popularCard.map(p=>( <ListProduct smalImg1={p.smalImg1} smalImg4={p.smalImg4}smalImg3={p.smalImg3}smalImg2={p.smalImg2} id={p.id} count={p.count}SetBusket={SetBusket} setBuy={setBuy} img={p.img} name={p.name} price={p.price}/>))}
                   </div>
                
            </section>
            <section className="reviev">
                <h1>Отзывы</h1>
                    <div className="reviev_block">
                       
                     <div className="reviev_card">
                     <div className="top_revivev_block">
                       
                        <img src="https://cdn-icons-png.flaticon.com/512/483/483361.png" className="ava" alt="" />
                       <div className="top_reviev_text_align">
                       <p className="reviev_name">Анастасия</p>
                        <div className="star">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                       </div>
                       </div>
                       <p className="reviev_bottom">Отличный сервис, всем рекомендую!Купила себе айфон 14 про, через 7 дней со мной связались и передали товар. Всё отлично, товар с официального Apple магазина по наилучшей цене, а то у меня муж взял этот же телефон в России в полтора раза дороже! В следующий раз за покупкой Apple техники буду обращаться именно к вам, если apple не вернётся на российский рынок</p>
                       
                     </div>
                    </div>
                    <div className="reviev_block reviev_second_BG">
                       
                     <div className="reviev_card">
                     <div className="top_revivev_block">
                       
                        <img className="ava"src="https://cdn-icons-png.flaticon.com/512/3954/3954071.png" alt="" />
                       <div className="top_reviev_text_align">
                       <p className="reviev_name">Виктория</p>
                        <div className="star">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                       </div>
                       </div>
                       <p className="reviev_bottom">Цены просто бомба!Заказала себе макбук, дошёл до моих рук буквально за 12 дней, всё просто шикарно!Правда по доставке немного дороговато, но оно того стоит!
Ведь как говорят: Сэкономленные деньги - это заработанные деньги!</p>
                       
                     </div>
                    </div>
                    <div className="reviev_block">
                       
                     <div className="reviev_card">
                     <div className="top_revivev_block">
                     <img className="ava"src="https://cdn-icons-png.flaticon.com/512/3954/3954071.png" alt="" />
                       <div className="top_reviev_text_align">
                       <p className="reviev_name">Захар</p>
                        <div className="star">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                       </div>
                       </div>
                       <p className="reviev_bottom">Знакомый перекомендовал этот сервис, сначала выглядело всё как-то странно, так как оплата сразу + непонятно как они собираются это всё доставлять, даже была мысль, что друг работает на них и хочет меня обмануть) Но в итоге заказал макбук по очень хорошей цене, всё передали, вообщем всем доволен, если хотите себе ноутбук для работы - то рекомендую про 16!Но за доставку цену могли и снизить)Но всё же это намного выгодней, чем брать сейчас где нибудь в России!</p>
                       
                     </div>
                    </div>
            </section>
            <footer>
            <div className="container">
                <div className="footer_topBlock">
                <div className="FTblocks">
                        <p className="first_desc"><span>Apple</span> Iphone</p>
                        <p className="fot_hov_ef"><Link to="/iphone"> Iphone 14 pro max</Link></p>
                        <p className="fot_hov_ef"><Link to="/iphone">Iphone 14</Link> </p>
                        <p className="fot_hov_ef"><Link to="/iphone">Iphone 13</Link> pro max</p>
                        <p className="fot_hov_ef"><Link to="/iphone">Iphone 13 </Link></p>
                        <p className="fot_hov_ef"><Link to="/iphone">Iphone 12 pro max</Link></p>
                        <p className="fot_hov_ef"><Link to="/iphone">Iphone 12 </Link></p>
                        <p className="fot_hov_ef"><Link to="/iphone">Iphone 11 pro max</Link></p>
                        <p className="fot_hov_ef"><Link to="/iphone">Iphone 11 </Link></p>
                        <p className="fot_hov_ef"><Link to="/iphone">Iphone Xs </Link></p>
                        <p className="fot_hov_ef"><Link to="/iphone">Iphone Xr </Link></p>
                        <p className="fot_hov_ef"><Link to="/iphone">Iphone X </Link></p>
                        
                </div>
                <div className="FTblocks">
                        <p className="first_desc"><span>Apple</span> Watch</p>
                        <p className="fot_hov_ef"><Link to="/iphone">Watch Ultra</Link></p>
                        <p className="fot_hov_ef"><Link to="/iphone">Watch Series 8 </Link></p>
                        <p className="fot_hov_ef"><Link to="/iphone">Watch SE 2022</Link></p>
                        <p className="fot_hov_ef"><Link to="/iphone">Watch SE </Link></p>
                        
                       
                        
                </div>
                <div className="FTblocks">
                        <p className="first_desc"><span>Apple</span> Mac</p>
                        <p className="fot_hov_ef"><Link to="/mac">MacBook Air(M2,2022)</Link></p>
                        <p className="fot_hov_ef"><Link to="/mac">MacBook Pro 13(M2,2022)</Link></p>
                        <p className="fot_hov_ef"><Link to="/mac">MacBook Pro 2021</Link></p>
                        <p className="fot_hov_ef"><Link to="/mac">MacBook Air(M2,2020)</Link></p>
                        <p className="fot_hov_ef"><Link to="/mac">MacBook Pro(M2,2022) </Link></p>
                        <p className="fot_hov_ef"><Link to="/mac">iMac 24(2021)</Link></p>
                        <p className="fot_hov_ef"><Link to="/mac">Mac mini </Link></p>
                        
                </div>
                <div className="FTblocks">
                        <p className="first_desc"><span>Apple</span> Ipad</p>
                        <p className="fot_hov_ef"><Link to="/Ipad">Ipad Pro 2022</Link></p>
                        <p className="fot_hov_ef"><Link to="/Ipad">Ipad Air 2022 </Link></p>
                        <p className="fot_hov_ef"><Link to="/Ipad">Ipad 2022</Link></p>
                        <p className="fot_hov_ef"><Link to="/Ipad">Ipad Pro 2021 </Link></p>
                        <p className="fot_hov_ef"><Link to="/Ipad">Ipad Air 2021</Link></p>
                        <p className="fot_hov_ef"><Link to="/Ipad">Ipad mini 2021 </Link></p>
                       
                        
                </div>
                
                </div>
                <div className="footer_contactBlock">
                    <div className="footer_contacts">
                    <img src={telegramW} alt="" />
                        
                            <a href="https://t.me/dostavkaapple">Наш Telegram</a  >
                           
                    </div>
                    <div className="footer_contacts">
                    <img src={instW} alt="" />
                        
                            <a href="https://www.instagram.com/i.stor.delivery/?igshid=YmMyMTA2M2Y%3D">Наш Instagram</a >

                        
                    </div>
                    <div className="footer_contacts">
                    <img src={whatsappW} alt="" />
                        
                            <a href="https://www.instagram.com/i.stor.delivery/?igshid=YmMyMTA2M2Y%3D">Наш Whatsapp</a >

                        
                    </div>
                </div>
               <section className="lastPR">
            
                <p><span>I</span>store.<span>ru</span></p>
               </section>
            </div>
        </footer>
        </main>
    )
}
export default Main;