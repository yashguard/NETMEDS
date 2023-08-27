import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addUserProduct, deleteUserProduct, editUserProduct } from "../Redux/Action";

const CartProducts = (props) => {
  let [cartCount, setCartCount] = useState(0);
  let[check,setCheck]=useState([])
  let[check2,setCheck2]=useState([])
  let[qty,setQty]=useState(0)
  let[searchParams,setSearchParams]=useSearchParams()
  let id = JSON.parse(localStorage.getItem('id'))
  let total = 0;
  let selectdata = useSelector((store) => store.cartProducts);
  let dispatch = useDispatch()

  useEffect(() => {
    getdata()
  }, [])
  
  let updateQty =async(quantity)=>{
    await axios.patch(`http://localhost:8010/pro/qty?userid=${id}&proid=${props.index}&qty=${quantity}`).then((res)=>console.log(res)).catch((error)=>console.log(error))
    // props.apidata()
  }

  let getdata=async()=>{
    setQty(props.products.qty)
    await axios
      .get(`http://localhost:8010/users/${id}`)
      .then((res) => {
        setCheck(res.data.product)
      })
      .catch((error) => console.log(error));
  }

  let incre =(e)=>{
    let newqty = qty+1
    console.log(newqty)
    setQty(qty+1)
    updateQty(qty+1)
    dispatch(editUserProduct(e,newqty))
  }
  let decre =(e)=>{
    let newqty = qty-1
    if(qty <= 1){
      setQty(1)
    }
    else{
      setQty(qty-1)
      updateQty(qty-1)
      dispatch(editUserProduct(e,newqty))
      // console.log(e)
    }
  }
  let inputChangeQty=(e)=>{
    let num = Number(e)
      setQty(num)
      updateQty(num)
  }
  let deleteProduct=(event)=>{
    dispatch(deleteUserProduct(event))
    props.deletedata(event)
  }

  return (
    <div className="mt-3 container text-center">
      <div className="row  align-item-center justify-content-center">
        <div className="col-xs-12 mb-5 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 row align-item-center justify-content-center">
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
            <p className="c-pointer p fs-1" onClick={()=>deleteProduct(props.products)}>remove</p>
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-1 col-xl-1 col-xxl-1">
          <h2 className="fs-1">${props.products.price}</h2>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
          <div className="">
            <div className="row justify-content-center">
              <h2 className="fs-2 fw-300 qty-btn" onClick={()=>decre(props.products)}>-</h2>
              <input
                type="text"
                onChange={(e)=>inputChangeQty(e.target.value)}
                value={qty}
                // defaultValue={qty}
                className="text-center"
                style={{ maxWidth: "20px", border: "none" }}
              />
              <h2 className="fs-2 fw-300 qty-btn" onClick={()=>incre(props.products)}>+</h2>
            </div>
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-1 col-xl-1 col-xxl-1">
          <h2 className="fs-1">${Math.round(props.products.price * qty)}</h2>
        </div>
      </div>
      <hr className="mt-1" />
    </div>
  );
};

export default CartProducts;
