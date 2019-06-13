import {SUCCESS_LOG_IN, SUCCESS_LOG_OUT} from "../constants/logIns";

export const successLogIn = () => ({
  type: SUCCESS_LOG_IN
});

export const successLogOut = () => ({
  type: SUCCESS_LOG_OUT
});
