import {CREATE_REQUEST, DELETE_REQUEST, UPDATE_REQUEST} from "../constants/requests";

export const createRequest = formItem => ({
  type: CREATE_REQUEST,
  payload: {
    formItem
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
