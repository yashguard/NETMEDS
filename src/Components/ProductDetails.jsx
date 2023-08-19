import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import Rating from "./Rating";
import { HeartFill } from "react-bootstrap-icons";
import axios from "axios";

const ProductDetails = () => {
  let [pro, setPro] = useState([]);
  let [rdata, setRdata] = useState([]);
  let [todos, setTodos] = useState([]);
  let localid = JSON.parse(localStorage.getItem('id'))

  let [data, setData] = useState({});
  let { id, sortname } = useParams();
  let[image,setImage]=useState([])
  let nav = useNavigate();
  let length
  useEffect(() => {
    get();
  }, []);
  let get = async () => {
    let req = await fetch(
      `https://bewildered-mite-loincloth.cyclic.app/${sortname}`
    );
    let res = await req.json();
    let data = res.filter((e, i) => e._id == id);
    setData(data[0]);
    setImage(data[0].image)
    if (res !== undefined) {
      fetchdata();
    }
  };

  let fetchdata = () => {
    try {
      axios
        .get(`http://localhost:8010/users/${localid}`)
        .then((res) => {
          setTodos(res.data.product);
        })
        .catch(() => console.log("data not found"));
    } catch (error) {
      console.log(error)
    }
  };

  const handleAddCart = (e) => {
    // console.log(data)
    if (localid != undefined) {
      let updatedTodos = [...todos,{...data,qty:1}];
      axios
      .patch(`http://localhost:8010/users/${localid}`, {
        product: updatedTodos,
      })
      .then((res) => {
        console.log(updatedTodos)
        console.log(res);
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
    <div className="details">
      <Header />
      <div className="row mt-4">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 text-center">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
               <div className="w-100">
               {image.map((e,i)=>{
                    if (i<3) {
                        return <img key={i} src={data.image[i]}style={{width:'100%'}} alt="img" />
                    }
                })}
               </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
              <div style={{ height: "100%" }}>
                <img src={data.thumbnail} style={{ height: "100%" ,width:"100%"}} alt="img"/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 px-5">
          <h2 className="fs-2 fw-400">{data.title}</h2>
          <div className="row align-item-center mt-1 pb-3">
            <HeartFill style={{color:"#C4C4C4",fontSize:"2.4rem"}}/>
            <h2 className="p pl-2 pr-1 fw-500" style={{fontSize:"1.5rem"}}>{data.rating}</h2>
            <Rating value={data.rating}/>
          </div>
          <hr />
          <div className="row align-item-center pt-2">
            <h3 className="fs-1 fw-600">₹{data.price}</h3>
            <h3 className="pt-1 pl-2 p">MRP <span className="text-decoration-linethrough">₹{data.price+50}</span></h3>
            <h6 style={{color:"#DD468A"}} className="pl-2 fw-500 pt-1">save {data.discount}%</h6>
          </div>
            <p className="dark-color pt-1">inclusive of all taxes</p>
            <p className="p pt-2">*This product cannot be returned for a refund or exchange.</p>
            <p className="p">*{data.description}</p>
            <p className="p">*Country of Origin: India</p>
            <p className="p">*Delivery charges if applicable will be applied at checkout</p>
            <button onClick={(e)=>handleAddCart(e)} className="sign-btn pt-3 pb-3 mt-3" style={{width:'170px'}}>ADD TO CART</button>
            <hr className="mt-3"/>
            <div className="row justify-content-between mt-2">
              <h3 className="fs-1 text-main">Availability & Expiry</h3>
              <h3 className="pr-3 fs-1 text-main">Delivery To <span className="dark-color">110002</span></h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
