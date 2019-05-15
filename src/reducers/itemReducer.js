import {initialState} from "./initialState";
import {
  CREATE_ITEM,
  DELETE_ITEM,
  INPUT_DESCRIPTION,
  INPUT_ITEM,
  INPUT_PRICE,
  INPUT_TITLE,
  UPDATE_ITEM
} from "../constants";

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_TITLE:
      return {
        ...state,
        formItem: {
          ...state.formItem,
          title: action.payload.title
        }
      };
    case INPUT_DESCRIPTION:
      return {
        ...state,
        formItem: {
          ...state.formItem,
          description: action.payload.description
        }
      };
    case INPUT_PRICE:
      return {
        ...state,
        formItem: {
          ...state.formItem,
          price: Number(action.payload.price)
        }
      };
    case INPUT_ITEM:
      return {
        ...state,
        formItem: {
          ...state.formItem,
          title: action.payload.title,
          description: action.payload.description,
          price: action.payload.price
        }
      };
    case CREATE_ITEM:
      action.payload.formItem.id = state.createCount + 1;
      return {
        ...state,
        items: state.items.concat([action.payload.formItem]),
        createCount: state.createCount + 1,
        formItem: initialState.formItem
      };
    case UPDATE_ITEM:
      const id = Number(action.payload.id);
      action.payload.formItem.id = id;
      const items = state.items.filter(e => e.id !== id);
      return {
        ...state,
        items: items.concat([action.payload.formItem]),
        formItem: initialState.formItem
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(e => e.id !== Number(action.payload.id))
      };
    default:
      return state;
  }
};
