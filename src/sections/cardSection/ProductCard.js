
import { Link } from "react-router-dom";
const ProductCard = ({img,price,cat,name})=>{
    let links =""
    if(cat == "Смартфоны")
        links = "iphone"
    else if(cat == "Беспроводные наушники")
        links = "airpods"
    else if(cat == "Компьютеры")
        links = "mac"
     else if(cat == "Часы")
        links = "appleWatch"
        else if(cat == "Планшеты")
        links = "Ipad"
   
    return(
        <div className="product_card">
            <Link to={`/${links}`}>
                            <img src={img} alt="" />
                            <h2>{name}</h2>
                            <p className="category_card">{cat}</p>
                            <p className="price_card">{price}</p>
                            </Link>
                        </div>
    )
}
export default ProductCard;
