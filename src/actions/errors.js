import {FAILURE_FETCH} from "../constants/errors";

export const failureFetch = (message, details) => ({
  type: FAILURE_FETCH,
  payload: {
    message,
    details
  }
});
