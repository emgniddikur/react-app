import {connect} from "react-redux";
import {addItem, inputDescription, inputPrice, inputTitle} from "../actions/createItemActionCreators";
import {ItemForm} from "../components/ItemForm";

export default connect(
  state => ({
    formItem: state.createItemReducer.formItem
  }),
  {inputTitle, inputDescription, inputPrice, addItem}
)(ItemForm);
