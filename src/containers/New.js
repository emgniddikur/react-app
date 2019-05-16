import React from 'react';
import {ItemForm} from "../components/ItemForm";
import {connect} from "react-redux";
import {createItem, inputDescription, inputPrice, inputTitle} from "../actions";

(function (history) {
  return <ItemForm history={history}/>;
}());

export default connect(
  state => ({
    formItem: state.itemReducer.formItem
  }),
  {inputTitle, inputDescription, inputPrice, createItem}
)(ItemForm);
