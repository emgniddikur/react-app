import {initialItemState} from "./initialItemState";
import {
  CREATE_ITEM,
  DELETE_ITEM,
  INPUT_DESCRIPTION,
  INPUT_IMAGE_SRC,
  INPUT_ITEM,
  INPUT_KEYWORD,
  INPUT_PRICE,
  INPUT_TITLE,
  SET_ITEM,
  SET_ITEMS,
  SET_SEARCH_RESULTS,
  UPDATE_ITEM
} from "../constants/items";

export const itemReducer = (state = initialItemState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload.items
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
          title: action.payload.item.title,
          description: action.payload.item.description,
          price: action.payload.item.price,
          imageSrc: action.payload.item.imageSrc
        }
      };
    case CREATE_ITEM:
      return {
        ...state,
        items: state.items.concat([action.payload.item]),
        formItem: initialItemState.formItem
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items
          .map(e => {
            if (e.id === Number(action.payload.id)) {
              return {...e, ...action.payload.item}
            }
            return e;
          }),
        item: action.payload.item,
        formItem: initialItemState.formItem
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(e => e.id !== Number(action.payload.id)),
        item: initialItemState.item
      };
    case INPUT_KEYWORD:
      return {
        ...state,
        keyword: action.payload.keyword
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload.searchResults
      };
    default:
      return state;
  }
};
