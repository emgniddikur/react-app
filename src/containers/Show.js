import React, {Component, Fragment} from 'react';
import {Item} from "../components/Item";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {deleteItem} from "../actions";

class Show extends Component {
  render() {
    return (
      <Fragment>
        <Item item={this.props.items.find(e => e.id === Number(this.props.itemId))}/>
        <Link to={"/" + this.props.itemId + "/edit"}>編集</Link>
        <Link to="/" onClick={() => this.props.deleteItem(this.props.itemId)}>削除</Link>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    items: state.itemReducer.items
  }),
  {deleteItem}
)(Show);
