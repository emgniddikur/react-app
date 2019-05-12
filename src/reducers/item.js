const initialState = {
  formItem: {
    id: "4",
    title: "a",
    description: "",
    price: null,
    imagePath: ""
  },
  items: [
    {
      id: 1,
      title: "りんご",
      description: "りんごです。",
      price: 100,
      imagePath: ""
    },
    {
      id: 2,
      title: "ぶどう",
      description: "ぶどうです。",
      price: 120,
      imagePath: ""
    },
    {
      id: 3,
      title: "みかん",
      description: "みかんです。",
      price: 80,
      imagePath: ""
    },
  ]
};

export const item = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_TITLE':
      return {
        ...state,
        formItem: Object.assign(state.formItem, {title: action.payload.title})
      };
    case 'INPUT_DESCRIPTION':
      return {
        ...state,
        formItem: Object.assign(state.formItem, {description: action.payload.description})
      };
    case 'INPUT_PRICE':
      return {
        ...state,
        formItem: Object.assign(state.formItem, {price: action.payload.price})
      };
    case 'ADD_ITEM':
      return {
        ...state,
        items: state.items.concat([action.payload.formItem])
      };
    default:
      return state;
  }
};
