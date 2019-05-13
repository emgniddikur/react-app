import React, {Fragment} from 'react';
import ItemForm from "./containers/ItemForm";
import ItemList from "./containers/ItemList";

export const App = () => {
  return (
    <Fragment>
      <ItemForm/>
      <ItemList/>
    </Fragment>
  )
};
