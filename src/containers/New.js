import React from 'react';
import {ItemForm} from "../components/forms/ItemForm";
import {connect} from "react-redux";
import {inputDescription, inputImageSrc, inputPrice, inputTitle} from "../actions/items";
import {createRequest} from "../actions/requests";

const New = ({formItem, inputTitle, inputDescription, inputPrice, inputImageSrc, createRequest}) => {
  return (
    <ItemForm
      formItem={formItem}
      inputTitle={inputTitle}
      inputDescription={inputDescription}
      inputPrice={inputPrice}
      inputImageSrc={inputImageSrc}
      createRequest={createRequest}
    />
  );
};

export default connect(
  state => ({
    formItem: state.itemReducer.formItem
  }),
  {inputTitle, inputDescription, inputPrice, inputImageSrc, createRequest}
)(New);
