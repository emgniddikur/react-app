import {LOG_IN, LOG_OUT} from "../constants/login";

export const loginReducer = (state = {login: false}, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        login: true
      };
    case LOG_OUT:
      return {
        login: false
      };
    default:
      return state;
  }
};
