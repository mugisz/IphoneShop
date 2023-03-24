import "../productWhichPage/productMain.scss"
import { Link } from "react-router-dom";
import ListProduct from "../cardSection/ListProduct";
const Ipad = ({setBuy,SetBusket})=>{
    const card = [
        {id:71,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/909.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/912.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/899.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/901.jpg",img:"https://i-point.ru/storage/item/main/498.jpg",name:"Apple iPad 2021 Wi-Fi 64Gb Серый Космос ",price:"24990"},
        {id:73,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/907.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/911.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/899.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/901.jpg",img:"https://i-point.ru/storage/item/main/761.jpg",name:"Apple iPad 2021 Wi-Fi 64Gb Серебристый",price:"24990"},
        {id:74,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/909.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/912.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/899.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/901.jpg",img:"https://i-point.ru/storage/item/main/498.jpg",name:"Apple iPad 2021 Wi-Fi+Cellular 64Gb Серый Космос",price:"32990"},
        {id:72,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/907.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/911.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/899.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/901.jpg",img:"https://i-point.ru/storage/item/main/761.jpg",name:"Apple iPad 2021 Wi-Fi+Cellular 64Gb Серебристый ",price:"32990"},
       
        {id:76,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2667.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2648.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2649.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/2650.jpg",img:" https://i-point.ru/storage/item/main/1334.jpg",name:"Apple iPad 2022 Wi-Fi 64Gb Серебристый",price:"33990"},
        {id:77,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/909.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/912.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/899.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/901.jpg",img:"https://i-point.ru/storage/item/main/498.jpg",name:"Apple iPad 2021 Wi-Fi 256Gb Серый Космос ",price:"37990"},
        {id:78,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/907.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/911.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/899.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/901.jpg",img:"https://i-point.ru/storage/item/main/761.jpg",name:"Apple iPad 2021 Wi-Fi 256Gb Серебристый",price:"37990"},



        {id:92,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/1994.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/1993.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/1992.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/1991.jpg",img:"https://i-point.ru/storage/item/main/1079.jpg",name:"Apple iPad Air 2022 Wi-Fi 64Gb Синий",price:"45990"},
        {id:97,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/1995.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/1993.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/1992.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/1991.jpg",img:"https://i-point.ru/storage/item/main/1081.jpg",name:"Apple iPad Air 2022 Wi-Fi 64Gb Розовый",price:"45990"},
        {id:98,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/1997.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/1993.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/1992.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/1991.jpg",img:"https://i-point.ru/storage/item/main/1085.jpg",name:"Apple iPad Air 2022 Wi-Fi 64Gb Cияющая звезда",price:"45990"},
        


        {id:99,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2666.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2544.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2545.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/2546.jpg",img:"https://i-point.ru/storage/item/main/1309.jpg",name:"Apple iPad Pro 2022 11 Wi-Fi 128Gb Серебристый",price:"67990"},
        {id:100,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2651.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2544.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2545.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/2546.jpg",img:"https://i-point.ru/storage/item/main/1314.jpg",name:"Apple iPad Pro 2022 11 Wi-Fi 128Gb Серый космос",price:"67990"},

        {id:103,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2597.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2648.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2649.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/2650.jpg",img:"https://i-point.ru/storage/item/main/1332.jpg",name:"Apple iPad 2022 Wi-Fi 64Gb Розовый",price:"29990"},
        {id:104,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2597.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2648.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2649.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/2650.jpg",img:"https://i-point.ru/storage/item/main/1336.jpg",name:"Apple iPad 2022 Wi-Fi 64Gb Жёлтый ",price:"29990"},

        
        {id:101,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2542.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2544.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2545.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/2546.jpg",img:"https://i-point.ru/storage/item/main/1309.jpg",name:"Apple iPad Pro 2022 11 Wi-Fi 256Gb Серебристый",price:"72990"},
        {id:102,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2597.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2544.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2545.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/2546.jpg",img:"https://i-point.ru/storage/item/main/1314.jpg",name:"Apple iPad Pro 2022 11 Wi-Fi 256Gb Серый космос",price:"72990"},

        {id:101,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2542.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2544.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2545.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/2546.jpg",img:"https://i-point.ru/storage/item/main/1309.jpg",name:"Apple iPad Pro 2022 11 Wi-Fi Wi-Fi + Cellular 128Gb Серебристый",price:"81990"},
        {id:102,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2597.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2544.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2545.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/2546.jpg",img:"https://i-point.ru/storage/item/main/1314.jpg",name:"Apple iPad Pro 2022 11 Wi-Fi Wi-Fi + Cellular 128Gb Серый космос",price:"81990"},
            

    ]
          return(
        <section className="default_for_buy">
            <div className="container">
            <div className="description_top_block">
            <p><Link to="/">Главная</Link> <span className="trans">> AirPods</span></p>
            <p className="buyDesc">Купить <span className="red">iPad</span></p>
           </div>
          
           <div className="iphone_flexCard">
          {
            card.map(c=>( <ListProduct smalImg1={c.smalImg1} smalImg4={c.smalImg4}smalImg3={c.smalImg3}smalImg2={c.smalImg2} SetBusket={SetBusket} id={c.id} count={c.count}id ={c.id}setBuy={setBuy} img={c.img} name={c.name} price={c.price} />))
          }
          
           </div>
           <div className="botom">
                <h1>Купить Apple iPad </h1>
        <p> iPad от компании Apple является планшетом, который завоевал доверие пользователей по всему миру. Известные экраны Retina, отличная камера и высокая производительность - всё это делает привлекательной любую модель планшета. В нашем интернет-магазине вы можете купить iPad на выгодных условиях.</p>
        <h1>Многофункциональный гаджет</h1>
        <p>iPad предпочитают использовать деловые люди, которые не представляют жизнь без почты, Интернета, заметок и планировщика заданий. Он пригодится как средство для развлечений: в AppStore вы найдёте множество увлекательных игр и приложений. iPad используют музыканты, профессионалы и новички: есть такие программы, как Garage Band, iMPC. Школьники и студенты читают доклады именно с планшетов. Представителям фирм iPad помогает в публичных выступлениях.</p>
       <h1>iOS: постоянно развивающаяся система</h1>
       <p>На Айпад установлена система iOS, которую многие пользователи считают самой быстродействующей. Для передачи данных с компьютера требуется программа iTunes: нужный контент всегда окажется на вашем iPad. Именно для iOS выпускается огромное количество приложений. А регулярные обновления системы делают её более быстрой и функциональной.</p>
        <h1>Цена iPad</h1>
        <p>Наш интернет магазин специализируется на продаже ноутбуков и моноблочных компьютеров производства компании Apple. Решая сделать покупку нового устройства именно у нас, вы получаете максимум преимуществ в виде разумной ценовой политики, официальной гарантии Apple и отсутствия необходимости долго ждать своего заказа. Получить дополнительную информацию и сделать заказ вы можете по телефону либо добавив товар в корзину и оставив заявку прямо на сайте интернет-магазина.
        </p>
                </div>
                    </div>
        </section>
    )
}
export default Ipad;