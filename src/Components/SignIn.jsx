import React, { useEffect, useState } from "react";
import FirstImage from "./FirstImage";
import "../App.css";
import "../Media.css";
import axios from "axios";
import { emailLogin, googleauth, reset, resetpass } from "../Config";
import { Auth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = (props) => {
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState('');
  let [id, setId] = useState(0);
  let nav = useNavigate()

  let checkforgot = false


  let handlesubmit = (e) => {
    e.preventDefault();
    emailLogin(email,pass).then(()=>{
      console.log('success')
      nav('/')
    }).catch((err)=>alert('email / password not match'))

    if(checkforgot == true){
      handlemail()
    }

  };

  let filtereddata = (res) => {
    // console.log(res);
    // let data = res.filter((e, i) => e.email === email && e.password == pass);
    // if (data.length > 0) {
    //   alert("login success");
    //   console.log(data)
    // } else {
    //   alert("email / password not match");
    // }

    // axios.patch(`http://localhost:3003/posts/${id}`,email,pass)
    // checkforgot = false

  };

  let handlemail = () => {
    axios.get(`http://localhost:3003/posts`).then((res) => {
      filtereddata(res.data);
      res.data.filter((e,i) => {
        if (e.email === email) {
          setId(e.id);
        }
      });
    });
  };
  
  let handleforgot = (e) => {
    alert('check google email')
    resetpass(email).then((val)=>{
      console.log('completed', val)
      checkforgot = true;
    }).catch(()=>{
      alert('email not found')
    })
  };

  const handledata =(res)=>{
    let data = res
    axios.get(`http://localhost:3003/posts`).then((res) => {
        res.data.filter((e,i) => {
          if (e.email === data) {
            setPass(e.password)
            console.log()
          }
        });
      });
  }
  const handleauth =()=>{
    googleauth().then((details)=>{
      setEmail(details._tokenResponse.email)
      handledata(details._tokenResponse.email)
    })
  }

  
  return (
    <div className="vh-100 row align-item-center bg-light-gray">
      <div className="signin-box me-auto mt-2">
        <div className="row pt-5">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <FirstImage />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 pt-5 pb-5">
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-8 col-xl-8 col-xxl-9 me-auto">
              <h2 className="title-color fw-600 fs-2">{props.title}</h2>
              <p className="p fs-1 pt-1 mb-6">{props.des}</p>
              <form onSubmit={handlesubmit}>
                <h5 className="text-main fw-400 mt-4">Email id</h5>
                <input
                  type="email"
                  style={{ width: "100%" }}
                  placeholder="Enter your email id"
                  className="signin-input p-1"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <h5 className="text-main fw-400 mt-2">Password</h5>
                <input
                  type="password"
                  style={{ width: "100%" }}
                  placeholder="Enter your password"
                  className="signin-input p-1"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
                <button className="sign-btn p-2 mt-2">Sign in</button>
                <p
                  className="text-center p mt-1 c-pointer mb-4"
                  onClick={(e) => handleforgot(e)}
                >
                  forgote password
                </p>
              </form>

              <div className="row justify-content-evenly">
                <button className="signin-icon p-2 c-pointer" onClick={handleauth}>Google</button>
                <button className="signin-icon c-pointer">Facebook</button>
              </div>

              <p className="text-center p mt-1 c-pointer mb-4" onClick={()=>nav('/signup')}>create an account</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
