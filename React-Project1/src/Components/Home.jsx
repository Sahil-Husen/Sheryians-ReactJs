import Nav from "../Components/Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../Utils/Context";
import { useContext, useEffect, useState, useCallback } from "react";
import Loading from "./Loading";
import axios from "../Utils/Axios";

function Home() {
  const [products] = useContext(ProductContext);
  const [filteredProduct, setFilteredProduct] = useState(null);

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const category = params.get("category");

  const getProductCategory = useCallback(async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilteredProduct(data);
    } catch (error) {
      console.error("Error fetching category products:", error);
    }
  }, [category]);

  useEffect(() => {
    if (!category || category === "undefined") {
      setFilteredProduct(products);
    } else {
      getProductCategory();
    }
  }, [category, products, getProductCategory]);

  return products ? (
    <>
      <Nav />
      <div className="w-[85%] p-2 flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProduct &&
          filteredProduct.map((p, i) => (
            <Link
              key={i}
              to={`/details/${p.id}`}
              className="card m-3 border shadow h-[40vh] w-[21%] rounded flex justify-around items-center flex-col"
            >
              <div
                className="hover:scale-110 w-full bg-contain bg-no-repeat h-[80%] bg-center"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="hover:font-semibold hover:text-blue-600 p-4">
                {p.title}
              </h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
