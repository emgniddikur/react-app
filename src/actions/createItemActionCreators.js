import {ADD_ITEM, INPUT_DESCRIPTION, INPUT_PRICE, INPUT_TITLE} from "../constants";

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

export const addItem = formItem => ({
  type: ADD_ITEM,
  payload: {
    formItem
  }
});
