import Banner from "./Banner/Banner";
import "./Home.scss";
import Category from "./Category/Category";
import Products from "./../Products/Products";
import { useContext, useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { context } from "../../utils/context";

const Home = () => {
  const { categories, setCategories, products, setproducts } =
    useContext(context);
  console.log(categories, "its categories");

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);
  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((data) => {
      setproducts(data.data);
    });
  };
  console.log(products);
  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((data) => {
      setCategories(data.data);
    });
  };
  return (
    <div className="home-compo">
      <Banner />
      <div className="mainContent">
        <div className="layout">
          <Category />
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;
