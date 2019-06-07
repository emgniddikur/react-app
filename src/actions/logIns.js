import {LOG_IN, LOG_OUT} from "../constants/logins";

export const logIn = () => ({
  type: LOG_IN
});

export const logOut = () => ({
  type: LOG_OUT
});
