import axios from "axios";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navigation = () => {
  let array = [];
  const handleQueryType = (value, checked) => {
    let values = array.filter((val) => val !== value);
    if (checked && values) {
      array.push(value);
      console.log(array)
      return axios
        .post(`http://localhost:8020/productquerylists?type=${[array]}`)
        .then((res) => console.log(res.data))
        .catch((err) => {
          console.log(err);
        });
    } else {
      array.filter((val, i) => {
        if (val === value) {
          array.splice(i, 1);
        }
        return 0;
      });
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
          <ul>
            <h3>Brands</h3>
            <div className="search">
              <input
                type="search"
                className="search-btn"
                placeholder="search..."
              />
            </div>
            <li>
              <input
                type="checkbox"
                value="iPhone"
                onChange={(e) =>
                  handleQueryType(e.target.value, e.target.checked)
                }
              />
              <span>iPhone(3)</span>
            </li>
            <li>
              <input
                type="checkbox"
                value="Samsung"
                onChange={(e) =>
                  handleQueryType(e.target.value, e.target.checked)
                }
              />
              <span>Samsung(3)</span>
            </li>
            <li>
              <input
                type="checkbox"
                value="MacBook"
                onChange={(e) =>
                  handleQueryType(e.target.value, e.target.checked)
                }
              />
              <span>MacBook(3)</span>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Navigation;
