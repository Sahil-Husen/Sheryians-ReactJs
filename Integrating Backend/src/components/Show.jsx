 import axios from "../Utils/Axios";
import { useState,useEffect} from "react";

function Show() {
  const [products, setproducts] = useState([]);

  const getProduct = () => {
    // const api = "/products";
    axios
      .get("/products")
      .then((products) => {
        console.log(products);
        setproducts(products.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
 useEffect(()=>{
    // HERE I PASS MY GETpRODUCT FUNTION THAT IS CALLED WITHOUT ANY CLICK IT LOAD OUR DATA WHEN PAGE IS LOAD
    getProduct()
 },[])
//  useeffect me jab square bracket pass krte hai tab ye unwanted  RENDERING KO STOP KR DETA HAI
   


  return (
    <div className="w-full h-full">
      
      <ul>
        {products.length > 0 ? (
          products.map((p, index) => (
            <li className="bg-zinc-500 text-white p-5 m-5" key={index}>
              {p.title}
            </li>
          ))
        ) : (
          <h1>Loading....</h1>
        )}
      </ul>
    </div>
  );
}

export default Show;
