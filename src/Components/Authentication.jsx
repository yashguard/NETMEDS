import React from "react";
import { auth, googleauth, provider } from "./Config";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addData } from "../Redux/Action";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { signInWithPopup } from "firebase/auth";

const Authentication = () => {
  let dispatch = useDispatch();
  const handleGoogle = () => {
    googleauth().then((userdetails) => {
      dispatch(
        addData(
          userdetails._tokenResponse.firstName,
          userdetails._tokenResponse.lastName,
          userdetails._tokenResponse.email,
          userdetails.user.uid,
          userdetails.user.uid,
          userdetails.user.emailVerified
        )
      );
    });
  };
  const handleFacebook = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
  };
  return (
    <div>
      <h4 className="fw-600">Or</h4>
      <div className="different-auth row">
        <div className="col-lg-6 col-xl-6 col-xxl-6">
          <Link
            to="/signup"
            onClick={handleGoogle}
            className="row align-item-center"
          >
            <img src="./Image/google-icon.png" alt="google" />
            <span>Google</span>
          </Link>
        </div>
        <div className="col-lg-6 col-xl-6 col-xxl-6">
          <Link onClick={handleFacebook} className="row align-item-center">
            <img src="./Image/facebook-icon.png" alt="google" />
            <span>Facebook</span>
          </Link>
        </div>
        <div className="col-lg-6 col-xl-6 col-xxl-6">
          <Link className="row align-item-center">
            <img src="./Image/email-icon.png" alt="google" />
            <span>Email</span>
          </Link>
        </div>
        <div className="col-lg-6 col-xl-6 col-xxl-6">
          <Link className="row align-item-center">
            <img src="./Image/github-icon.png" alt="google" />
            <span>Github</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
