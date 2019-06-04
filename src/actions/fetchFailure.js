import {FETCH_FAILURE, RESET_ERROR_MESSAGE} from "../constants/FETCH_FAILURE";

export const fetchFailure = error => ({
  type: FETCH_FAILURE,
  payload: {
    message: error.response.data.message,
    details: error.response.data.details
  }
});

export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE
});
