import React from "react";
import Cart from "../Cart/Cart";
import About from "../About/About";

const CartContainer = ({
  handleIsActiveStatus,
  isActive,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold flex justify-center">Cart Container</h2>
      <div className="flex justify-around mt-5">
        <button
          className={`${isActive.cart ? "btn2" : "btn"}`}
          onClick={() => handleIsActiveStatus("cart")}
        >
          CART
        </button>
        <button
          className={`${isActive.cart ? "btn" : "btn2"}`}
          onClick={() => handleIsActiveStatus("about")}
        >
          ABOUT
        </button>
      </div>
      <div className="mt-3 space-y-2 font-bold text-2xl bg-gray-100 p-5 rounded-3xl">
        {
            isActive.cart?<Cart></Cart>:<About></About>
        }
     
      
      </div>
    </div>
  );
};

export default CartContainer;
