import {connect} from "react-redux";
import {removeItem} from "../actions/removeItemActionCreator";
import {Item} from "../components/Item";

export default connect(
  state => ({
    items: state.createItemReducer.items
  }),
  {removeItem}
)(Item);
