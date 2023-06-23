import Product from "./Product/Product";
import "./Products.scss";
import dav from "../../assets/products/earbuds-prod-1.webp";
const Products = ({ CategoryProducts, CategoryProductss }) => {
  CategoryProductss?.map((data) => {
    return data.attributes?.img?.data.map((imgData) => {
      return console.log(imgData.attributes.url, "bilkulll");
    });
    // return console.log(
    //   data.attributes?.img?.data[0]?.attributes?.url,
    //   ".....////"
    // );
  });
  // CategoryProducts?.map((data) => {
  //   console.log(data);
  // });
  return (
    <div className="products-container">
      <div className="src-heading">
        <div className="products">
          {CategoryProductss?.map((data) => {
            return (
              <Product
                title={data.attributes.title}
                price={data.attributes.price}
                description={data.attributes.description}
                // dav
                image={
                  data.attributes?.img?.data === null
                    ? data.attributes?.img?.data
                    : data.attributes?.img?.data.map((imgData) => {
                        return imgData.attributes.url;
                      })
                }
              />
            );
          })}

          {/* <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product /> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
