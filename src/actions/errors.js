import {FAILURE_FETCH} from "../actionTypes";

export const failureFetch = (message, details) => ({
  type: FAILURE_FETCH,
  payload: {
    message,
    details
  }
});
