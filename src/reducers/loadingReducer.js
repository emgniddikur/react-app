import {AUTH_REQUEST, INDEX_REQUEST, LOG_IN_REQUEST, SEARCH_REQUEST} from "../constants/requests";
import {SET_ITEMS, SET_SEARCH_RESULTS} from "../constants/items";
import {FETCH_FAILURE} from "../constants/errors";
import {LOG_IN} from "../constants/logins";

export const loadingReducer = (state = {isFetching: false}, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
    case LOG_IN_REQUEST:
    case INDEX_REQUEST:
    case SEARCH_REQUEST:
      return {
        isFetching: true
      };
    case LOG_IN:
    case SET_ITEMS:
    case SET_SEARCH_RESULTS:
    case FETCH_FAILURE:
      return {
        isFetching: false
      };
    default:
      return state;
  }
};
