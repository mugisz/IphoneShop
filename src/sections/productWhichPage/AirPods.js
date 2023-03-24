import "../productWhichPage/productMain.scss"
import { Link } from "react-router-dom";
import ListProduct from "../cardSection/ListProduct";
const Iphone = ({setBuy,SetBusket})=>{
    const card = [
        {id:61,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/accs_307.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/accs_306.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/accs_309.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/accs_310.jpg",img:"https://i-point.ru/storage/item/main/accs_10022.jpg",name:"Apple AirPods(2019)",price:"9990"},
        {id:62,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/1009.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/1010.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/1011.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/1012.jpg",img:"https://i-point.ru/storage/item/main/853.jpg",name:"Apple AirPods(2021)",price:"14490"},
        {id:63,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/2188.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/2189.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/2190.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/2191.jpg",img:"https://i-point.ru/storage/item/main/237.jpg",name:"Наушники Apple AirPods Pro",price:"15590"},
        {id:64,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/1009.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/1010.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/1011.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/1012.jpg",img:"https://i-point.ru/storage/item/main/1180.jpg",name:"Наушники Apple AirPods Pro(2022)",price:"18590"},
        {id:65,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/627.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/628.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/629.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/626.jpg",img:"https://i-point.ru/storage/item/main/583.jpg",name:"Наушники Apple AirPods Max Серый-Космос",price:"53590"},

        {id:66,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/627.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/628.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/629.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/626.jpg",img:"https://i-point.ru/storage/item/main/584.jpg",name:"Наушники Apple AirPods Max Голубое-Небо",price:"53590"},
        {id:67,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/630.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/631.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/632.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/626.jpg",img:"https://i-point.ru/storage/item/main/585.jpg",name:"Наушники Apple AirPods Max Розовый",price:"53590"},
        {id:68,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/633.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/634.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/635.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/626.jpg",img:"https://i-point.ru/storage/item/main/586.jpg",name:"Наушники Apple AirPods Max Серебристий",price:"53590"},
        {id:69,count:1,smalImg1:"https://i-point.ru/storage/gallery/big/636.jpg",smalImg2:"https://i-point.ru/storage/gallery/big/637.jpg",smalImg3:"https://i-point.ru/storage/gallery/big/638.jpg",smalImg4:"https://i-point.ru/storage/gallery/big/626.jpg",img:"https://i-point.ru/storage/item/main/582.jpg",name:"Наушники Apple AirPods Max Зелёный",price:"53590"},
      ]
          return(
        <section className="default_for_buy">
            <div className="container">
            <div className="description_top_block">
            <p><Link to="/">Главная</Link> <span className="trans">> AirPods</span></p>
            <p className="buyDesc">Купить <span className="red">AirPods</span></p>
           </div>
          
           <div className="iphone_flexCard">
          {
            card.map(c=>( <ListProduct smalImg1={c.smalImg1} smalImg4={c.smalImg4} smalImg3={c.smalImg3} smalImg2={c.smalImg2} SetBusket={SetBusket} id={c.id} count={c.count}id ={c.id}setBuy={setBuy} img={c.img} name={c.name} price={c.price} />))
          }
          
           </div>
           <div className="botom">
            <h1>Купить Apple AirPods</h1>
            <p>AirPods - это интеллектуальный дизайн в сочетании с передовыми технологиями. Кристально чистый звук, функция вызова Siri голосом, до 3 часов в режиме разговора без подзарядки и все это по доступной цене. Просто вытащите их из футляра, и они будут готовы к использованию с вашим iPhone, Apple Watch, iPad или Mac.</p>
            <h1> Настройка в одно касание.</h1>
            <p>Простое и быстрое подключение к любому девайсу. Специальные сенсоры позволяют наушникам определять момент, когда вы снимаете их и останавливать воспроизведение. Простота и удобство в использовании.
            </p>
<h1>Великолепное качество звука.</h1>
<p>Специально созданные драйвера с низким уровнем искажений обеспечивает мощные басы, а сверхэффективный усилитель с широким динамическим диапазоном обеспечивает невероятно чистый звук, а также увеличивает время автономной работы.
</p>
<h1>Больше волшебства.</h1>
<p>Чип H1, разработанный Apple, обеспечивает невероятно низкую задержку звука, стабильную и быструю передачу данных. В зависимости от того, используете вы один или два наушника, чип H1 автоматически распределяет аудио и включает микрофон соответствующим образом. А когда вы говорите по телефону или пользуетесь Siri, дополнительный акселерометр обнаружения голосовой активности и микрофоны с изменяемой диаграммой направленности убирают внешний шум и обеспечивают чистое звучание вашего голоса.
</p>
<h1>Верный помощник Siri.</h1>
<p>Нужно что-то узнать? Просто скажите “Привет, Siri”, чтобы найти ответы на все вопросы. Функция “Обновление о сообщениях” позволяет Siri читать ваши сообщения через AirPods, чтобы не отвлекать вас от дел и не брать телефон в руки. Функция Audio Sharing позволяет вам совместно прослушивать музыку на двух наборах AirPods. Меняйте громкость индивидуально и наслаждайтесь любимой музыкой вместе.
</p>
<h1>Особенности Pro версии.</h1>
<p>Технология шумоподавления AirPods Pro блокирует звуки окружающую среды, поэтому вы можете сосредоточиться на том, что слушаете. Прозрачный режим позволяет впустить внешние звуки, позволяя вам слышать все, что происходит в вашем окружении. В комплекте три пары амбушюр, с помощью которых можно подобрать лучшую посадку, а с датчиками нажатия можно переключать песни или выбирать режимы.

Покупая в нашем магазине AirPods, вы можете быть уверены, что приобретаете оригинальную продукцию по лучшим ценам.</p>
           </div>
            </div>
        </section>
    )
}
export default Iphone;