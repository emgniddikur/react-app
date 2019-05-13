import {connect} from "react-redux";
import {ItemList} from "../components/ItemList";

export default connect(
  state => ({
    items: state.items
  })
)(ItemList);
