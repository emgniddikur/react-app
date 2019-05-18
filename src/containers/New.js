import React, {Component} from 'react';
import {ItemForm} from "../components/ItemForm";
import {connect} from "react-redux";
import {createItem, inputDescription, inputImageSrc, inputItem, inputPrice, inputTitle} from "../actions";

class New extends Component {
  constructor(props) {
    super(props);
    this.props.inputItem(this.props.initialItem);
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
        createItem={this.props.createItem}
      />
    );
  }
}

export default connect(
  state => ({
    formItem: state.itemReducer.formItem,
    initialItem: state.itemReducer.initialItem
  }),
  {inputTitle, inputDescription, inputPrice, inputImageSrc, inputItem, createItem}
)(New);
