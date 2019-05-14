import {REMOVE_ITEM} from "../constants";

export const removeItem = id => ({
  type: REMOVE_ITEM,
  payload: {
    id
  }
});
