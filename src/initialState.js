export const initialState = {
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
  ],
  createCount: 3
};
