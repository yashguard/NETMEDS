import { add, add_Filters, add_Products } from "./ActionType";

let initialState = { user: [], products: [], filter: [] };
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

    case add_Products:
      return {
        ...state,
        products: [...action.products],
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
