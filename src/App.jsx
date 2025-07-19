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

  const [selectedProduct, setSelectedProduct] = useState([]);
  const handleSelectedProduct = (product) => {
    const isExist = selectedProduct.find((p) => p.id == product.id);
    if (isExist) {
      alert("Don't add this Item, Please try onther Item.");
    } else {
      handleAddPrice(product.price);
      const newSelectedProduct = [...selectedProduct, product];
      setSelectedProduct(newSelectedProduct);
    }
  };

  const handleDelete = (id) => {
    handleDeletePrice(id);
    const rimainingCart = selectedProduct.filter((p) => p.id != id);
    setSelectedProduct(rimainingCart);
  };

  const [price, setPrice] = useState(0);

  const handleAddPrice = (p) => {
    setPrice(price + p);
  };
  const handleDeletePrice = (id) => {
    const product = selectedProduct.find((p) => p.id == id);
    setPrice(price - product.price);
  };
  return (
    <div className="max-w-11/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Header price={price} selectedProduct={selectedProduct.length} />
      <div className="flex gap-2 mt-3">
        <div className="md:w-2/3">
          <AllProducts handleSelectedProduct={handleSelectedProduct} />
        </div>
        <div className="md:w-1/3">
          <CartContainer
            handleDelete={handleDelete}
            selectedProduct={selectedProduct}
            handleIsActiveStatus={handleIsActiveStatus}
            isActive={isActive}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
