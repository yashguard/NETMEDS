import React from "react";
import { googleauth } from "./Config";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addData } from "../Redux/Action";

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
  return (
    <div>
      <h4 className="fw-600">Or</h4>
      <div className="different-auth row justify-content-center">
        <div className="col-xs-12 col-sm-10 col-md-5 col-lg-8 col-xl-8 col-xxl-5">
          <Link
            to="/signup"
            onClick={handleGoogle}
            className="row align-item-center"
          >
            <img src="./Image/google-icon.png" alt="google" />
            <span>Google</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
