import { add } from "./ActionType";

let initialState = { user: [] };
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case add:
      return {
        ...state,
        user: [{
          fname: action.fname,
          lname: action.lname,
          email: action.email,
          password: action.password,
          confirmpassword: action.cpassword,
          verify: action.verify,
        }],
      };
    default:
      return state;
  }
};
