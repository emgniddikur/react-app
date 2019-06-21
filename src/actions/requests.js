import {
  AUTH_REQUEST,
  CREATE_REQUEST,
  DELETE_REQUEST,
  INDEX_REQUEST,
  LOG_IN_REQUEST,
  LOG_OUT_REQUEST,
  SEARCH_REQUEST,
  UPDATE_REQUEST
} from "../actionTypes";

export const logInRequest = () => ({
  type: LOG_IN_REQUEST
});

export const authRequest = authToken => ({
  type: AUTH_REQUEST,
  payload: {
    authToken
  }
});

export const logOutRequest = () => ({
  type: LOG_OUT_REQUEST
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

export const searchRequest = keyword => ({
  type: SEARCH_REQUEST,
  payload: {
    keyword
  }
});
