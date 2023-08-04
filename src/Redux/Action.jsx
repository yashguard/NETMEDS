import { add_Users, add_Products, add_Brands, add_Sort } from "./ActionType";

export const addUsers = (fname, lname, email, password, cpassword, verify) => {
  return { type: add_Users, fname, lname, email, password, cpassword, verify };
};

export const addProducts = (products) => {
  return { type: add_Products, products };
};

export const addBrand = (brand) => {
  return { type: add_Brands, brand };
};

export const addSort = (sort) => {
  return { type: add_Sort, sort };
};