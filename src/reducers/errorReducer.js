import {FAILURE_FETCH} from "../constants/errors";
import {LOCATION_CHANGE} from "react-router-redux";

export const errorReducer = (
  state = {
    message: null,
    details: null
  }, action
) => {
  switch (action.type) {
    case FAILURE_FETCH:
      return {
        message: action.payload.error.response.data.message,
        details: action.payload.error.response.data.details
      };
    case LOCATION_CHANGE:
      return {
        message: null,
        details: null
      };
    default:
      return state;
  }
};
