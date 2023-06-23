import Products from "../Products/Products";
import "./Category.scss";
import { useParams } from "react-router-dom";
import { context } from "../../utils/context";
import { useContext } from "react";
const Category = () => {
  const newcontext = useContext(context);
  const { products } = useContext(context);
  const { id } = useParams();
  console.log(newcontext.products, "Productssss.....");
  let CategoryProducts = newcontext?.categories?.find((data) => {
    return data.id == id;
  });
  let CategoryProductss = newcontext?.products?.filter((data) => {
    return data.attributes.categories.data[0].id == id;
  });
  console.log(CategoryProductss, "////////");
  // console.log(CategoryProducts, "shioww");
  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">
          {CategoryProducts?.attributes?.title}
        </div>
        <Products
          CategoryProducts={CategoryProducts}
          CategoryProductss={CategoryProductss}
        />
      </div>
    </div>
  );
};

export default Category;
