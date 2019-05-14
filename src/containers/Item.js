import {connect} from "react-redux";
import {removeItem} from "../actions/deleteItemActionCreator";
import {Item} from "../components/Item";

export default connect(
  state => ({
    items: state.itemReducer.items
  }),
  {removeItem}
)(Item);
