import React from "react";
import {ItemForm} from "../components/ItemForm";
import {connect} from "react-redux";
import {inputDescription, inputImageSrc, inputPrice, inputTitle, updateItem} from "../actions";

(function (itemId, history) {
  return <ItemForm itemId={itemId} history={history}/>;
}());

export default connect(
  state => ({
    formItem: state.itemReducer.formItem
  }),
  {inputTitle, inputDescription, inputPrice, inputImageSrc, updateItem}
)(ItemForm);
