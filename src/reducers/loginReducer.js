import {LOG_IN, LOG_OUT} from "../constants/login";

export const loginReducer = (state = {isLoggedIn: false}, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        isLoggedIn: true
      };
    case LOG_OUT:
      return {
        isLoggedIn: false
      };
    default:
      return state;
  }
};
