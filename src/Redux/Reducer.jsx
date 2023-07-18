import { add } from "./ActionType";

let initialState = [];
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case add:
      return [
        ...state,
        {
          fname: action.fname,
          lname: action.lname,
          email: action.email,
          password: action.password,
          confirmpassword: action.password,
        },
      ];
    default:
      return state;
  }
};
