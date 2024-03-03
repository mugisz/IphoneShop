import { Link } from "react-router-dom";
const ProductCard = ({ img, price, cat, name }) => {
  let links = "";
  if (cat == "Смартфони") links = "iphone";
  else if (cat == "Безпровідні навушники") links = "airpods";
  else if (cat == "Компютери") links = "mac";
  else if (cat == "Годиники") links = "appleWatch";
  else if (cat == "Планшети") links = "Ipad";

  return (
    <div className="product_card">
      <Link to={`/${links}`}>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p className="category_card">{cat}</p>
        <p className="price_card">{price}</p>
      </Link>
    </div>
  );
};
export default ProductCard;
