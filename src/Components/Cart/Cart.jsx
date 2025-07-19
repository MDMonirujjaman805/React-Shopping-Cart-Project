import React from "react";

const Cart = ({ selectedProduct, handleDelete }) => {
  return (
    <div className="">
      {selectedProduct.map((cartItem) => (
        <div
          key={cartItem.id}
          className="my-4 shadow-gray-500 shadow-2xl rounded-2xl"
        >
          <img
            className="w-full object-cover h-40 rounded-2xl"
            src={cartItem.image}
            alt="image"
          />
          <div className="pl-2.5 pb-2">
            <h4 className="text-xl font-bold">Name: {cartItem.name}</h4>
            <p className="font-extralight text-xl">
              Description: {cartItem.description}
            </p>
            <div className="flex justify-center">
              <button
                className="py-1.5 px-5 my-2 bg-gray-400 cursor-pointer rounded-4xl"
                onClick={() => handleDelete(cartItem.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
