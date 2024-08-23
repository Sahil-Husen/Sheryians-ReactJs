import { useContext } from "react";
import { ProductContext } from "../Utils/Context";
import { Link } from "react-router-dom";

function Nav() {
  const [products] = useContext(ProductContext);

  let distinct_category =
    products && products.reduce((acc, cur) => [...acc, cur.category], []);

  distinct_category = [...new Set(distinct_category)];
  // console.log(distinct_category);

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()})`;
  };
  // console.log(color());

  return (
    <nav className="w-[15%] h-full bg-zinc-200 shadow border  flex flex-col items-center pt-5 ">
      <a href="" className="py-2 px-5 border border-black ">
        Add new Product.
      </a>
      <hr className="my-3 w-[80%] " />
      <h1 className="text-2xl font-semibold">Category Filter</h1>

      <div className="w-[80%] ">
        {distinct_category.map((p, i) => (
          <Link
            key={i}
            to={`/?category=${p}`}
            className="flex items-center m-2 gap-2"
          >
            <span
              style={{ backgroundColor: color() }}
              className="w-[15px] h-[15px]  block rounded-full bg-blue-400 "
            ></span>
            {p}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
