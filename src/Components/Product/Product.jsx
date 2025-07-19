import React from "react";

const Product = ({ product, handleSelectedProduct }) => {
  // console.log(product);
  const { image, name, price, category, description, isFeature } = product;
  return (
    <div className="bg-gray-200 space-y-3 rounded-3xl shadow-gray-500 shadow-2xl">
      <img
        className="w-full object-cover h-72 rounded-2xl"
        src={image}
        alt="image"
      />
      <div className="pl-2.5 pb-2">
        <h4 className="text-3xl font-bold">Name: {name}</h4>
        <h6 className="text-xl font-medium">Price: {price}$</h6>
        <p className="cursor-pointer underline">Category: {category}</p>
        <p className="font-medium">Description: {description}</p>
        <p>{isFeature ? "Feature Category" : "Not Category"}</p>
      </div>
      <div className="my-4 flex justify-center">
        <button
          className="bg-gray-400 px-3.5 py-2 rounded-4xl font-bold cursor-pointer"
          onClick={() => handleSelectedProduct(product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
export default Product;
