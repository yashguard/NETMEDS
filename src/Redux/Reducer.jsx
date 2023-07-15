import { add_email, add_password } from "./ActionType";

let initialState = { users: [{}] };
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case add_email:
      return { ...state, users: [{ email: action.email }] };

    case add_password:
      return { ...state, users: [{ password: action.password }] };

    default:
      return state;
  }
};
