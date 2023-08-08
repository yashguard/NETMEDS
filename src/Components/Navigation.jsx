import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addBrand, addSort } from "../Redux/Action";

const Navigation = (props) => {
  let { categories } = props;
  let dispatchBrand = useDispatch();
  const handleBrand = (e) => {
    e.preventDefault();
    if (e.target.value) {
      dispatchBrand(addBrand(e.target.value));
    }
  };
  const handleSort = (value) => {
    if (value) {
      dispatchBrand(addSort(value));
    }
  };
  return (
    <div className="productsFilterBg">
      <div className="categories row fd-col">
        <h2>Categories</h2>
        <ul>
          <li>
            <Link>
              <FaAngleRight />
              Veterinary
            </Link>
          </li>
          <li>
            <Link>
              <FaAngleRight />
              Ayush
            </Link>
          </li>
          <li>
            <Link>
              <FaAngleRight />
              Fitness
            </Link>
          </li>
          <li>
            <Link>
              <FaAngleRight />
              Mom & Baby
            </Link>
          </li>
          <li>
            <Link>
              <FaAngleRight />
              Sexual Wellness
            </Link>
          </li>
          <li>
            <Link>
              <FaAngleRight />
              Treatments
            </Link>
          </li>
          <li>
            <Link>
              <FaAngleRight />
              Devices
            </Link>
          </li>
          <li>
            <Link>
              <FaAngleRight />
              Health Conditions
            </Link>
          </li>
          <li>
            <Link>
              <FaAngleRight />
              Otc Deals
            </Link>
          </li>
          <li>
            <Link>
              <FaAngleRight />
              Eyewear
            </Link>
          </li>
          <li>
            <Link>
              <FaAngleRight />
              Covid Essentials
            </Link>
          </li>
          <li>
            <Link>
              <FaAngleRight />
              Surgical
            </Link>
          </li>
          <li>
            <Link>
              <FaAngleRight />
              Diabetes Support
            </Link>
          </li>
          <li>
            <Link>
              <FaAngleRight />
              Fragrances
            </Link>
          </li>
          <li>
            <Link>
              <FaAngleRight />
              Make-Up
            </Link>
          </li>
          <li>
            <Link>
              <FaAngleRight />
              Hair
            </Link>
          </li>
          <li>
            <Link>
              <FaAngleRight />
              Men's Grooming
            </Link>
          </li>
          <li>
            <Link>
              <FaAngleRight />
              Skin Care
            </Link>
          </li>
          <li>
            <Link>
              <FaAngleRight />
              Tools & Appliances
            </Link>
          </li>
          <li>
            <Link>
              <FaAngleRight />
              Wellness
            </Link>
          </li>
          <li>
            <Link>
              <FaAngleRight />
              Personal Care
            </Link>
          </li>
        </ul>
      </div>
      <div className="filter" style={{ marginTop: "50px" }}>
        <h2>Filters</h2>
        <form>
          <h3>Brands</h3>
          <div className="search">
            <input
              type="search"
              className="search-btn"
              placeholder="search..."
            />
          </div>
          <ul>
            <li>
              <button
                className="category"
                value="All"
                onClick={(e) => handleBrand(e)}
              >
                All
              </button>
            </li>
            {categories &&
              categories.map((ele, i) => {
                return (
                  <li key={i}>
                    <button
                      className="category"
                      value={`${ele.category}`}
                      onClick={(e) => handleBrand(e)}
                    >
                      {ele.category}
                    </button>
                  </li>
                );
              })}
          </ul>
          <h3>Sorting</h3>
          <ul>
            <li>
              <select onChange={(e) => handleSort(e.target.value)}>
                <option value="#">Select the sorting method</option>
                <option value="high-to-low">High-to-low</option>
                <option value="low-to-high">Low-to-high</option>
              </select>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Navigation;
