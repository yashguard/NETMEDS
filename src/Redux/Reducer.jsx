import { add, add_Filters } from "./ActionType";

let initialState = { user: [], filter: [] };
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case add:
      return {
        ...state,
        user: [
          {
            fname: action.fname,
            lname: action.lname,
            email: action.email,
            password: action.password,
            confirmpassword: action.cpassword,
            verify: action.verify,
          },
        ],
      };

    case add_Filters:
      return {
        ...state,
        filter: [...action.values],
      };
    default:
      return state;
  }
};
