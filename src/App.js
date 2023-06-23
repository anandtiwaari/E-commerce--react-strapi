import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Category from "./components/Home/Category/Category";
import Category from "./components/Category/Category";
import Product from "./components/Products/Product/Product";
import Home from "./components/Home/Home";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Appcontext from "./utils/context";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Appcontext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Routes>
          <Newsletter />
          <Footer />
        </Appcontext>
      </BrowserRouter>
    </div>
  );
}

export default App;
