import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import CovidEssentials from "./Components/CovidEssentials";
import Product from "./Pages/Product";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/product/covidessentials" element={<CovidEssentials />} />
        <Route path="*" element={<h1 style={{textAlign : "center", marginTop : "100px"}}>404 Error Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
