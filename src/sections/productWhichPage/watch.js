import "../productWhichPage/productMain.scss"
import { Link } from "react-router-dom";
import ListProduct from "../cardSection/ListProduct";
const Watch = ({setBuy,SetBusket})=>{
    const card = [
        {id:271,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2235.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2236.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2237.jpg",img:"https://i-point.ru/storage/item/main/1215.jpg",name:"Apple Watch Series 8, 41 мм корпус из алюминия «Тёмная ночь» ",price:"29990"},
        {id:273,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2244.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2245.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2246.jpg",img:"https://i-point.ru/storage/item/main/1217.jpg",name:"Apple Watch Series 8, 41 мм корпус из алюминия белого цвета",price:"29990"},
        {id:274,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2250.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2251.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2252.jpg",img:"https://i-point.ru/storage/item/main/1219.jpg",name:"Apple Watch Series 8, 41 мм корпус из алюминия цвета «сияющая звезда»",price:"29990"},
        {id:272,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2301.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2302.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2303.jpg",img:"https://i-point.ru/storage/item/main/1221.jpg",name:"Apple Watch Series 8, 41 мм корпус из алюминия PRODUCT)RED",price:"29990"},
       
        {id:290,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2271.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2272.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2273.jpg",img:"https://i-point.ru/storage/item/main/1259.jpg",name:"Apple Watch Ultra GPS + Cellular, 49 мм корпус из титана",price:"65990"},
        {id:291,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2259.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2260.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2261.jpg",img:"https://i-point.ru/storage/item/main/1255.jpg",name:"Apple Watch Ultra GPS + Cellular, 49 мм корпус из титана",price:"65990"},
        
        {id:275,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2235.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2236.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2237.jpg",img:"https://i-point.ru/storage/item/main/1215.jpg",name:"Apple Watch Series 8, 45 мм корпус из алюминия «Тёмная ночь» ",price:"32990"},
        {id:276,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2244.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2245.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2246.jpg",img:"https://i-point.ru/storage/item/main/1217.jpg",name:"Apple Watch Series 8, 45 мм корпус из алюминия белого цвета",price:"32990"},
        {id:277,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2250.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2251.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2252.jpg",img:"https://i-point.ru/storage/item/main/1219.jpg",name:"Apple Watch Series 8, 45 мм корпус из алюминия цвета «сияющая звезда»",price:"32990"},
        {id:278,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2301.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2302.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2303.jpg",img:"https://i-point.ru/storage/item/main/1221.jpg",name:"Apple Watch Series 8, 45 мм корпус из алюминия PRODUCT)RED",price:"32990"},
       
        {id:279,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2295.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2296.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2297.jpg",img:"https://i-point.ru/storage/item/main/1267.jpg",name:"Apple Watch SE 2022, 40 мм корпус из алюминия серебристого цвета ",price:"22990"},
        {id:280,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2286.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2287.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2288.jpg",img:"https://i-point.ru/storage/item/main/1263.jpg",name:"Apple Watch SE 2022, 44 мм корпус из алюминия цвета «сияющая звезда»",price:"24990"},
        {id:281,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2298.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2299.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2300.jpg",img:"https://i-point.ru/storage/item/main/1268.jpg",name:"Apple Watch SE 2022, 44 мм корпус из алюминия  серебристого цвета",price:"24990"},
        {id:282,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2292.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2293.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2294.jpg",img:"https://i-point.ru/storage/item/main/1266.jpg",name:"Apple Watch SE 2022, 44 мм корпус из алюминия «Тёмная ночь»",price:"24990"},
       

    ]
          return(
        <section className="default_for_buy">
            <div className="container">
            <div className="description_top_block">
            <p><Link to="/">Главная</Link> <span className="trans">> AirPods</span></p>
            <p className="buyDesc">Купить <span className="red">Apple Watch</span></p>
           </div>
          
           <div className="iphone_flexCard">
          {
            card.map(c=>( <ListProduct smalImg1={c.smalImg1} smalImg4={c.smalImg4}smalImg3={c.smalImg3}smalImg2={c.smalImg2} SetBusket={SetBusket} id={c.id} count={c.count}id ={c.id}setBuy={setBuy} img={c.img} name={c.name} price={c.price} />))
          }
          
           </div>
           <div className="botom">
                <h1>Watch в  Istore </h1>
        <p> Apple Watch - это носимые умные часы, которые позволяют пользователям выполнять различные задачи, в том числе совершать телефонные звонки, отправлять текстовые сообщения и читать электронную почту. Apple выпустила первые Apple Watch 24 апреля 2015 года.</p> 
        <h1>Подключение</h1>
        <p>Чтобы функционировать, Apple Watch должны быть подключены к iPhone 5 или более поздней версии под управлением iOS 8.2 или более поздней версии и находиться на расстоянии около 10 метров. Помимо использования соединения Bluetooth, часы могут также соединяться с iPhone если они находятся в той же сети Wi-Fi. Приложение Apple Watch для iPhone позволяет пользователям изменять настройки часов, изменять порядок отображения приложений, оптимизировать уведомления и загружать новые приложения.

Часы также оснащены модулем NFC, что позволяет пользователям оплачивать покупки непосредственно часами, с помощью встроенного приложения Apple Pay.</p>
               <h1>Взаимодействие</h1>
               <p>Интерфейс Apple Watch был разработан специально для использования на запястье, а навигация осуществляется прикосновениями пальцев. Цифровая коронка - это физический навигационный диск, расположенный на боковой панели часов, который увеличивает контент, прокручивает и вводит данные.

Также в Apple Watch встроен чувствительный микрофон, что позволяет пользователям взаимодействовать с часами при помощи голосовых команд, в том числе отвечать на звонки и записывать голосовые сообщения.</p>
          <h1>Возможности и приложения</h1>
          <p>Синхронизация часов позволяет пользователям запускать задачу на Apple Watch и завершать ее на своем iPhone. Например, пользователи не могут написать электронное письмо на часах, но они могут попросить цифрового помощника Siri написать электронное письмо, и оно передаст выполнение этого процесса на iPhone.

Большинство текущих приложений от Apple являются переработанными приложениями для iPhone, как, например, «Сообщения», однако некоторые встроенные приложения были разработаны специально для часов, включая Activity, Workout и Camera Remote. Сторонние приложения включают в себя социальные сети и приложения для авиакомпаний и отелей, которые позволяют пользователю регистрироваться через Apple Watch. Корпоративные приложения включают, например, Evernote, который позволяет пользователям диктовать информацию часам, и Salesforce1, который предоставляет информацию о взаимодействии с клиентами в режиме реального времени.</p>
          <h1>Цена Apple Watch</h1>
          <p>Несмотря на то, что Apple Watch являются самым совершенным устройством в классе умных часов, у компании Apple получается делать их вполне доступными для потребителей. Они составляют адекватную ценовую конкуренцию устройствам других производителей и остаются бескомпромиссным решением для владельцев IPhone.</p>
                </div>
                    </div>
        </section>
    )
}
export default Watch;