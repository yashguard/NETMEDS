import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartProducts = (props) => {
  let [cartCount, setCartCount] = useState(0);
  let[check,setCheck]=useState([])
  let[check2,setCheck2]=useState([])
  let[qty,setQty]=useState(1)
  let id = JSON.parse(localStorage.getItem('id'))
  let total = 0;
  
  
  let incre =()=>{
    setQty(qty+1)
  }
  console.log({...props.products,qty})
  let decre =()=>{
    if(qty <= 1){
      setQty(1)
    }
    else{
      setQty(qty-1)
    }
  }

  return (
    <div className="mt-3 container text-center">
      <div className="row  align-item-center justify-content-center">
        <div className="col-xs-12 mb-5 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 row align-item-center justify-content-center">
          <img
            className="cartproduct img-fluid"
            style={{ width: "200px" }}
            src={props.products.thumbnail}
            alt="img"
          />
          <div
            className="px-3 row f-dir-column justify-content-between"
            style={{ height: "80px" }}
          >
            <h2 className="fs-1">{props.products.title}</h2>
            <h6 className="text-main">{props.products.brand}</h6>
            <p>remove</p>
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
          <h2 className="fs-1">${props.products.price}</h2>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
          <div className="">
            <div className="row justify-content-center">
              <h2 className="fs-2 fw-300 qty-btn" onClick={()=>decre()}>-</h2>
              <input
                type="text"
                value={qty}
                className="text-center"
                style={{ maxWidth: "20px", border: "none" }}
              />
              <h2 className="fs-2 fw-300 qty-btn" onClick={()=>incre()}>+</h2>
            </div>
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
          <h2 className="fs-1">${props.products.price * qty}</h2>
        </div>
      </div>
      <hr className="mt-1" />
    </div>
  );
};

export default CartProducts;
