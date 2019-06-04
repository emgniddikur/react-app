import {
  REQUEST_AUTHENTICATION,
  REQUEST_TO_CREATE_ITEM,
  REQUEST_TO_DELETE_ITEM,
  REQUEST_TO_GET_ALL_ITEMS,
  REQUEST_TO_GET_ITEM,
  REQUEST_TO_SEARCH_ITEMS,
  REQUEST_TO_UPDATE_ITEM
} from "../constants/requests";

export const requestAuthentication = authToken => ({
  type: REQUEST_AUTHENTICATION,
  payload: {
    authToken
  }
});

export const requestToGetAllItems = () => ({
  type: REQUEST_TO_GET_ALL_ITEMS
});

export const createRequest = formItem => ({
  type: REQUEST_TO_CREATE_ITEM,
  payload: {
    formItem
  }
});

export const requestToGetOneItem = id => ({
  type: REQUEST_TO_GET_ITEM,
  payload: {
    id
  }
});

export const updateRequest = (id, formItem) => ({
  type: REQUEST_TO_UPDATE_ITEM,
  payload: {
    id,
    formItem
  }
});

export const deleteRequest = id => ({
  type: REQUEST_TO_DELETE_ITEM,
  payload: {
    id
  }
});

export const requestToSearchItems = keyword => ({
  type: REQUEST_TO_SEARCH_ITEMS,
  payload: {
    keyword
  }
});
