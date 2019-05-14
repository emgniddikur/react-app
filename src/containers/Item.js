import {connect} from "react-redux";
import {Item} from "../components/Item";

export default connect(
  state => ({
    items: state.createItemReducer.items
  }),
)(Item);
