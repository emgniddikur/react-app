import {FETCH_FAILURE, RESET_ERROR_MESSAGE} from "../constants/errors";

export const errorReducer = (
  state = {
    message: null,
    details: null
  }, action
) => {
  switch (action.type) {
    case FETCH_FAILURE:
      return {
        message: action.payload.error.response.data.message,
        details: action.payload.error.response.data.details
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
