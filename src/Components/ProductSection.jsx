import React, { useEffect, useState } from "react";
import ProductsLists from "./ProductsLists";
import axios from "axios";
import { useSelector } from "react-redux";

const ProductSection = () => {
  let [products, setProducts] = useState([]);
  let filter = useSelector((store) => store.filter);
  const getData = () => {
    axios
      .get("http://localhost:8020/productlists")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const test = () => {
    filter.length > 0 &&
      filter.map((filters) => {
        if (filters === "high-to-low") {
          let duplicate = [...products].sort((a, b) => a.price - b.price);
          duplicate.length > 0 && duplicate.filter((val, i) => {
            console.log(val)
          });
        }
      });
  };
  useEffect(() => {
    getData();
    test();
  }, [filter]);
  return (
    <div className="productsRendering">
      <div className="slider-1"></div>
      <div className="slider-2"></div>
      <div className="productsLists">
        <span className="allProducts">all products :</span>
        <div className="products">
          {filter.length > 0
            ? filter.map((filters) => {
                return (
                  products.length > 0 &&
                  products.map((products, i) => {
                    if (filters === products.brand) {
                      return <ProductsLists key={i} {...products} />;
                    }
                  })
                );
              })
            : products.length > 0 &&
              products.map((products, i) => {
                return <ProductsLists key={i} {...products} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
