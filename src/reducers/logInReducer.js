import {SUCCESS_LOG_IN, SUCCESS_LOG_OUT} from "../constants/logIn";

export const logInReducer = (state = {isLoggedIn: false}, action) => {
  switch (action.type) {
    case SUCCESS_LOG_IN:
      return {
        isLoggedIn: true
      };
    case SUCCESS_LOG_OUT:
      return {
        isLoggedIn: false
      };
    default:
      return state;
  }
};
