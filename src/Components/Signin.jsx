import React from "react";
import FirstImage from "./FirstImage";
import "../App.css";
import "../Media.css";

const SignIn = (props) => {
  return (
    <div className="vh-100 row align-item-center bg-light-gray">
      <div className="signin-box me-auto mt-2">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <FirstImage />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 p-5">
            <h2 className="title-color fw-500">{props.title}</h2>
            <p className="p">{props.des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
