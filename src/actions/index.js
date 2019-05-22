import {
  CREATE_ITEM,
  DELETE_ITEM,
  INPUT_DESCRIPTION,
  INPUT_IMAGE_SRC,
  INPUT_ITEM,
  INPUT_PRICE,
  INPUT_TITLE,
  SET_ITEMS,
  UPDATE_ITEM
} from "../constants/index";

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
    price: Number(price)
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

export const createItem = formItem => ({
  type: CREATE_ITEM,
  payload: {
    formItem
  }
});

export const updateItem = (id, formItem) => ({
  type: UPDATE_ITEM,
  payload: {
    id: Number(id),
    formItem: formItem
  }
});

export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: {
    id: Number(id)
  }
});
