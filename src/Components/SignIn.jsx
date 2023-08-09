import React, { useEffect, useState } from "react";
import FirstImage from "./FirstImage";
import "../App.css";
import "../Media.css";
import axios from "axios";
import {
  emailLogin,
  googleauth,
  reset,
  resetpass,
  verification,
} from "./Config";
import { Auth, getAuth, sendEmailVerification } from "firebase/auth";
import { json, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../reduxToollkit/userSlice";

const SignIn = (props) => {
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [id, setId] = useState(0);
  let nav = useNavigate();
  let dispatch = useDispatch();

  let checkforgot = false;

  const handletoolkitdata = () => {
    axios.get(`http://localhost:8010/`).then((res) => {
      let data = res.data.filter((e, i) => e.email === email);
      dispatch(addUser(...data));
      localStorage.setItem("id", JSON.stringify(data[0]._id));
      nav("/");
    });
  };

  let handlesubmit = async(e) => {
    e.preventDefault();
    emailLogin(email, pass).then((authuser)=>{
      let user = authuser.user
      if(!user.emailVerified){
        let auth = getAuth()
        sendEmailVerification(auth.currentUser).then(()=>alert('email verification link has been sent to your email address')).catch((error)=>console.log('sendin mail error : ',error))
      }
      else{
        handletoolkitdata()
      }
    }).catch((error)=>{alert("email / password not match")});
      // .then(() => {handletoolkitdata()})
  };

  let handleforgot = (e) => {
    alert("check google email");
    resetpass(email)
      .then((val) => {checkforgot = true;})
      .catch(() => {alert("email not found")});
  };

  const handledata = (email) => {
    axios.get(`http://localhost:8010`).then((res) => {
      let data = res.data.filter((e, i) => e.email === email);
      if (data.length === 0) {alert('you have to signup')} 
      else {
        localStorage.setItem("id", JSON.stringify(data[0]._id));
        nav("/");
      }
    });
  };
  const handleauth = () => {
    try {
      googleauth().then((details) => {handledata(details._tokenResponse.email)});
    } catch (error) {console.log(error);}
  };

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
                  // value={email}
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
                <button
                  className="signin-icon p-2 c-pointer"
                  onClick={handleauth}
                >
                  Google
                </button>
                <button className="signin-icon c-pointer">Facebook</button>
              </div>

              <p
                className="text-center p mt-1 c-pointer mb-4"
                onClick={() => nav("/signup")}
              >
                create an account
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
