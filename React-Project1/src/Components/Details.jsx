import { useContext, useEffect, useState } from "react";
import { Link,  useParams } from "react-router-dom";
import axios from "../Utils/Axios"; 
// Correct import for axios
import Loading from "./Loading";
import { ProductContext } from "../Utils/Context";



function Details() {

  const [products, setProduct] = useContext(ProductContext);


 
  const [product, setProducts] = useState(null);
  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`); // Adjust the endpoint as necessary
      setProducts(data);
    } catch (error) {
      console.log("Error fetching product details:", error);
    }
  };

  useEffect(() => {

     
    getSingleProduct();




  }, [id]); // Add `id` to the dependency array to ensure `getSingleProduct` runs when `id` changes

  return product ? (
    <div className="w-[80%] h-full flex items-center justify-center gap-10 m-auto p-[10%]">
      <img
        className="w-[40%] object-contain"
        src={product.image} // Dynamically set the image source
        alt={product.title} // Use the product title as the alt text
      />

      <div className="content w-[50%]">
        <h1 className="text-2xl font-semibold">{product.title}</h1>

        <h3 className="text-blue-600 my-2 font-bold opacity-50">
          {product.category}
        </h3>
        <h2 className="text-red-300 font-semibold mb-3">${product.price}</h2>

        <p className="font-medium mb-10">{product.description}</p>

        <Link   className="py-2 px-5 border border-black m-5 rounded bg-blue-200 font-semibold">
          Back
        </Link>
        <Link className="py-2 px-5 border border-black m-5 rounded bg-blue-200 font-semibold">
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loading /> // Show Loading component while data is being fetched
  );
}

export default Details;
