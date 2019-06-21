import {
  CREATE_ITEM,
  DELETE_ITEM,
  INPUT_DESCRIPTION,
  INPUT_IMAGE_SRC,
  INPUT_ITEM,
  INPUT_KEYWORD,
  INPUT_PRICE,
  INPUT_TITLE,
  SET_ITEMS,
  SET_SEARCH_RESULTS,
  UPDATE_ITEM
} from "../actionTypes";

export const setItems = items => ({
  type: SET_ITEMS,
  payload: {
    items
  }
});

export const inputTitle = title => ({
  type: INPUT_TITLE,
  payload: {
    title
  }
});

export const inputDescription = description => ({
  type: INPUT_DESCRIPTION,
  payload: {
    description
  }
});

export const inputPrice = price => ({
  type: INPUT_PRICE,
  payload: {
    price
  }
});

export const inputImageSrc = imageSrc => ({
  type: INPUT_IMAGE_SRC,
  payload: {
    imageSrc
  }
});

export const inputItem = item => ({
  type: INPUT_ITEM,
  payload: {
    item
  }
});

export const createItem = item => ({
  type: CREATE_ITEM,
  payload: {
    item
  }
});

export const updateItem = (id, item) => ({
  type: UPDATE_ITEM,
  payload: {
    id,
    item
  }
});

export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: {
    id
  }
});

export const inputKeyword = keyword => ({
  type: INPUT_KEYWORD,
  payload: {
    keyword
  }
});

export const setSearchResults = searchResults => ({
  type: SET_SEARCH_RESULTS,
  payload: {
    searchResults
  }
});
