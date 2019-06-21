import {
  AUTH_REQUEST,
  FAILURE_FETCH,
  INDEX_REQUEST,
  LOG_IN_REQUEST,
  SEARCH_REQUEST,
  SET_ITEMS,
  SET_SEARCH_RESULTS,
  SUCCESS_LOG_IN
} from "../actionTypes";

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
