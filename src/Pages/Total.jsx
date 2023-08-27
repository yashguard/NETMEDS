import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
  let selectdata = useSelector((store) => store.cartProducts);
  let tprice = selectdata.reduce((acc, curr) => {
    console.log(selectdata)
    return acc + curr.price * curr.qty;
    // console.log(curr.qty)
  }, 0);
  console.log(tprice);
  return (
    <div>
      {/* <h2>sub total : ${Math.round(11)}</h2>
      <h2>shipping : ${5}</h2>
      <hr />
      <h2>total : ${Math.round(11) + 5}</h2> */}
    </div>
  );
};

export default Total;
