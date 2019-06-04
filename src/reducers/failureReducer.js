import {FETCH_FAILURE, RESET_ERROR_MESSAGE} from "../constants/FETCH_FAILURE";

export const failureReducer = (
  state = {
    message: null,
    details: null
  }, action
) => {
  switch (action.type) {
    case FETCH_FAILURE:
      return {
        message: action.payload.message,
        details: action.payload.details
      };
    case RESET_ERROR_MESSAGE:
      return {
        message: null,
        details: null
      };
    default:
      return state;
  }
};
