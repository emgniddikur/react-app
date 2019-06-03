import React from "react";
import {ItemForm} from "../components/ItemForm";
import {connect} from "react-redux";
import {inputDescription, inputImageSrc, inputPrice, inputTitle} from "../actions/items";
import {updateRequest} from "../actions/requests";

const Edit = ({itemId, formItem, inputTitle, inputDescription, inputPrice, inputImageSrc, updateRequest}) => {
  return (
    <ItemForm
      itemId={itemId}
      formItem={formItem}
      inputTitle={inputTitle}
      inputDescription={inputDescription}
      inputPrice={inputPrice}
      inputImageSrc={inputImageSrc}
      updateRequest={updateRequest}
    />
  );
};

export default connect(
  state => ({
    formItem: state.itemReducer.formItem
  }),
  {inputTitle, inputDescription, inputPrice, inputImageSrc, updateRequest}
)(Edit);
