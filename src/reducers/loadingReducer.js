import {REQUEST_TO_GET_ALL_ITEMS, REQUEST_TO_GET_ITEM, REQUEST_TO_SEARCH_ITEMS} from "../constants/requests";
import {SET_ITEM, SET_ITEMS, SET_SEARCH_RESULTS} from "../constants/items";

export const loadingReducer = (state = {loading: false}, action) => {
  switch (action.type) {
    case REQUEST_TO_GET_ALL_ITEMS:
    case REQUEST_TO_GET_ITEM:
    case REQUEST_TO_SEARCH_ITEMS:
      return {
        loading: true
      };
    case SET_ITEMS:
    case SET_ITEM:
    case SET_SEARCH_RESULTS:
      return {
        loading: false
      };
    default:
      return state;
  }
};
