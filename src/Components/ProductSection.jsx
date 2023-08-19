import React from "react";
import ProductsLists from "./ProductsLists";

const ProductSection = (props) => {
  let { reduxProducts } = props;
  return (
    <div className="productsRendering">
      <div className="slider-1"></div>
      <div className="slider-2"></div>
      <div className="productsLists">
        <span className="allProducts">all products :</span>
        <div className="products">
          {reduxProducts.length > 0 &&
            reduxProducts.map((products, i) => {
              return <ProductsLists key={i} {...products} sortname={props.sortname} url={props.url}/>;
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
