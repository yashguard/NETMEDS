import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductsLists = (props) => {
  let { discountPercentage, thumbnail, rating, title, description, price } =
    props;
  return (
    <div className="product">
      <span className="disc">{discountPercentage}% OFF</span>
      <img src={thumbnail} alt="" />
      <span className="rating">
        <FaStar />
        {rating}
      </span>
      <h3 className="title">{title}</h3>
      <p className="desc">{description}</p>
      <h4 className="price">
        <span>Best Price :</span>₹{price}
      </h4>
      <Link>ADD TO CART</Link>
    </div>
  );
};

export default ProductsLists;
