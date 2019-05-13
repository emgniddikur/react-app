const initialState = {
  formItem: {
    id: null,
    title: "",
    description: "",
    price: "",
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
        formItem: {...state.formItem, title: action.payload.title}
      };
    case 'INPUT_DESCRIPTION':
      return {
        ...state,
        formItem: {...state.formItem, description: action.payload.description}
      };
    case 'INPUT_PRICE':
      return {
        ...state,
        formItem: {...state.formItem, price: Number(action.payload.price)}
      };
    case 'ADD_ITEM':
      action.payload.formItem.id = action.createCount + 1;
      return {
        ...state,
        items: state.items.concat([action.payload.formItem]),
        formItem: initialState.formItem
      };
    default:
      return state;
  }
};
