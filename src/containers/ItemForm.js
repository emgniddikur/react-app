import {connect} from "react-redux";
import {addItem, inputDescription, inputPrice, inputTitle} from "../actions/createItem";
import {ItemForm} from "../components/ItemForm";

export default connect(
  state => ({
    formItem: state.formItem
  }),
  {inputTitle, inputDescription, inputPrice, addItem}
)(ItemForm);
