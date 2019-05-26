import {ADD_AUTH_TOKEN} from "../constants/authToken";

export const addAuthToken = authToken => ({
  type: ADD_AUTH_TOKEN,
  payload: {
    authToken
  }
});
