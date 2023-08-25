import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartProducts from "./CartProducts";
import Header from "../Components/Header";
import { addUserProduct } from "../Redux/Action";

const Cart = () => {
  let [pro, setPro] = useState([]);
  let [cartCheck, setCartCheck] = useState(false);
  let [cartItem, setCartItem] = useState();
  let [subTotal, setSubTotal] = useState(0);
  let [shipping, setShipping] = useState(5);

  let selectdata = useSelector((store) => store.cartProducts);
  let dispatch = useDispatch([]);
  let nav = useNavigate();
  let id = JSON.parse(localStorage.getItem("id"));

  const test = (data) => {
    cartData(data);
    let tprice = data.reduce((acc, curr) => {
      return acc + curr.price * curr.qty;
    }, 0);
    // let tprice = res.data.product.reduce((acc, curr) => acc + curr.price * curr.qty,0);
    setSubTotal(tprice);
  };
  let apidata = async () => {
    await axios.get(`http://localhost:8010/users/${id}`).then((res) => {
      dispatch(addUserProduct(res.data.product))
      test(res.data.product);
      // console.log(check.cartproducts)
    });
  };
console.log(selectdata)
  let getdata = () => {
    try {
      apidata();
    } catch (error) {
      alert("data not found");
    }
  };

  let cartData = (res) => {
    setPro(res);
    setCartCheck(true);
    setCartItem(res.length);
    if (res.length === 0 || res === undefined) {
      setCartCheck(false);
    }
  };

  useEffect(() => {
    getdata();
    apidata();
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mt-1 mb-2 align-item-center justify-content-between">
          <h2 className="fs-3 title-color">my cart</h2>
          <h2 className="fs-2 fw-400">{cartItem} : items</h2>
        </div>
        <hr />
        {cartCheck ? (
          <div>
            <div className="row align-item-center mt-1 mb-2 fs-1 text-main">
              <p>product detail</p>
            </div>
            <div className="cart">
              {pro.map((ele, i) => {
                return (
                  <div key={i}>
                    <CartProducts
                      products={{ ...ele }}
                      apidata={getdata}
                      index={i}
                      setSubTotal={setSubTotal}
                      subTotal={subTotal}
                    />
                  </div>
                );
              })}
            </div>
            <div className="row justify-content-between mt-2 mb-2">
              <div>
                <button
                  className="cart-btn"
                  onClick={() => nav("/product/covidessentials")}
                >
                  continue shopping
                </button>
              </div>
              <div>
                <h2>sub total : ${Math.round(subTotal)}</h2>
                <h2>shipping : ${shipping}</h2>
                <hr />
                <h2>total : ${Math.round(subTotal) + shipping}</h2>
              </div>
            </div>
          </div>
        ) : (
          <div className="vh-80 row align-item-center justify-content-center">
            <div>
              <div className="cartnotfound">
                <img
                  src="https://www.netmeds.com/msassets/images/emptycart.svg"
                  alt="product cart img"
                />
              </div>
              <div className="text-center mt-2">
                <h5 className="title-color fs-1 fw-500 pb-1">
                  your cart is empty!
                </h5>
                <p className="p pt-1">
                  You have no items added in the cart.
                  <br />
                  Explore and add products you like!
                </p>
              </div>
              <button
                className="me-auto mt-3 sign-btn pt-2 pb-2"
                onClick={() => nav("/product/covidessentials")}
              >
                add products
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
