import {initialState} from "./initialState";
import {ADD_ITEM, INPUT_DESCRIPTION, INPUT_PRICE, INPUT_TITLE, REMOVE_ITEM} from "../constants";

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_TITLE:
      return {
        ...state,
        formItem: {...state.formItem, title: action.payload.title}
      };
    case INPUT_DESCRIPTION:
      return {
        ...state,
        formItem: {...state.formItem, description: action.payload.description}
      };
    case INPUT_PRICE:
      return {
        ...state,
        formItem: {...state.formItem, price: Number(action.payload.price)}
      };
    case ADD_ITEM:
      action.payload.formItem.id = state.createCount + 1;
      return {
        ...state,
        items: state.items.concat([action.payload.formItem]),
        createCount: state.createCount + 1,
        formItem: initialState.formItem
      };
    case REMOVE_ITEM:
      const items = state.items.filter(e => e.id !== Number(action.payload.id));
      return {
        ...state,
        items: items
      };
    default:
      return state;
  }
};
