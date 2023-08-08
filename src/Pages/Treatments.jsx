import React, { useEffect, useState } from "react";
import ProductSection from "../Components/ProductSection";
import Navigation from "../Components/Navigation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../Redux/Action";
import Header from "../Components/Header";

const Treatments = () => {
  let [categories, setCategories] = useState([]);
  let dispatch = useDispatch();
  let reduxProducts = useSelector((store) => store.products);
  let brand = useSelector((store) => store.brand);
  let sort = useSelector((store) => store.sort);
  const getProduct = async () => {
    await axios
      .get("https://bewildered-mite-loincloth.cyclic.app/treatments")
      .then((res) => {
        handleCategory(res.data);
        test(res.data);
      })
      .catch((err) => console.error(err.message));
  };
  const handleCategory = (products) => {
    if (products) {
      const result = products.reduce((finalArray, current) => {
        let obj = finalArray.find((item) => item.category === current.category);
        if (obj) {
          return finalArray;
        }
        return finalArray.concat([current]);
      }, []);
      setCategories([...result]);
    }
  };
  const test = (products) => {
    if (sort && brand) {
      if (sort === "high-to-low") {
        dispatch(
          addProducts(
            products
              .filter((products) => products.category === brand)
              .sort((a, b) => b.price - a.price)
          )
        );
      } else if (sort === "low-to-high") {
        dispatch(
          addProducts(
            products
              .filter((products) => products.category === brand)
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
          addProducts(
            products.filter((products) => products.category === brand)
          )
        );
      }
    } else {
      dispatch(addProducts(products));
    }
  };
  useEffect(() => {
    getProduct();
  }, [sort, brand]);
  return (
    <>
      <Header />
      <div className="products-covid">
        <div className="container">
          <div className="padding-100 row">
            <div className="col-xxl-3 padding-0">
              <Navigation categories={categories} />
            </div>
            <div className="col-xxl-9 padding-0">
              <ProductSection reduxProducts={reduxProducts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Treatments;
