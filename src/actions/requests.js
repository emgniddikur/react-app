import {AUTH_REQUEST, CREATE_REQUEST, DELETE_REQUEST, UPDATE_REQUEST} from "../constants/requests";

export const authRequest = authToken => ({
  type: AUTH_REQUEST,
  payload: {
    authToken
  }
});

export const createRequest = formItem => ({
  type: CREATE_REQUEST,
  payload: {
    formItem
  }
});

export const updateRequest = (id, formItem) => ({
  type: UPDATE_REQUEST,
  payload: {
    id,
    formItem
  }
});

export const deleteRequest = id => ({
  type: DELETE_REQUEST,
  payload: {
    id
  }
});
