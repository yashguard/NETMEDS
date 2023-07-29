import { add, add_Filters } from "./ActionType";

export const addData = (fname, lname, email, password, cpassword, verify) => {
  return { type: add, fname, lname, email, password, cpassword, verify };
};

export const addFilters = (values) => {
  return { type: add_Filters, values };
};
