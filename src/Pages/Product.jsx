import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Product = () => {
  let [pro, setPro] = useState([]);
  let [rdata, setRdata] = useState([]);
  let [todos, setTodos] = useState([]);
  let id = JSON.parse(localStorage.getItem('id'))
  let nav = useNavigate();

  useEffect(() => {
    get();
  },[]);

  let get = async () => {
    try {
      let req = await fetch("https://dummyjson.com/products");
      let res = await req.json();
      setPro(res.products);
      // setRdata(selectdata[0]);
      setRdata(id)
      if (res !== undefined) {
        // fetchdata();
      }
    } catch (error) {
      console.log(error);
    }
  };

  let fetchdata = () => {
    try {
      axios
        .get(`http://localhost:8010/users/${id}`)
        .then((res) => {
          setTodos(res.data.product);
        })
        .catch(() => console.log("data not found"));
    } catch (error) {
      console.log(error)
    }
  };

  const handleAddCart = (i) => {
    // console.log(rdata._id)
    if (rdata != undefined) {
      let updatedTodos = [...todos, i];
      axios
      .patch(`http://localhost:8010/users/${id}`, {
        product: updatedTodos,
      })
      .then((res) => {
        console.log(res.data);
        // dispatch(addUser(res.data));
        fetchdata()
          alert("item added");
        })
        .catch(() => alert("item not added"));
    } else {
      alert("you have to login");
      nav("/login");
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {pro.map((v, i) => {
        return (
          <div key={i}>
            <img src={v.thumbnail} />
            <h2>{v.title}</h2>
            <button
              style={{ padding: "15px 32px" }}
              onClick={() => handleAddCart(v)}
            >
              add to cart
            </button>
            <button onClick={() => nav("/cart")}>cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
