import { add,add_Products, add_Filters } from "./ActionType";

export const addData = (fname, lname, email, password, cpassword, verify) => {
  return { type: add, fname, lname, email, password, cpassword, verify };
};

export const addProducts = (products) => {
  return { type: add_Products, products };
};

export const addFilters = (values) => {
  return { type: add_Filters, values };
};
