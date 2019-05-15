import {connect} from "react-redux";
import {
  createItem,
  inputDescription,
  inputItem,
  inputPrice,
  inputTitle,
  updateItem
} from "../actions/itemActionCreators";
import {ItemForm} from "../components/ItemForm";

export default connect(
  state => ({
    formItem: state.itemReducer.formItem,
    items: state.itemReducer.items
  }),
  {inputTitle, inputDescription, inputPrice, inputItem, createItem, updateItem}
)(ItemForm);
