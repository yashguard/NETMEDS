import { add } from "./ActionType";

export const addData = (fname, lname, email, password, cpassword, verify) => {
  return { type: add, fname, lname, email, password, cpassword, verify };
};
