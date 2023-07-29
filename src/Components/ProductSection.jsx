import React, { useEffect, useState } from "react";
import ProductsLists from "./ProductsLists";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../Redux/Action";

const ProductSection = () => {
  let [array, setArray] = useState([]);
  let dispatch = useDispatch();
  let reduxProducts = useSelector((store) => store.products);
  let filter = useSelector((store) => store.filter);
  const getData = () => {
    axios
      .get("http://localhost:8020/productlists")
      .then((res) => {
        test(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const test = (products) => {
    if (filter.length > 0) {
      filter.filter((filters) => {
        if (filters === "high-to-low") {
          dispatch(
            addProducts(reduxProducts.sort((a, b) => b.price - a.price))
          );
        } else if (filters === "low-to-high") {
          dispatch(
            addProducts(reduxProducts.sort((a, b) => a.price - b.price))
          );
        } else {
          // dispatch(
          //   addProducts(reduxProducts.filter((val, b) => val.brand === filters))
          //   );
          let array = [];

          array.push(
            ...reduxProducts.filter((val, b) => val.brand === filters)
          );
          console.log(array)
        }
      });
    } else {
      dispatch(addProducts(products));
    }
  };
  useEffect(() => {
    getData();
  }, [filter]);
  return (
    <div className="productsRendering">
      <div className="slider-1"></div>
      <div className="slider-2"></div>
      <div className="productsLists">
        <span className="allProducts">all products :</span>
        <div className="products">
          {reduxProducts.length > 0 &&
            reduxProducts.map((products, i) => {
              return <ProductsLists key={i} {...products} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
