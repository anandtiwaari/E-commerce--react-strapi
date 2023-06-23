import "./Header.scss";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, [scrolled]);
  return (
    <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
      <div className="header-content">
        <ul className="left">
          <li>Home</li>
          <li>About</li>
          <li>categories</li>
        </ul>
        <div className="center">Anand store</div>
        <div className="right">
          <TbSearch />
          <AiOutlineHeart />
          <span>
            <CgShoppingCart />
            <span className="cart-item-count">12</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
