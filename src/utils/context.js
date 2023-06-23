import { createContext, useState } from "react";

export const context = createContext();

const Appcontext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setproducts] = useState();
  return (
    <context.Provider
      value={{
        categories,
        setCategories,
        products,
        setproducts,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default Appcontext;
