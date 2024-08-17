import axios from "axios";
import { useState} from "react";

function Show() {
  const [products, setproducts] = useState([]);

  const getProduct = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .get(api)
      .then((products) => {
        console.log(products);
        setproducts(products.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

//  useEffect(() => {
//    console.log('Show is created')
 
//    return () => {
//      console.log('home is deleted');
//    }
//  }, [])
   


  return (
    <div>
      <button
        className="bg-blue-600 py-2 px-3 rouded-md text-white m-10"
        onClick={() => getProduct()}
      >
        Click me
      </button>
      <ul>
        {products.length > 0 ? (
          products.map((p, index) => (
            <li className="bg-zinc-300 p-5 m-5" key={index}>
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
