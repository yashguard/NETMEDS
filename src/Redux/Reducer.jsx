import { add_Users, add_Brands, add_Products, add_Sort } from "./ActionType";

let initialState = { user: [], products: [], brand: "", sort: "" };
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case add_Users:
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

    case add_Brands:
      return {
        ...state,
        brand: action.brand,
      };

    case add_Sort:
      return {
        ...state,
        sort: action.sort,
      };

    default:
      return state;
  }
};