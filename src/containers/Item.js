import {connect} from "react-redux";
import {deleteItem} from "../actions";
import {Item} from "../components/Item";

export default connect(
  state => ({
    items: state.itemReducer.items
  }),
  {deleteItem}
)(Item);
