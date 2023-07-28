import React from "react";
import { Link } from "react-router-dom";

const ProductPages = () => {
  return (
    <div>
      <div className="productLinks row justify-content-between">
        <Link to="/product/covidessentials">COVID Essentials</Link>
        <Link to="/product/Diabetes">Diabetes</Link>
        <Link to="/product/Veterinary">Veterinary</Link>
        <Link to="/product/Eyewear">Eyewear</Link>
        <Link to="/product/Ayush">Ayush</Link>
        <Link to="/product/Ayurvedic">Ayurvedic</Link>
        <Link to="/product/Homeopathy">Homeopathy</Link>
        <Link to="/product/Fitness">Fitness</Link>
        <Link to="/product/Mom">Mom & Baby</Link>
        <Link to="/product/Devices">Devices</Link>
        <Link to="/product/Surgicals">Surgicals</Link>
        <Link to="/product/Sexual">Sexual Wellness</Link>
        <Link to="/product/Treatments">Treatments</Link>
      </div>
    </div>
  );
};

export default ProductPages;
