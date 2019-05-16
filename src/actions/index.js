import {
  CREATE_ITEM,
  DELETE_ITEM,
  INPUT_DESCRIPTION,
  INPUT_ITEM,
  INPUT_PRICE,
  INPUT_TITLE,
  UPDATE_ITEM
} from "../constants";

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

export const inputItem = (item) => ({
  type: INPUT_ITEM,
  payload: {
    title: item.title,
    description: item.description,
    price: item.price
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
    id: id,
    formItem: formItem
  }
});

export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: {
    id
  }
});
