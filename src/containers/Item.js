import {connect} from "react-redux";
import {deleteItem, updateItem} from "../actions/itemActionCreators";
import {Item} from "../components/Item";

export default connect(
  state => ({
    items: state.itemReducer.items
  }),
  {updateItem, deleteItem}
)(Item);
