import React, {Component} from "react";
import {ItemForm} from "../components/ItemForm";
import {connect} from "react-redux";
import {inputDescription, inputImageSrc, inputItem, inputPrice, inputTitle, updateItem} from "../actions";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.props.inputItem(this.props.items.find(e => e.id === Number(this.props.itemId)));
  }

  render() {
    return (
      <ItemForm
        itemId={this.props.itemId}
        history={this.props.history}
        formItem={this.props.formItem}
        inputTitle={this.props.inputTitle}
        inputDescription={this.props.inputDescription}
        inputPrice={this.props.inputPrice}
        inputImageSrc={this.props.inputImageSrc}
        updateItem={this.props.updateItem}
      />
    );
  }
}

export default connect(
  state => ({
    formItem: state.itemReducer.formItem,
    items: state.itemReducer.items
  }),
  {inputTitle, inputDescription, inputPrice, inputImageSrc, inputItem, updateItem}
)(Edit);
