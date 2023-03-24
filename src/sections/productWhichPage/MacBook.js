import "../productWhichPage/productMain.scss"
import { Link } from "react-router-dom";
import ListProduct from "../cardSection/ListProduct";
const MacBook = ({setBuy,SetBusket})=>{
    const card = [
        {id:71,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2062.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2063.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2064.jpg",img:"https://i-point.ru/storage/item/main/1114.jpg",name:"Apple MacBook Pro 2022 13 M2 8Gb/256Gb Серый космос",price:"101990"},
        {id:73,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/3074.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/3075.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/3075.jpg",img:"https://i-point.ru/storage/item/main/1153.jpg",name:"Apple MacBook Air 2022 13 8Gb/512Gb Серебристый",price:"121990"},
        {id:74,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/3086.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/3087.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/3088.jpg",img:"https://i-point.ru/storage/item/main/1128.jpg",name:"Apple MacBook Air 2022 13 8Gb/256Gb Серый космос ",price:"94990"},
        {id:72,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/611.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/612.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/613.jpg",img:"https://i-point.ru/storage/item/main/574.jpg",name:"Apple MacBook Air 2020 13 М1 8Gb/256Gb Серый космос (MGN63/A)",price:"77990"},

        {id:76,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/665.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/666.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/667.jpg",img:"https://i-point.ru/storage/item/main/592.jpg",name:"Apple Mac mini M1, 2020 8Gb/512Gb (MGNT3)",price:"80990"},
        {id:77,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/1180.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/1181.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/1182.jpg",img:"https://i-point.ru/storage/item/main/856.jpg",name:"Apple MacBook Pro 2021 14 M1 Pro 16Gb/512Gb «Серый космос» ",price:"125990"},
        
        {id:72,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/611.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/612.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/613.jpg",img:"https://i-point.ru/storage/item/main/574.jpg",name:"Apple MacBook Air 2020 13 М1 8Gb/256Gb Серый космос (MGN63/A)",price:"77990"},

        {id:78,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/870.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/871.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/872.jpg",img:"https://i-point.ru/storage/item/main/708.jpg",name:"Apple iMac 24 Retina 4,5K M1 3.06 ГГц 8Gb/256Gb Синий",price:"138990"},

        {id:78,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/870.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/871.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/872.jpg",img:"https://i-point.ru/storage/item/main/708.jpg",name:"Apple iMac 24 Retina 4,5K M1 3.06 ГГц8Gb/512Gb Синий",price:"158990"},
        
        {id:78,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/870.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/871.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/872.jpg",img:"https://i-point.ru/storage/item/main/708.jpg",name:"Apple iMac 24 Retina 4,5K M1 3.06 ГГц 16Gb/1Tb  Синий",price:"175990"},

        {id:79,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/1176.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/1177.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/1179.jpg",img:"https://i-point.ru/storage/item/main/857.jpg",name:"Apple MacBook Pro 2021 14 M1 Pro 16Gb/1Tb «Серебристый»",price:"158990"},
        {id:81,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/1176.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/1177.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/1179.jpg",img:"https://i-point.ru/storage/item/main/857.jpg",name:"Apple MacBook Pro 2021 14 M1 Pro 8Gb/512Tb «Серебристый»",price:"128990"},
        {id:80,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/885.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/886.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/888.jpg",img:"https://i-point.ru/storage/item/main/710.jpg",name:"Apple iMac 24 Retina 4,5K M1 3.06 ГГц 8Gb/256Gb Розовый",price:"138990"},
        {id:82,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/885.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/886.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/888.jpg",img:"https://i-point.ru/storage/item/main/710.jpg",name:"Apple iMac 24 Retina 4,5K M1 3.06 ГГц 8Gb/512Gb Розовый",price:"158990"},
        {id:80,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/885.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/886.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/888.jpg",img:"https://i-point.ru/storage/item/main/710.jpg",name:"Apple iMac 24 Retina 4,5K M1 3.06 ГГц 16Gb/1Tb Розовый",price:"175990"},

        {id:76,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/665.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/666.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/667.jpg",img:"https://i-point.ru/storage/item/main/1394.jpg",name:"Apple Mac Studio 2022 M1 Max 32Gb/512Gb Серебристый",price:"140990"},
    ]
          return(
        <section className="default_for_buy">
            <div className="container">
            <div className="description_top_block">
            <p><Link to="/">Главная</Link> <span className="trans">> MacBook</span></p>
            <p className="buyDesc">Купить <span className="red">MacBook</span></p>
           </div>
          
           <div className="iphone_flexCard">
          {
            card.map(c=>( <ListProduct smalImg1={c.smalImg1} smalImg4={c.smalImg4}smalImg3={c.smalImg3}smalImg2={c.smalImg2} SetBusket={SetBusket} id={c.id} count={c.count}id ={c.id}setBuy={setBuy} img={c.img} name={c.name} price={c.price} />))
          }
          
           </div>
           <div className="botom">
           <h1>Купить Apple Mac  </h1>
<p> Продукция компании Apple – синоним высокого качества, престижности и отменных технических характеристик. Детище Стива Джобса и после своего вдохновителя старается оставаться на острие технологий, предлагая своим почитателям самые лучшие предложения и задавая ориентир для других конкурентов.
</p>
<h1>Apple Mac – надежный помощник для работы, учебы и отдыха</h1>
<p>Кроме привычных смартфонов компания активно развивает и другие направления. В первую очередь, речь о ноутбуках и моноблоках iMac, которые завоевали положительную репутацию у пользователей за счет своей быстроты, удобства и практичности.

Например, ноутбуки MacBook не нуждаются в особом представлении и получили заслуженную популярность среди бизнесменов, студентов, программистов, менеджеров среднего звена и других групп лиц. Причина в успешности собственной операционной системы, отличных технических характеристиках, которым под силу работать с тяжелыми приложениями, большим количеством окон браузера или офисных программ. Весьма впечатляюще и время автономной работы за счет емкой батареи. Одновременно ноутбуки Apple Mac предельно компактны и значительно легче аналогов других производителей, что позволит их легко брать с собой в сумке в дорогу, командировку или поездку.

Не менее популярны среди пользователей и настольные варианты компьютеров iMac. Их преимущество в моноблочном исполнении, что экономит время на рабочем столе и рядом с ним, чем грешат классические версии персональных компьютеров. Одновременно подобная техника интересна по технических характеристикам, хотя в этом направлении Apple выпускает новинки значительно реже, что обусловлено емкостью рынка. Вместе с этим iMac прекрасно подходят самым разным людям, начиная со студентов и заканчивая руководителями бизнеса. Также ему найдется место в обычной малогабаритной квартире, что позволит играть в привычные игры и готовить рабочие отчеты, оформлять курсовую или дипломную работу, смотреть видео.
</p>
<h1>Цена Мас</h1>
<p>Наш интернет магазин специализируется на продаже ноутбуков и моноблочных компьютеров производства компании Apple. Решая сделать покупку нового устройства именно у нас, вы получаете максимум преимуществ в виде разумной ценовой политики, официальной гарантии Apple и отсутствия необходимости долго ждать своего заказа. Получить дополнительную информацию и сделать заказ вы можете по телефону либо добавив товар в корзину и оставив заявку прямо на сайте интернет-магазина.
</p>
           </div>
            </div>
        </section>
    )
}
export default MacBook;