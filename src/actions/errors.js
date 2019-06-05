import {FETCH_FAILURE, RESET_ERROR_MESSAGE} from "../constants/errors";

export const fetchFailure = error => ({
  type: FETCH_FAILURE,
  payload: {
    error
  }
});

export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE
});
