import {initialState} from "../initialState";
import {
  CREATE_ITEM,
  DELETE_ITEM,
  INPUT_DESCRIPTION,
  INPUT_IMAGE_SRC,
  INPUT_PRICE,
  INPUT_TITLE,
  UPDATE_ITEM
} from "../constants";

export const items = (state = initialState, action) => {
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
          price: action.payload.price
        }
      };
    case INPUT_IMAGE_SRC:
      return {
        ...state,
        formItem: {
          ...state.formItem,
          imageSrc: action.payload.imageSrc
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
      action.payload.formItem.id = action.payload.id;
      return {
        ...state,
        items: state.items
          .filter(e => e.id !== action.payload.id)
          .concat([action.payload.formItem]),
        formItem: initialState.formItem
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(e => e.id !== action.payload.id)
      };
    default:
      return state;
  }
};
