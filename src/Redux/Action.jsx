import { add, verify } from "./ActionType";

export const addData = (fname, lname, email, password, cpassword, verify) => {
  return { type: add, fname, lname, email, password, cpassword, verify };
};

export const checkVerify = (exist) => {
  return { type: verify, exist };
};
