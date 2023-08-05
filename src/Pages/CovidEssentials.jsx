import React, { useEffect } from "react";
import ProductSection from "../Components/ProductSection";
import Navigation from "../Components/Navigation";
import axios from "axios";

const CovidEssentials = () => {
  return (
    <div className="products-covid">
      <div className="container">
        <div className="padding-100 row">
          <div className="col-xxl-3 padding-0">
            <Navigation />
          </div>
          <div className="col-xxl-9 padding-0">
            <ProductSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidEssentials;
