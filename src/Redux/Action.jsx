import { add } from "./ActionType";

export const addData = (fname, lname, email, password) => {
  return { type: add, fname, lname, email, password };
};
