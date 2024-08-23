import React, { useContext, useState } from "react";
import { ProductContext } from "../Utils/Context";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

function Create() {
  const [products, setProducts] = useContext(ProductContext);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length <1 ||
      price < 5 ||
      description.trim().length < 5
    ) {
      alert("Please Provide Complete Information");
      return;
    }

    // Create a new product object
    const newProduct = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };

    // Update the products state with the new product
    setProducts([...products, newProduct]);
    toast.success("Product is added");
    console.log(newProduct);
  
    console.log(products);

    // Optionally, clear the form fields after submission
    setTitle("");
    setImage("");
    setCategory("");
    setPrice("");
    setDescription("");
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="p-[5%] w-screen h-screen flex flex-col gap-10 items-center"
    >
      <h1 className="text-3xl">Add Products</h1>

      <input
        type="url"
        placeholder="Image URL"
        className="text-1xl bg-zinc-100 p-2 w-1/2"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        className="text-1xl bg-zinc-100 p-2 w-1/2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="flex gap-2 w-1/2">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl bg-zinc-100 p-2 w-1/2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          className="text-1xl bg-zinc-100 p-2 w-1/2"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <textarea
        className="text-1xl bg-zinc-100 p-2 w-1/2"
        rows="5"
        placeholder="Enter product description here"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <div className="w-1/2">
        <button type="submit" className="py-2 px-5 border border-black">
          Add New Product
        </button>
      </div>
    </form>
  );
}

export default Create;
