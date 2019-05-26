import React, {Component} from "react";
import {ItemForm} from "../components/ItemForm";
import {connect} from "react-redux";
import {inputDescription, inputImageSrc, inputItem, inputPrice, inputTitle} from "../actions/index";
import {updateRequest} from "../actions/requests";

class Edit extends Component {
  constructor(props) {
    super(props);
    const {inputItem, items, itemId} = this.props;
    inputItem(items.find(e => e.id === Number(itemId)));
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
    formItem: state.itemReducer.formItem,
    items: state.itemReducer.items
  }),
  {inputTitle, inputDescription, inputPrice, inputImageSrc, inputItem, updateRequest}
)(Edit);
