import { useState } from "react";
import "./App.css";
import AllProducts from "./Components/AllProducts/AllProducts";
import CartContainer from "./Components/CartContainer/CartContainer";
import Header from "./Components/Header/Header";

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });
  const handleIsActiveStatus = (status) => {
    if (status === "cart") {
      setIsActive({
        cart: true,
        click: "cart",
      });
    } else {
      setIsActive({
        cart: false,
        click: "about",
      });
    }
  };

  return (
    <div className="max-w-11/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Header />
      <div className="flex gap-2 mt-3">
        <div className="md:w-2/3">
          <AllProducts />
        </div>
        <div className="md:w-1/3">
          <CartContainer handleIsActiveStatus={handleIsActiveStatus} isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

export default App;
