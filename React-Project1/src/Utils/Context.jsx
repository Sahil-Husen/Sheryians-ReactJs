import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "./Axios";

export const ProductContext = createContext();

function Context(props) {
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    try {
      const { data } = await axios("/products"); //this is the only path that we are going to pass coz we had already put the base url in the axios

      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}{" "}
    </ProductContext.Provider>
  );
}

export default Context;
