import React , {useState } from "react";
import "../header/header.scss"
import {Link} from "react-router-dom"
import row from "../../img/row.png"
const Header = ()=>{
    const [burgerAct, setBurgerAct] = useState(false);
    const [BurgerProductList, setBurgerProductList] = useState(false);
    const closeW=()=>{
        setBurgerProductList(false)
        setBurgerAct(false)
        
    }
    /*<div className={ state ? "drop":"dn drop" }>
                            <li className="d">Iphone 14</li>
                            <li className="d">Iphone 13</li>
                            <li className="d">Iphone 12</li>
                            <li className="d">Iphone 11</li>
                            <li className="d">Iphone Xs</li>
                            <li className="d">Iphone Xr</li>
                        </div> */
    return(
        <header>
            <div className="container">
           
                <button onClick={()=>setBurgerAct(!burgerAct) } className="burger_menu">
                    <div className={burgerAct?"line active":"line "}></div>
                </button>

                <ul className="menu">
                    <Link to="/">
                    <li className=" top_list logo "><span >I</span>Store<span>.</span>RU</li>
                    </Link>
                   <div className={burgerAct ? "burgerAd burgList":"burgerAd " }>
                    <li className="top_list top_list_size h"><Link to="/dostavka">Доставка и оплата</Link> </li>
                    <li className="top_list top_list_size h"><Link to="/garant">Гарантия</Link></li>
                    <li className="top_list top_list_size h"><Link to="/contacts">Контакты</Link></li>
                    <li className="top_list top_list_size h"><Link to="/ourPage">O нас</Link></li>
                    <li className="top_list top_list_size h"><Link  to="/basket">Корзина</Link></li>
                    {burgerAct ? <li onClick={()=>setBurgerProductList(!BurgerProductList)} className="top_list top_list_size h">Список товаров</li> :""}
                    </div>
                </ul>
                <section className={BurgerProductList ? "second_header ad add ":"second_header"}>
                    <ul className="menu secondMenu">
                        <li className="botom_list h " onClick={()=>(closeW())}> <Link to="/iphone"> Iphone"
                        </Link>
                        </li>
                        <li  className="botom_list h" onClick={()=>(closeW())}><Link to="/Mac">Mac</Link></li>
                        <li  className="botom_list h" onClick={()=>(closeW())}><Link to="/appleWatch">Watch</Link>
                       
                        </li>
                        <li className="botom_list h" onClick={()=>(closeW())}><Link to="/Ipad">iPad</Link></li>
                        <li className="botom_list h" onClick={()=>(closeW())}><Link to="/airpods">AirPods</Link></li>
                        {BurgerProductList ? <img src={row} onClick={()=>(setBurgerProductList(false))} className="row" alt="" />:""}
                    </ul>
                    <div className="trash">
                        
                        <Link className="botom_list h" to="/basket">Корзина</Link> 
                        </div>
                </section>
               
            </div>
        </header>
    )
}
export default Header;