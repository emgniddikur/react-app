import {FAILURE_FETCH} from "../constants/errors";

export const failureFetch = error => ({
  type: FAILURE_FETCH,
  payload: {
    error
  }
});
