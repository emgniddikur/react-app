import React, {Component} from "react";
import {ItemForm} from "../components/ItemForm";
import {connect} from "react-redux";
import {inputDescription, inputImageSrc, inputItem, inputPrice, inputTitle} from "../actions/items";
import {updateRequest} from "../actions/requests";

class Edit extends Component {
  constructor(props) {
    super(props);
    const {item, inputItem} = this.props;
    inputItem(item);
  }

  render() {
    const {
      itemId,
      formItem,
      inputTitle,
      inputDescription,
      inputPrice,
      inputImageSrc,
      updateRequest
    } = this.props;
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
  }
}

export default connect(
  state => ({
    item: state.itemReducer.item,
    formItem: state.itemReducer.formItem
  }),
  {inputTitle, inputDescription, inputPrice, inputImageSrc, inputItem, updateRequest}
)(Edit);
