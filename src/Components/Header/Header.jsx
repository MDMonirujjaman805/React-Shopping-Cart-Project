import React from "react";

const Header = ({ selectedProduct, price }) => {
  // console.log(selectedProduct);
  return (
    <div className="flex justify-between text-3xl bg-gray-300 mt-6 py-2 px-2 cursor-pointer">
      <h3 className="font-bold ">Logo</h3>
      <div className="flex gap-x-8">
        <h1>Home</h1>
        <h3>Product</h3>
        <h5>Cart: {selectedProduct}</h5>
        <p>$ {price}</p>
      </div>
    </div>
  );
};

export default Header;
