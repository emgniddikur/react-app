export const inputTitle = title => ({
  type: 'INPUT_TITLE',
  payload: {
    title
  }
});

export const inputDescription = description => ({
  type: 'INPUT_DESCRIPTION',
  payload: {
    description
  }
});

export const inputPrice = price => ({
  type: 'INPUT_PRICE',
  payload: {
    price
  }
});

let latestItemId = 3;

export const addItem = formItem => ({
  type: 'ADD_ITEM',
  formItemId: ++latestItemId,
  payload: {
    formItem
  }
});
