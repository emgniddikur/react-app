import React, {Component} from 'react';
import {initialItemState} from "../reducers/initialItemState";
import {ItemForm} from "../components/ItemForm";
import {connect} from "react-redux";
import {inputDescription, inputImageSrc, inputItem, inputPrice, inputTitle} from "../actions/items";
import {createRequest} from "../actions/requests";

class New extends Component {
  constructor(props) {
    super(props);
    this.props.inputItem(initialItemState.formItem);
  }

  render() {
    const {
      formItem,
      inputTitle,
      inputDescription,
      inputPrice,
      inputImageSrc,
      createRequest
    } = this.props;
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
  }
}

export default connect(
  state => ({
    formItem: state.itemReducer.formItem
  }),
  {inputTitle, inputDescription, inputPrice, inputImageSrc, inputItem, createRequest}
)(New);
