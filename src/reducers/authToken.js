import {ADD_AUTH_TOKEN} from "../constants/authToken";

export const authToken = (state = {authToken: ""}, action) => {
  switch (action.type) {
    case ADD_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.payload.authToken
      };
    default:
      return state;
  }
};
