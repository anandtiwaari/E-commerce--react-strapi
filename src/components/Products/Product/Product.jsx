import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
const Product = ({ title, price, description, image }) => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={process.env.REACT_APP_DEV_URL + image} alt="" />
      </div>
      <div className="product-details">
        <div className="name">{title}</div>
        <div className="price">&#8377;{price}</div>
      </div>
    </div>
  );
};

export default Product;
