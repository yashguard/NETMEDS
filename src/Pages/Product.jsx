import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
  let [pro, setPro] = useState([]);
  let [cartpro, setCartpro] = useState();
  let [test, setTest] = useState([{ product: "test" }]);

  let get = async () => {
    let req = await fetch("https://dummyjson.com/products");
    let res = await req.json();
    setPro(res.products);
  };

  let handlemail = () => {
    axios
      .get(`http://localhost:8010`)
      .then((res) => {
        // handleCartProduct(res.data);
        console.log(res.data);
      })
      .catch(() => console.log("data not found"));
  };
  const handleCartProduct = (res) => {
    let data = res.filter((e) => e.email === "limbaniharsh1@gmail.com");
    setCartpro(data[0]._id);
  };

  const handleAddCart = (i) => {
    axios
      .get(`http://localhost:8010/users/64b8c206c649f05f9e371731`)
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => console.log("data not found"));
  };

  useEffect(() => {
    get();
    handlemail();
  }, []);

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
          </div>
        );
      })}
    </div>
  );
};

export default Product;
