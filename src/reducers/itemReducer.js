import {initialItemState} from "./initialItemState";
import {
  CREATE_ITEM,
  DELETE_ITEM,
  INPUT_DESCRIPTION,
  INPUT_IMAGE_SRC,
  INPUT_ITEM,
  INPUT_PRICE,
  INPUT_TITLE,
  SET_ITEM,
  SET_ITEMS,
  UPDATE_ITEM
} from "../constants/items";

export const itemReducer = (state = initialItemState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload.items
      };
    case SET_ITEM:
      return {
        ...state,
        item: action.payload.item
      };
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
    case INPUT_ITEM:
      return {
        ...state,
        formItem: {
          ...state.formItem,
          title: action.payload.item.title,
          description: action.payload.item.description,
          price: action.payload.item.price,
          imageSrc: action.payload.item.imageSrc
        }
      };
    case CREATE_ITEM:
      return {
        ...state,
        items: state.items.concat([action.payload.formItem]),
        formItem: initialItemState.formItem
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items
          .map(e => {
            if (e.id === action.payload.id) {
              return {...e, ...action.payload.formItem}
            }
            return e;
          }),
        formItem: initialItemState.formItem
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
