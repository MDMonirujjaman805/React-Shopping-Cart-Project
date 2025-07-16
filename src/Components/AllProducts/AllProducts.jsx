import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
//   console.log(products);
  useEffect(() => {
      fetch('fakeData.json')
    // fetch("./../../../public.fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    }, []);
    // console.log(products[1]?.name);
  return (
    <div>
      <h2 className="text-2xl font-bold flex justify-center">All Products</h2>
      <h2 className="font-bold text-2xl"> All Products: {products.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 rounded-full">
      {
        products.map((product)=><Product key={product.id} product={product} ></Product>)
      }
      </div>
     
    </div>
  );
};

export default AllProducts;
