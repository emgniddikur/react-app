import React, {Component} from 'react';
import {initialState} from "../reducers/initialState";
import {ItemForm} from "../components/ItemForm";
import {connect} from "react-redux";
import {inputDescription, inputImageSrc, inputItem, inputPrice, inputTitle} from "../actions/index";
import {createRequest} from "../actions/requests";

class New extends Component {
  constructor(props) {
    super(props);
    this.props.inputItem(initialState.formItem);
  }

  render() {
    return (
      <ItemForm
        history={this.props.history}
        formItem={this.props.formItem}
        inputTitle={this.props.inputTitle}
        inputDescription={this.props.inputDescription}
        inputPrice={this.props.inputPrice}
        inputImageSrc={this.props.inputImageSrc}
        createRequest={this.props.createRequest}
      />
    );
  }
}

export default connect(
  state => ({
    formItem: state.itemReducer.formItem,
    initialItem: state.itemReducer.initialItem
  }),
  {inputTitle, inputDescription, inputPrice, inputImageSrc, inputItem, createRequest}
)(New);
