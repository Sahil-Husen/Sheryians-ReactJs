import { useEffect, useState } from "react";
import axios from "../Utils/Axios";

function Services() {
  const [first, setFirst] = useState([]); // Initialize as an empty array
  const [second, setSecond] = useState("this is second data");

  const getUser = () => {
    axios
      .get("/users")
      .then((response) => {
        console.log(response);
        setFirst(response.data); // Assuming response.data is an array
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
    console.log("Service component is created.");

    return () => {
      console.log("Service component is deleted");
    };
  }, [second]);

  return (
    <div className="mt-10 flex justify-center items-start ">
      <h1 className="m-0 ">Users Data:</h1>

      <ul>
        {first.length > 0 ? (
          first.map((p, index) => (
            <li className="bg-zinc-500 w-[100vw]  text-white p-5 m-5" key={index}>
              {p.password
              }
            </li>
          ))
        ) : (
          <h1>Loading....</h1>
        )}
      </ul>

      {/* <h1 className="m-5">{second}</h1>
      <button
        onClick={() => setSecond("second changed my sahil")}
        className="py-2 px-3 bg-blue-500 text-white rounded-md"
      >
        {second}
      </button> */}
    </div>
  );
}

export default Services;
