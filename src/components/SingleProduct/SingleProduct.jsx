import "./SingleProduct.scss";
import prod from "../../assets/products/earbuds-prod-1.webp";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
const SingleProduct = () => {
  return (
    <div>
      <div className="single-product-main-content">
        <div className="layout">
          <div className="single-product-page">
            <div className="left">
              <img src={prod} />
            </div>
            <div className="right">
              <span className="name">product Name</span>
              <span className="price">&#8377;price</span>
              <span className="desc">product description</span>

              <div className="cart-buttons">
                <div className="quantity-buttons">
                  <span
                  //   onClick={decrement}
                  >
                    -
                  </span>
                  <span>quantity</span>
                  <span
                  //   onClick={increment}
                  >
                    +
                  </span>
                </div>
                <button
                  className="add-to-cart-button"
                  //   onClick={() => {
                  //     handleAddToCart(data?.data?.[0], quantity);
                  //     setQuantity(1);
                  //   }}
                >
                  <FaCartPlus size={20} />
                  ADD TO CART
                </button>
              </div>

              <span className="divider" />
              <div className="info-item">
                <span className="text-bold">
                  Category: <span>category title</span>
                </span>
                <span className="text-bold">
                  Share:
                  <span className="social-icons">
                    <FaFacebookF size={16} />
                    <FaTwitter size={16} />
                    <FaInstagram size={16} />
                    <FaLinkedinIn size={16} />
                    <FaPinterest size={16} />
                  </span>
                </span>
              </div>
            </div>
          </div>
          {/* <RelatedProducts
            productId={id}
            categoryId={product.categories.data[0].id}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
