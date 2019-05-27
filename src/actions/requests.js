import {
  AUTHENTICATION_REQUEST,
  CREATE_REQUEST,
  DELETE_REQUEST,
  INDEX_REQUEST,
  SEARCH_REQUEST,
  SHOW_REQUEST,
  UPDATE_REQUEST
} from "../constants/requests";

export const authenticationRequest = authToken => ({
  type: AUTHENTICATION_REQUEST,
  payload: {
    authToken
  }
});

export const indexRequest = () => ({
  type: INDEX_REQUEST
});

export const createRequest = formItem => ({
  type: CREATE_REQUEST,
  payload: {
    formItem
  }
});

export const showRequest = id => ({
  type: SHOW_REQUEST,
  payload: {
    id
  }
});

export const updateRequest = (id, formItem) => ({
  type: UPDATE_REQUEST,
  payload: {
    id: Number(id),
    formItem: formItem
  }
});

export const deleteRequest = id => ({
  type: DELETE_REQUEST,
  payload: {
    id: Number(id)
  }
});

export const searchRequest = keyword => ({
  type: SEARCH_REQUEST,
  payload: {
    keyword
  }
});
