import React, { useEffect, useState } from "react";
import ProductsLists from "./ProductsLists";
import axios from "axios";

const ProductSection = () => {
  let [products, setProducts] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:8020/productlists")
      .then((res) => {
        setProducts([...res.data]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="productsRendering">
      <div className="slider-1"></div>
      <div className="slider-2"></div>
      <div className="productsLists">
        <span className="allProducts">all products :</span>
        <div className="products">
          {products.length > 0 &&
            products.map((products, i) => {
              return <ProductsLists key={i} {...products} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
