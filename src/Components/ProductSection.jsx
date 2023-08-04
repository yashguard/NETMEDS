import React, { useEffect } from "react";
import ProductsLists from "./ProductsLists";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../Redux/Action";

const ProductSection = () => {
  let dispatch = useDispatch();
  let reduxProducts = useSelector((store) => store.products);
  let brand = useSelector((store) => store.brand);
  let sort = useSelector((store) => store.sort);
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
    if (sort && brand) {
      if (sort === "high-to-low") {
        dispatch(
          addProducts(
            products
              .filter((products) => products.brand === brand)
              .sort((a, b) => b.price - a.price)
          )
        );
      } else if (sort === "low-to-high") {
        dispatch(
          addProducts(
            products
              .filter((products) => products.brand === brand)
              .sort((a, b) => a.price - b.price)
          )
        );
      }
    } else if (sort || brand) {
      if (sort === "high-to-low") {
        dispatch(addProducts(products.sort((a, b) => b.price - a.price)));
      } else if (sort === "low-to-high") {
        dispatch(addProducts(products.sort((a, b) => a.price - b.price)));
      } else if (brand === "All") {
        dispatch(addProducts(products));
      } else {
        dispatch(
          addProducts(products.filter((products) => products.brand === brand))
        );
      }
    } else {
      dispatch(addProducts(products));
    }
  };
  useEffect(() => {
    getData();
  }, [brand, sort]);
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
