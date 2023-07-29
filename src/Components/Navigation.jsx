import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addFilters } from "../Redux/Action";

const Navigation = () => {
  let dispatchBrand = useDispatch();
  let array = [];
  const handleQueryType = (value, checked) => {
    let values = array.filter((val) => val !== value);
    if (checked && values) {
      array.push(value);
      dispatchBrand(addFilters(array));
    } else {
      array.filter((val, i) => {
        if (val === value) {
          array.splice(i, 1);
          dispatchBrand(addFilters(array));
        }
        return true;
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
                value="Apple"
                onChange={(e) =>
                  handleQueryType(e.target.value, e.target.checked)
                }
              />
              <span>Apple</span>
            </li>
            <li>
              <input
                type="checkbox"
                value="Samsung"
                onChange={(e) =>
                  handleQueryType(e.target.value, e.target.checked)
                }
              />
              <span>Samsung</span>
            </li>
            <li>
              <input
                type="checkbox"
                value="OPPO"
                onChange={(e) =>
                  handleQueryType(e.target.value, e.target.checked)
                }
              />
              <span>OPPO</span>
            </li>
          </ul>
          <ul>
            <h3>Manufacturers</h3>
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
                value="Huawei"
                onChange={(e) =>
                  handleQueryType(e.target.value, e.target.checked)
                }
              />
              <span>Huawei</span>
            </li>
          </ul>
          <ul>
            <h3>Sorting</h3>
            <li>
              <input
                type="checkbox"
                value="high-to-low"
                onChange={(e) =>
                  handleQueryType(e.target.value, e.target.checked)
                }
              />
              <span style={{marginTop : "20px", display : "inline-block"}}>high-to-low</span>
            </li>
            <li>
              <input
                type="checkbox"
                value="low-to-high"
                onChange={(e) =>
                  handleQueryType(e.target.value, e.target.checked)
                }
              />
              <span>low-to-high</span>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Navigation;
