import {AUTH_REQUEST, INDEX_REQUEST, LOG_IN_REQUEST, SEARCH_REQUEST} from "../constants/requests";
import {SET_ITEMS, SET_SEARCH_RESULTS} from "../constants/items";
import {FAILURE_FETCH} from "../constants/errors";
import {SUCCESS_LOG_IN} from "../constants/logIn";

export const loadingReducer = (state = {isLoading: false}, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
    case AUTH_REQUEST:
    case INDEX_REQUEST:
    case SEARCH_REQUEST:
      return {
        isLoading: true
      };
    case SUCCESS_LOG_IN:
    case SET_ITEMS:
    case SET_SEARCH_RESULTS:
    case FAILURE_FETCH:
      return {
        isLoading: false
      };
    default:
      return state;
  }
};
