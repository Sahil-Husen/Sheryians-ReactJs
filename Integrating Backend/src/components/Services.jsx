import { useEffect, useState } from "react";

function Services() {
  const [first, setfirst] = useState("this is normal data");
  const [second, setSecond] = useState("this is second data");

  useEffect(() => {
    console.log("Service component is created is created");

    return () => {
      console.log("Service component is deleted");
    };
  });

  return (
    <div className="mt-10 flex justify-center items-center">
      <h1 className="m-5">{first}</h1>
      <button
        onClick={() => setfirst("first changed my sahil")}
        className="py-2 px-3 bg-blue-500 text-white rounded-md"
      >
        {first}
      </button>

      <h1 className="m-5">{second}</h1>
      <button
        onClick={() => setSecond("second changed my sahil")}
        className="py-2 px-3 bg-blue-500 text-white rounded-md"
      >
        {second}
      </button>
    </div>
  );
}

export default Services;
