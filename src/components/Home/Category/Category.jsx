import "./Category.scss";
import cart1 from "../../../assets/category/cat-1.jpg";
import cart2 from "../../../assets/category/cat-2.jpg";
import cart3 from "../../../assets/category/cat-3.jpg";
import cart4 from "../../../assets/category/cat-4.jpg";
import { context } from "../../../utils/context";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Category = () => {
  const newcontext = useContext(context);
  console.log(newcontext);
  return (
    <div className="shop-by-category">
      <div className="categories">
        {newcontext.categories?.map((data) => {
          console.log(
            process.env.REACT_APP_DEV_URL +
              data.attributes?.img?.data.attributes.url
          );
          return (
            <Link to={`/category/${data.id}`}>
              <div className="category">
                <img
                  src={
                    process.env.REACT_APP_DEV_URL +
                    data.attributes?.img?.data.attributes.url
                  }
                  alt=""
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
