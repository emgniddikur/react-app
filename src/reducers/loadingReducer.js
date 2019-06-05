import {INDEX_REQUEST, SEARCH_REQUEST, SHOW_REQUEST} from "../constants/requests";
import {SET_ITEM, SET_ITEMS, SET_SEARCH_RESULTS} from "../constants/items";
import {FETCH_FAILURE} from "../constants/errors";

export const loadingReducer = (state = {isFetching: false}, action) => {
  switch (action.type) {
    case INDEX_REQUEST:
    case SHOW_REQUEST:
    case SEARCH_REQUEST:
      return {
        isFetching: true
      };
    case SET_ITEMS:
    case SET_ITEM:
    case SET_SEARCH_RESULTS:
    case FETCH_FAILURE:
      return {
        isFetching: false
      };
    default:
      return state;
  }
};
