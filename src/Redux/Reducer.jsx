import { add, verify } from "./ActionType";

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
          confirmpassword: action.cpassword,
          verify: action.verify,
        },
      ];

    case verify:
      return [...state, { verify: action.exist }];
    default:
      return state;
  }
};
