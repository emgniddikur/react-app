import {connect} from "react-redux";
import {deleteItem, inputItem} from "../actions";
import {Item} from "../components/Item";

export default connect(
  state => ({
    items: state.itemReducer.items
  }),
  {inputItem, deleteItem}
)(Item);
