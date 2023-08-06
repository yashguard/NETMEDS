import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import CovidEssentials from "./Pages/CovidEssentials";
import Cart from "./Pages/Cart";
import Surgicals from "./Pages/Surgicals";
import Treatments from "./Pages/Treatments";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/covidessentials" element={<CovidEssentials />} />
        <Route path="/product/surgicals" element={<Surgicals />} />
        <Route path="/product/treatments" element={<Treatments />} />
        <Route
          path="*"
          element={
            <h1 style={{ textAlign: "center", marginTop: "100px" }}>
              404 Error Page Not Found
            </h1>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
